import axios from 'axios';
import { signIn } from 'next-auth/react';
import User from '../entities/User';
import { UserFromData } from '../components/sections/UserForm';

export default class UserServices {
   static async register(form: any) {
      try {
         const res = await axios.post('/api/register', form);
         const { email, password } = form;
         if (res.status === 200) {
            signIn('credentials', {
               email,
               password,
               callbackUrl: '/usuarios',
               redirect: true
            });
         }
      } catch (e) {
         console.log(e);
      }
   }
   static async getAll() {
      try {
         const res = await axios.get('/api/usuarios');
         return User.createMany(res.data);
      } catch (e) {
         console.log(e);
      }
   }
   static async getById(id: any) {
      try {
         const res = await axios.get(`/api/usuarios/${id}`);
         return res.data;
      } catch (e) {
         console.log(e);
      }
   }
   static async updateById(formData: UserFromData) {
      try {
         console.log('Executei update');
         const res = await axios.patch(
            `/api/usuarios/${formData.id}`,
            formData
         );
         return res.data;
      } catch (e) {
         console.log(e);
      }
   }
   static async delete(id?: string) {
      try {
         console.log('Executei delete');
         if (id) {
            const rest = await axios.delete(`/api/usuarios/${id}`);
            return rest.data;
         }
      } catch (e) {
         console.log(e);
      }
   }
}
