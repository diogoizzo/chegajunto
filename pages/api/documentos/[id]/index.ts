import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import prisma from '../../../../lib/prisma';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'PUT') {
      //todo fazer atualizar a imagem
      // const token = await getToken({ req });
      // const { id } = req.query;
      // if (token) {
      //    const updatedPhoto = await prisma.document.update({
      //       where: {
      //          id: String(id)
      //       },
      //       data: {
      //          ...req.body
      //       }
      //    });
      //    if (updatedPhoto) {
      //       res.status(200).json(updatedPhoto);
      //    } else {
      //       res.status(500).send(
      //          'Não foi possível atualizar as informações da imagem'
      //       );
      //    }
      // } else {
      //    res.status(401).send({ message: 'Acesso negado' });
      // }
   } else if (req.method === 'GET') {
      const token = await getToken({ req });
      const { id } = req.query;
      if (token) {
         const document = await prisma.document.findUnique({
            where: {
               id: String(id)
            },
            select: {
               id: true,
               name: true,
               type: true,
               mimeType: true,
               uploadedBy: true,
               uploadedByUserId: true,
               belongsTo: true,
               belongsToPatientId: true,
               description: true,
               createdAt: true,
               src: true,
               awsFileName: true
            }
         });
         if (document) {
            res.status(200).json(document);
         } else {
            res.status(500).send('Não foi possível localizar o documento');
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
