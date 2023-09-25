import type { NextApiRequest, NextApiResponse } from 'next';
import AvailabilityController from '../../../../../controller/AvailabilityController';

export const config = {
   api: {
      externalResolver: true
   }
};

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'POST') {
      AvailabilityController.createPatientAvailability(req, res);
   } else {
      return res
         .status(405)
         .json({ error: 'Esse tipo de requisição não é suportada nesta rota' });
   }
}
