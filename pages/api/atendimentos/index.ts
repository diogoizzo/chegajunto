import type { NextApiRequest, NextApiResponse } from 'next';
import ConsultationController from '../../../controller/ConsultationController';

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
      ConsultationController.getAll(req, res);
   } else if (req.method === 'POST') {
      ConsultationController.create(req, res);
   } else {
      return res
         .status(405)
         .json({ error: 'Esse tipo de requisição não é suportada nesta rota' });
   }
}
