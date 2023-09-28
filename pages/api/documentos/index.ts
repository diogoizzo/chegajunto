import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import prisma from '../../../lib/prisma';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'POST') {
      const token = await getToken({ req });
      const data = req.body;
      delete data.id;
      if (token) {
         const createdDocument = await prisma.document.create({
            data: {
               ...data
            }
         });
         if (createdDocument) {
            res.status(200).json(createdDocument);
         } else {
            res.status(200).send('Não foi possível salvar a nova foto');
         }
      } else {
         res.status(401).send({ message: 'Acesso negado' });
      }
   } else if (req.method === 'GET') {
      const token = await getToken({ req });

      if (token) {
         const allDocuments = await prisma.document.findMany({
            include: {
               belongsTo: true,
               uploadedBy: true
            }
         });
         if (allDocuments) {
            res.status(200).json(allDocuments);
         } else {
            res.status(200).send('Não foi possível salvar a nova foto');
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
