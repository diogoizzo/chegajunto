import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import prisma from '../../../lib/prisma';
import GoogleDriveServices from '../../../services/GoogleDriveServices';
import DocumentController from '../../../controller/DocumentController';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'GET') {
      DocumentController.findById(req, res);
   } else if (req.method === 'DELETE') {
      DocumentController.delete(req, res);
   } else {
      return res
         .status(405)
         .json({ error: 'Esse tipo de requisição não é suportada nesta rota' });
   }
}
