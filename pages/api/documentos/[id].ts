import type { NextApiRequest, NextApiResponse } from 'next';
import DocumentController from '../../../controller/DocumentController';

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
      DocumentController.findById(req, res);
   } else if (req.method === 'DELETE') {
      DocumentController.delete(req, res);
   } else {
      return res
         .status(405)
         .json({ error: 'Esse tipo de requisição não é suportada nesta rota' });
   }
}
