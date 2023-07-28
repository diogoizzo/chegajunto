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
}
