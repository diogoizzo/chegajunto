import axios from 'axios';
import { IAppointmentForm } from '../components/sections/AppointmentForm';

interface updatedAppointmentParams {
   id: string;
   form: IAppointmentForm;
}

export default class AppointmentServices {
   static async getAll() {
      const res = await axios.get('/api/compromissos');
      return res.data;
   }
   static async getById(id: string) {
      const res = await axios.get(`/api/compromissos/${id}`);
      return res.data;
   }
   static async update({ id, form }: updatedAppointmentParams) {
      delete form.patient;
      delete form.professional;
      const res = await axios.put(`/api/compromissos/${id}`, form);
      return res.data;
   }
   static async create(form: IAppointmentForm) {
      delete form.patient;
      delete form.professional;
      const res = await axios.post(`/api/compromissos/`, form);
      return res.data;
   }
   static async delete(id?: string) {
      if (id) {
         const res = await axios.delete(`/api/compromissos/${id}`);
         return res.data;
      }
   }
}
