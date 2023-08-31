import IPatient from './IPatient';
import IUser from './IUser';

export default interface IAppointment {
   id?: string;
   dayOfWeek: string;
   time: string;
   professional: IUser;
   professionalUserId: string;
   patient: IPatient;
   patientId: string;
   editLink?: string;
}
