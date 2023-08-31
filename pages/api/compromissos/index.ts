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
         const appointments = await prisma.appointment.findMany({
            include: {
               professional: true,
               patient: true
            }
         });
         if (appointments) {
            res.status(200).json(appointments);
         } else {
            res.status(404).json({
               error: 'Não foi possível localizar nenhum compromisso'
            });
         }
      } else {
         res.status(401).send({ message: 'Acesso negado' });
      }
   } else if (req.method === 'POST') {
      const token = await getToken({ req });
      if (token) {
         const appointment = prisma.appointment.create({
            data: {
               ...req.body
            }
         });
         const availability = prisma.availability.update({
            where: {
               dayOfWeek_time: {
                  dayOfWeek: String(req.body.dayOfWeek),
                  time: String(req.body.time)
               }
            },
            data: {
               professionals: {
                  disconnect: {
                     id: String(req.body.professionalUserId)
                  }
               }
            }
         });
         const patient = prisma.patient.update({
            where: {
               id: String(req.body.patientId)
            },
            data: {
               status: 'Ativo',
               underResponsibilityOfUserId: String(req.body.professionalUserId)
            }
         });
         if ((await appointment) && (await patient) && (await availability)) {
            res.status(200).json({ appointment, patient, availability });
         } else {
            res.status(404).json({
               error: 'Não foi possível criar o novo compromisso'
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
