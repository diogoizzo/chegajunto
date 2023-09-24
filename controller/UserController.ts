import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import UserRepository from '../repository/UserRepository';
import withAutentication from '../pages/api/auth/withAutentication';

export default class UserController {
   static async create(req: NextApiRequest, res: NextApiResponse) {
      try {
         const password = req.body.password;
         const hash = await bcrypt.hash(password, 0);
         delete req.body.confirmPassword;
         delete req.body.userLink;
         const createdUser = await UserRepository.create(
            req.body,
            req.body.period,
            hash
         );
         return res.status(200).end();
      } catch (err: any) {
         return res.status(503).json({ err: err.toString() });
      }
   }
   static async updateProfile(req: NextApiRequest, res: NextApiResponse) {
      const password = req.body.password;
      const hash = await bcrypt.hash(password, 0);
      try {
         await UserRepository.updateProfile(
            String(req.body.id),
            req.body,
            hash,
            req.body.period
         );
      } catch (error) {
         console.log(error);
         return res.status(500).end();
      }
      return res.status(200).end();
   }
   static async getAll(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const users = await UserRepository.getAll();
      if (users) {
         res.status(200).json(users);
      } else {
         res.status(404).json({ error: 'Usuários não encontrados' });
      }
   }
   static async getById(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const id = String(req.query.id);
      const user = await UserRepository.findById(id);
      if (user) {
         res.status(200).json(user);
      } else {
         res.status(404).json({ error: 'Usuário não encontrado' });
      }
   }
   static async updateById(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const id = String(req.query.id);
      delete req.body.userLink;
      const user = await UserRepository.updateById(id, req.body);
      if (user) {
         res.status(200).json(user);
      } else {
         res.status(404).json({ error: 'Usuário não encontrado' });
      }
   }
   static async delete(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const id = String(req.query.id);
      const deletedUser = await UserRepository.deleteById(id);
      if (deletedUser) {
         res.status(200).json(deletedUser);
      } else {
         res.status(404).json({ error: 'Usuário não encontrado' });
      }
   }
}
