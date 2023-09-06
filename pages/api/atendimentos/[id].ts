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
         const consultation = await prisma.consultation.findUnique({
            where: {
               id: id
            },
            include: {
               professional: true,
               patient: true
            }
         });
         if (consultation) {
            res.status(200).json(consultation);
         } else {
            res.status(404).json({
               error: 'Não foi possível localizar o atendimento'
            });
         }
      } else {
         res.status(401).send({ message: 'Acesso negado' });
      }
   } else if (req.method === 'PUT') {
      const token = await getToken({ req });
      const id = String(req.query.id);
      if (token) {
         const updatedConsultation = await prisma.consultation.update({
            where: {
               id: id
            },
            data: {
               ...req.body
            }
         });
         if (updatedConsultation) {
            res.status(200).json(updatedConsultation);
         } else {
            res.status(404).json({
               error: 'Não foi possível atualizar o atendimento.'
            });
         }
      } else {
         res.status(401).send({ message: 'Acesso negado' });
      }
   } else if (req.method === 'DELETE') {
      const token = await getToken({ req });
      const id = String(req.query.id);
      if (token) {
         const deletedConsultation = await prisma.consultation.delete({
            where: {
               id: id
            }
         });
         if (deletedConsultation) {
            res.status(200).json(deletedConsultation);
         } else {
            res.status(404).json({
               error: 'Não foi possível apagar o atendimento.'
            });
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
