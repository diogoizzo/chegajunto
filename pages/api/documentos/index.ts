import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import GoogleDriveServices from '../../../services/GoogleDriveServices';
import formidable from 'formidable';
import prisma from '../../../lib/prisma';

export const config = {
   api: {
      bodyParser: false
   }
};

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'GET') {
      const token = await getToken({ req });
      if (token) {
         const documents = await prisma.document.findMany({
            include: {
               belongsTo: {
                  select: {
                     name: true
                  }
               }
            }
         });
         if (documents) {
            res.status(200).json(documents);
         } else {
            res.status(404).json({
               error: 'Não foi encontrado nenhum documento'
            });
         }
      } else {
         res.status(401).send({ message: 'Acesso negado' });
      }
   } else if (req.method === 'POST') {
      const token = await getToken({ req });
      if (token) {
         const form = formidable({});
         try {
            const { fields, files }: any = await new Promise(
               (resolve, reject) => {
                  form.parse(req, (err, fields, files) => {
                     if (err) reject(err);
                     else resolve({ fields, files });
                  });
               }
            );

            if (!files || !files.file || files.file.length === 0) {
               res.status(400).send({ message: 'Nenhum arquivo enviado' });
               return;
            }

            const googleId = await GoogleDriveServices.uploadFile(
               files.file[0]
            );
            if (googleId) {
               const doc = await prisma.document.create({
                  data: {
                     name: fields.name[0],
                     type: fields.type[0],
                     description: fields.description[0],
                     uploadedByUserId: fields.uploadedByUserId[0],
                     belongsToPatientId: fields.belongsToPatientId[0],
                     googleDriveId: googleId,
                     mimeType: String(files.file[0].mimetype)
                  }
               });
               res.status(200).json(doc);
            } else {
               res.status(503).send({
                  message: 'Não foi possível salvar o documento no Google Drive'
               });
            }
         } catch (err) {
            console.error(err);
            res.status(500).send('Erro no servidor');
         }
      } else {
         res.status(401).send({ message: 'Acesso negado' });
      }
   } else {
      return res
         .status(405)
         .json({ error: 'Esse tipo de requisição não é suportada nesta rota' });
   }
}
