import axios from 'axios';
import IPatient from '../interfaces/IPatient';

export default class PatientServices {
   static async getAll() {
      try {
         const res = await axios.get('/api/pacientes');
         return res.data;
      } catch (e) {
         console.log(e);
      }
   }
   static async getById(id: any) {
      try {
         const res = await axios.get(`/api/pacientes/${id}`);
         return res.data;
      } catch (e) {
         console.log(e);
      }
   }
   static async updateById(formData: any) {
      if (formData) {
         const res = await axios.patch(
            `/api/pacientes/${formData.id}`,
            formData
         );
         return res.data;
      }
   }
   static async delete(id?: string) {
      if (id) {
         const rest = await axios.delete(`/api/pacientes/${id}`);
         return rest.data;
      }
   }

   static async create(formData: IPatient) {
      if (formData) {
         const rest = await axios.post(`/api/pacientes/`, formData);
         return rest.data;
      }
   }
}
