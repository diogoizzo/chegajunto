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
         const appointment = await prisma.appointment.findUnique({
            where: {
               id: id
            },
            include: {
               professional: true,
               patient: true
            }
         });
         if (appointment) {
            res.status(200).json(appointment);
         } else {
            res.status(404).json({
               error: 'Não foi possível localizar o compromisso'
            });
         }
      } else {
         res.status(401).send({ message: 'Acesso negado' });
      }
   } else if (req.method === 'PUT') {
      const token = await getToken({ req });
      const id = String(req.query.id);
      if (token) {
         const updatedAppointment = await prisma.appointment.update({
            where: {
               id: id
            },
            data: {
               ...req.body
            }
         });
         if (updatedAppointment) {
            res.status(200).json(updatedAppointment);
         } else {
            res.status(404).json({
               error: 'Não foi possível atualizar o compromisso.'
            });
         }
      } else {
         res.status(401).send({ message: 'Acesso negado' });
      }
   } else if (req.method === 'DELETE') {
      const token = await getToken({ req });
      const id = String(req.query.id);
      if (token) {
         const deletedAppointment = await prisma.appointment.delete({
            where: {
               id: id
            }
         });
         if (deletedAppointment) {
            const recreatedAvailability = await prisma.user.update({
               where: {
                  id: deletedAppointment.professionalUserId
               },
               data: {
                  availabilities: {
                     connectOrCreate: {
                        where: {
                           dayOfWeek_time: {
                              dayOfWeek: deletedAppointment.dayOfWeek,
                              time: deletedAppointment.time
                           }
                        },
                        create: {
                           dayOfWeek: deletedAppointment.dayOfWeek,
                           time: deletedAppointment.time
                        }
                     }
                  }
               }
            });
            res.status(200).json({ deletedAppointment, recreatedAvailability });
         } else {
            res.status(404).json({
               error: 'Não foi possível apagar o compromisso.'
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
