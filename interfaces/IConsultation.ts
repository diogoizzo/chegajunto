import IPatient from './IPatient';
import IUser from './IUser';

export default interface IConsultation {
   id?: string;
   patientAbsent: boolean;
   observation?: string;
   createdAt: Date;
   professional?: IUser;
   professionalUserId?: string;
   patient: IPatient;
   patientId: string;
   consultationLink: string;
   consultationEditLink?: string;
}
