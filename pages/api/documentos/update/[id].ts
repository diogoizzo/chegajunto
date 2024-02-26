import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import GoogleDriveServices from '../../../../services/GoogleDriveServices';
import isEmptyObject from '../../../../lib/isEmptyObject';
import readFile from '../../../../lib/readFile';
import prisma from '../../../../lib/prisma';

export const config = {
   api: {
      bodyParser: false
   }
};

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'PATCH') {
      const token = await getToken({ req });
      if (!token) {
         res.status(401).send({ message: 'Acesso negado' });
         return;
      }

      const id = String(req.query.id);
      const { fields, files } = await readFile(req); // Certifique-se de que readFile trata a possibilidade de não haver files

      try {
         const updateData: any = {
            name: fields.name ? fields.name[0] : undefined,
            type: fields.type ? fields.type[0] : undefined,
            description: fields.description ? fields.description[0] : undefined,
            uploadedBy: {
               connect: {
                  id: fields.uploadedByUserId
                     ? fields.uploadedByUserId[0]
                     : undefined
               }
            },
            belongsTo: {
               connect: {
                  id: fields.belongsToPatientId
                     ? fields.belongsToPatientId[0]
                     : undefined
               }
            }
         };

         if (!isEmptyObject(files) && files.file) {
            const newFileGoogleId = await GoogleDriveServices.uploadFile(
               files.file[0]
            );
            if (!newFileGoogleId) {
               return res
                  .status(503)
                  .send(
                     'Não foi possível atualizar o documento no Google Drive'
                  );
            }
            updateData.googleDriveId = newFileGoogleId;
            updateData.mimeType = String(files.file[0].mimetype);
         }

         const doc = await prisma.document.update({
            where: { id },
            data: updateData
         });

         res.status(200).json(doc);
      } catch (error) {
         console.error(error);
         res.status(503).json({
            message: 'Erro ao atualizar o documento',
            error
         });
      }
   } else {
      return res
         .status(405)
         .json({ error: 'Esse tipo de requisição não é suportada nesta rota' });
   }
}
