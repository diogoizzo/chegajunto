import IPatient from './IPatient';
import IUser from './IUser';

export default interface IAvailability {
   id?: string;
   dayOfWeek: string;
   time: string;
   professionals?: IUser[];
   patientes?: IPatient[];
}
