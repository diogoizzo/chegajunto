import IPatient from './IPatient';
import IUser from './IUser';

export default interface IDocument {
   id: string;
   name: string;
   type?: string;
   createdAt?: string;
   mimeType?: string;
   description?: string;
   uploadedBy?: IUser;
   uploadedByUserId?: string;
   belongsTo?: IPatient;
   belongsToPatientId?: string;
   downloadLink?: string;
   viewLink?: string;
   documentEditLink?: string;
   src?: string;
   awsFileName?: string;
}
