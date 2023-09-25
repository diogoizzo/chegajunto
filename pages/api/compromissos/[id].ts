import type { NextApiRequest, NextApiResponse } from 'next';
import AppointmentController from '../../../controller/AppointmentController';

export const config = {
   api: {
      externalResolver: true
   }
};

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'GET') {
      AppointmentController.findById(req, res);
   } else if (req.method === 'DELETE') {
      AppointmentController.delete(req, res);
   } else {
      return res
         .status(405)
         .json({ error: 'Esse tipo de requisição não é suportada nesta rota' });
   }
}
