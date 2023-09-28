import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import AwsServices from '../../../../services/AwsServices';
import prisma from '../../../../lib/prisma';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'DELETE') {
      const token = await getToken({ req });
      const { id, awsFileName } = req.query;
      if (token) {
         const deleted = await AwsServices.delete(String(awsFileName));
         if (deleted) {
            const deletedPhoto = await prisma.document.delete({
               where: {
                  id: String(id)
               }
            });
            if (deletedPhoto) {
               res.status(200).json(deletedPhoto);
            } else {
               res.status(400).send('Não foi possível apagar a foto');
            }
         } else {
            res.status(500).send('Não foi possível apagar a foto na AWS');
         }
      } else {
         res.status(401).send({ message: 'Acesso negado' });
      }
   } else if (req.method === 'PUT') {
      const token = await getToken({ req });
      const { id, awsFileName } = req.query;
      if (token) {
         if (req.body.updatedFile) {
            console.log('entrei no update com arquivo');
            const deleted = await AwsServices.delete(String(awsFileName));
            delete req.body.uploadedBy;
            delete req.body.belongsTo;
            delete req.body.updatedFile;
            if (deleted) {
               const updatedDocument = await prisma.document.update({
                  where: {
                     id: String(id)
                  },
                  data: {
                     ...req.body
                  }
               });
               if (updatedDocument) {
                  res.status(200).json(updatedDocument);
               } else {
                  res.status(400).send(
                     'Não foi possível apagar o arquivo do banco de dados'
                  );
               }
            } else {
               res.status(500).send(
                  'Não foi possível apagar o documento na AWS'
               );
            }
         } else {
            delete req.body.uploadedBy;
            delete req.body.belongsTo;
            const updatedDocument = await prisma.document.update({
               where: {
                  id: String(id)
               },
               data: {
                  ...req.body
               }
            });
            if (updatedDocument) {
               res.status(200).json(updatedDocument);
            } else {
               res.status(400).send(
                  'Não foi possível apagar o arquivo do banco de dados'
               );
            }
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
