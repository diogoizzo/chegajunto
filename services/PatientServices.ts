import axios from 'axios';

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
      try {
         const res = await axios.patch(
            `/api/pacientes/${formData.id}`,
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
            const rest = await axios.delete(`/api/pacientes/${id}`);
            return rest.data;
         }
      } catch (e) {
         console.log(e);
      }
   }
}
