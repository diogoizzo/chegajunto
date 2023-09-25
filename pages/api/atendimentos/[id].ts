import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import prisma from '../../../lib/prisma';
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
      ConsultationController.findById(req, res);
   } else if (req.method === 'PUT') {
      ConsultationController.update(req, res);
   } else if (req.method === 'DELETE') {
      ConsultationController.delete(req, res);
   } else {
      return res
         .status(405)
         .json({ error: 'Esse tipo de requisição não é suportada nesta rota' });
   }
}
