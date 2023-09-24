import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import prisma from '../../../lib/prisma';
import PatientController from '../../../controller/PatientController';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'GET') {
      PatientController.findById(req, res);
   } else if (req.method === 'PATCH') {
      PatientController.update(req, res);
   } else if (req.method === 'DELETE') {
      PatientController.archivePatient(req, res);
   } else {
      return res
         .status(405)
         .json({ error: 'Esse tipo de requisição não é suportada nesta rota' });
   }
}
