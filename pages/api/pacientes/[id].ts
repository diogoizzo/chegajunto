import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import prisma from '../../../lib/prisma';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'GET') {
      const token = await getToken({ req });
      const id = req.query.id;
      if (token) {
         const patient = await prisma.patient.findUnique({
            where: { id: String(id) }
         });
         if (patient) {
            res.status(200).json(patient);
         } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
         }
      } else {
         res.status(401).send({ message: 'Acesso negado' });
      }
   } else if (req.method === 'PATCH') {
      const token = await getToken({ req });
      const id = req.query.id;
      if (token) {
         const patient = await prisma.patient.update({
            where: {
               id: String(req.query.id)
            },
            data: {
               ...req.body
            }
         });
         if (patient) {
            res.status(200).json(patient);
         } else {
            res.status(404).json({ error: 'Usuário não encontrado' });
         }
      } else {
         res.status(404).json({ message: 'Acesso Negado' });
      }
   } else if (req.method === 'DELETE') {
      //todo aqui eu preciso alterar para não apagar, e sim alterar o status para arquivado
      const token = await getToken({ req });
      const id = req.query.id;
      if (token) {
         const deletedUser = await prisma.patient.delete({
            where: {
               id: String(id)
            }
         });
         if (deletedUser) {
            res.status(200).json(deletedUser);
         } else {
            res.status(404).json({ error: 'Paciente não encontrado' });
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
