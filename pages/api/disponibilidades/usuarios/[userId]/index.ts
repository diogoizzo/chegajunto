import type { NextApiRequest, NextApiResponse } from 'next';
import AvailabilityController from '../../../../../controller/AvailabilityController';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'POST') {
      AvailabilityController.createUserAvailability(req, res);
   } else {
      return res
         .status(405)
         .json({ error: 'Esse tipo de requisição não é suportada nesta rota' });
   }
}
