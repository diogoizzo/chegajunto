import type { NextApiRequest, NextApiResponse } from 'next';
import UserController from '../../../controller/UserController';

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
      UserController.getById(req, res);
   } else if (req.method === 'PATCH') {
      UserController.updateById(req, res);
   } else if (req.method === 'DELETE') {
      UserController.delete(req, res);
   } else {
      return res
         .status(405)
         .json({ error: 'Esse tipo de requisição não é suportada nesta rota' });
   }
}
