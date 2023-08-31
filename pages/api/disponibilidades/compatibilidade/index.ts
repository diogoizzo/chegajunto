import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import prisma from '../../../../lib/prisma';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'GET') {
      const token = await getToken({ req });
      const { dayOfWeek, time } = req.query;
      if (token) {
         try {
            const availability = await prisma.availability.findUnique({
               where: {
                  dayOfWeek_time: {
                     dayOfWeek: String(dayOfWeek),
                     time: String(time)
                  }
               },
               include: {
                  patients: {
                     where: {
                        status: 'Espera'
                     },
                     orderBy: {
                        createdAt: 'asc'
                     }
                  }
               }
            });
            res.status(200).json(availability);
         } catch (error) {
            res.status(500).json({
               message:
                  'Não foi localizar nenhuma disponibilidade disponibilidade',
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
