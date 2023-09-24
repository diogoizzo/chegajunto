import { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

export default async function withAutentication(
   req: NextApiRequest,
   res: NextApiResponse
) {
   const token = await getToken({ req });
   if (token) {
      return;
   } else {
      return res.status(401).send({ message: 'Acesso Negado' });
   }
}
