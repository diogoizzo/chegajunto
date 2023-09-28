import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import { randomUUID } from 'crypto';
import AwsServices from '../../../../services/AwsServices';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'GET') {
      const token = await getToken({ req });
      if (token) {
         const awsFileName = randomUUID();
         const url = await AwsServices.generateUrl(awsFileName);
         if (url) {
            res.status(200).json({
               url,
               awsFileName
            });
         } else {
            res.status(503).json({
               error: 'Não foi possível criar a url'
            });
         }
      } else {
         res.status(401).send({ message: 'Acesso negado' });
      }
   } else {
      return res
         .status(405)
         .json({ error: 'Esse tipo de requisição não é suportada nesta rota' });
   }
}
