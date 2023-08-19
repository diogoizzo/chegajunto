import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import prisma from '../../../lib/prisma';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'GET') {
      const token = await getToken({ req });
      const id = String(req.query.id);
      if (token) {
         const patient = await prisma.document.findUnique({
            where: { id: id },
            include: {
               uploadedBy: true,
               belongsTo: true
            }
         });
         if (patient) {
            res.status(200).json(patient);
         } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
         }
      } else {
         res.status(401).send({ message: 'Acesso negado' });
      }
      //    } else if (req.method === 'PATCH') {
      //       const token = await getToken({ req });
      //       const id = req.query.id;
      //       delete req.body.getLink;
      //       delete req.body.id;
      //       delete req.body.patientEditLink;
      //       delete req.body.status;
      //       const birth = new Date(req.body.birthday);
      //       delete req.body.birthday;
      //       if (token) {
      //          const patient = await prisma.patient.update({
      //             where: {
      //                id: String(id)
      //             },
      //             data: {
      //                birthday: birth,
      //                ...req.body
      //             }
      //          });
      //          if (patient) {
      //             res.status(200).json(patient);
      //          } else {
      //             res.status(404).json({ error: 'Usuário não encontrado' });
      //          }
      //       } else {
      //          res.status(404).json({ message: 'Acesso Negado' });
      //       }
   } else if (req.method === 'DELETE') {
      const token = await getToken({ req });
      const id = req.query.id;
      //todo incluir funcionalidade para deletar o arquivo do googledrive
      if (token) {
         const deletedDocument = await prisma.document.delete({
            where: {
               id: String(id)
            }
         });
         if (deletedDocument) {
            res.status(200).json(deletedDocument);
         } else {
            res.status(404).json({ error: 'Documento não encontrado' });
         }
      } else {
         res.status(401).send({ message: 'Acesso Negado' });
      }
   } else {
      return res
         .status(405)
         .json({ error: 'Esse tipo de requisição não é suportada nesta rota' });
   }
}
