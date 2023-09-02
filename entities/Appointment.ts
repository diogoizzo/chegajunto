import IAppointment from '../interfaces/IAppointment';
import IPatient from '../interfaces/IPatient';
import IUser from '../interfaces/IUser';

export default class Appointment implements IAppointment {
   constructor(
      public id: string,
      public dayOfWeek: string,
      public time: string,
      public professional: IUser,
      public professionalUserId: string,
      public patient: IPatient,
      public patientId: string
   ) {}

   get editLink() {
      return `/compromissos/${this.id}`;
   }
   static createFromObject({
      id,
      dayOfWeek,
      time,
      professional,
      professionalUserId,
      patient,
      patientId
   }: IAppointment): Appointment {
      return new Appointment(
         String(id),
         dayOfWeek,
         time,
         professional,
         professionalUserId,
         patient,
         patientId
      );
   }
   static createMany(appointments: IAppointment[]): Appointment[] {
      return appointments.map((appointment) => {
         const {
            id,
            dayOfWeek,
            time,
            professional,
            professionalUserId,
            patient,
            patientId
         } = appointment;
         return new Appointment(
            String(id),
            dayOfWeek,
            time,
            professional,
            professionalUserId,
            patient,
            patientId
         );
      });
   }
}
