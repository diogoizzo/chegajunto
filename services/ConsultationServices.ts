import axios from 'axios';
import { IAppointmentForm } from '../components/sections/AppointmentForm';
import { IConsultationForm } from '../components/sections/ConsultationForm';

interface updatedConsultationParams {
   id: string;
   form: IConsultationForm;
}

export default class ConsultationServices {
   static async getAll() {
      const res = await axios.get('/api/atendimentos');
      return res.data;
   }
   static async getById(id: string) {
      const res = await axios.get(`/api/atendimentos/${id}`);
      return res.data;
   }
   static async update({ id, form }: updatedConsultationParams) {
      const res = await axios.put(`/api/atendimentos/${id}`, form);
      return res.data;
   }
   static async create(form: IAppointmentForm) {
      const res = await axios.post(`/api/atendimentos/`, form);
      return res.data;
   }
   static async delete(id?: string) {
      if (id) {
         const res = await axios.delete(`/api/atendimentos/${id}`);
         return res.data;
      }
   }
}
