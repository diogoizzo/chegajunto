import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import prisma from '../../../lib/prisma';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'GET') {
      const token = await getToken({ req });
      if (token) {
         const consultations = await prisma.consultation.findMany({
            include: {
               patient: true,
               professional: true
            }
         });
         if (consultations) {
            res.status(200).json(consultations);
         } else {
            res.status(404).json({ error: 'Nenhum atendimento encontrado' });
         }
      } else {
         res.status(401).send({ message: 'Acesso negado' });
      }
   } else if (req.method === 'POST') {
      const token = await getToken({ req });
      if (token) {
         const consultation = await prisma.consultation.create({
            data: {
               ...req.body
            }
         });
         if (consultation) {
            res.status(200).json(consultation);
         } else {
            res.status(500).json({
               error: 'Não foi possível criar o atendimento'
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
