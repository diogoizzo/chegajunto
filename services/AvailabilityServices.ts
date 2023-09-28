import axios from 'axios';
import { IAvailabilityForm } from '../components/sections/AvailabilityForm';

interface createPatientAvailabilityParams {
   patientId: string;
   form: IAvailabilityForm;
}
interface createUserAvailabilityParams {
   userId: string;
   form: IAvailabilityForm;
}

export default class AvailabilityServices {
   static async createPatientAvailability({
      patientId,
      form
   }: createPatientAvailabilityParams) {
      const res = await axios.post(
         `/api/disponibilidades/pacientes/${patientId}`,
         form
      );
      return res.data;
   }
   static async deletePatientAvailability({
      patientId,
      availabilityId
   }: {
      patientId: string;
      availabilityId: string;
   }) {
      const res = await axios.delete(
         `/api/disponibilidades/pacientes/${patientId}/${availabilityId}`
      );
      return res.data;
   }
   static async createUserAvailability({
      userId,
      form
   }: createUserAvailabilityParams) {
      const res = await axios.post(
         `/api/disponibilidades/usuarios/${userId}`,
         form
      );
      return res.data;
   }
   static async deleteUserAvailability({
      userId,
      availabilityId
   }: {
      userId: string;
      availabilityId: string;
   }) {
      const res = await axios.delete(
         `/api/disponibilidades/usuarios/${userId}/${availabilityId}`
      );
      return res.data;
   }

   static async getCompatibleAvailabilities(dayOfWeek: string, time: string) {
      try {
         const res = await axios.get(
            `/api/disponibilidades/compatibilidade?dayOfWeek=${dayOfWeek}&time=${time}`
         );
         return res.data;
      } catch (error) {
         console.log(error);
      }
   }
}
