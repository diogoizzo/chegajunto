import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import readFile from '../../../lib/readFile';
import GoogleDriveServices from '../../../services/GoogleDriveServices';
import DocumentController from '../../../controller/DocumentController';

export const config = {
   api: {
      bodyParser: false
   }
};

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'GET') {
      DocumentController.getAll(req, res);
   } else if (req.method === 'POST') {
      DocumentController.upload(req, res);
      // const files = await GoogleDriveServices.readAll();
      // console.log(files);
      // await GoogleDriveServices.deleteAll(files);
   } else {
      return res
         .status(405)
         .json({ error: 'Esse tipo de requisição não é suportada nesta rota' });
   }
}
