import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import prisma from '../../../../../../lib/prisma';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'DELETE') {
      const token = await getToken({ req });
      const userId = String(req.query.userId);
      const availabilityId = String(req.query.availabilityId);
      if (token) {
         try {
            const deletedAvailability = await prisma.user.update({
               where: {
                  id: userId
               },
               data: {
                  availabilities: {
                     disconnect: {
                        id: availabilityId
                     }
                  }
               }
            });
            res.status(200).json(deletedAvailability);
         } catch (error) {
            res.status(500).json({
               message: 'Não foi possível apagar a disponibilidade',
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
