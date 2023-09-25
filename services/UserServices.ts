import axios from 'axios';
import { signIn } from 'next-auth/react';
import User from '../entities/User';
import { UserFromData } from '../components/sections/UserForm';
import IUser from '../interfaces/IUser';

export default class UserServices {
   static async register(form: any) {
      const res = await axios.post('/api/register', form);
      if (res.status === 200) {
         return true;
      } else {
         return false;
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
         if (id) {
            const rest = await axios.delete(`/api/usuarios/${id}`);
            return rest.data;
         }
      } catch (e) {
         console.log(e);
      }
   }
   static async updateProfile(form: any) {
      try {
         const res = await axios.patch('/api/register', form);
         return res.data;
      } catch (error) {
         console.log(error);
      }
   }
}
