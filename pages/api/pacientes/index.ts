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
         const patients = await prisma.patient.findMany({
            include: {
               documents: true
            }
         });
         if (patients) {
            res.status(200).json(patients);
         } else {
            res.status(404).json({ error: 'Pacientes não encontrados' });
         }
      } else {
         res.status(401).send({ message: 'Acesso negado' });
      }
   } else if (req.method === 'POST') {
      const token = await getToken({ req });
      const birth = req.body.birthday ? new Date(req.body.birthday) : null;
      delete req.body.getLink;
      delete req.body.id;
      delete req.body.patientEditLink;
      delete req.body.status;
      if (token) {
         const patient = await prisma.patient.create({
            data: {
               ...req.body,
               birthday: birth,
               email: req.body.email || null
            }
         });
         res.status(200).json(patient);
      } else {
         res.status(401).send({ message: 'Acesso negado' });
      }
   } else {
      return res
         .status(405)
         .json({ error: 'Esse tipo de requisição não é suportada nesta rota' });
   }
}
