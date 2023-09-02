import IPatient from './IPatient';
import IUser from './IUser';

export default interface IConsultation {
   id?: string;
   createdAt: Date;
   updatedAt: Date;
   patientAbsent: boolean;
   observation?: string;
   professional?: IUser;
   professionalUserId?: string;
   patient: IPatient;
   patientId: string;
}
