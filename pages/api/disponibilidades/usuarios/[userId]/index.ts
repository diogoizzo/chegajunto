import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import prisma from '../../../../../lib/prisma';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'POST') {
      const token = await getToken({ req });
      const userId = String(req.query.userId);
      if (token) {
         try {
            const newAvailabiliy = await prisma.user.update({
               where: {
                  id: userId
               },
               data: {
                  availabilities: {
                     connectOrCreate: {
                        where: {
                           dayOfWeek_time: {
                              dayOfWeek: String(req.body.dayOfWeek),
                              time: String(req.body.time)
                           }
                        },
                        create: {
                           dayOfWeek: String(req.body.dayOfWeek),
                           time: String(req.body.time)
                        }
                     }
                  }
               }
            });
            res.status(200).json(newAvailabiliy);
         } catch (error) {
            res.status(500).json({
               message: 'Não foi possível criar a nova disponibilidade',
               error: error
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
