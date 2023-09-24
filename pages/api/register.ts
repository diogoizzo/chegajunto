import bcrypt from 'bcrypt';
import type { NextApiRequest, NextApiResponse } from 'next';
import UserController from '../../controller/UserController';

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'POST') {
      UserController.create(req, res);
   } else if (req.method === 'PATCH') {
      UserController.updateProfile(req, res);
   } else {
      return res
         .status(405)
         .json({ error: 'This request only supports POST requests' });
   }
}
