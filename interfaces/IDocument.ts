import IPatient from './IPatient';
import IUser from './IUser';

export default interface IDocument {
   id: string;
   name: string;
   type?: string;
   mimeType?: string;
   description?: string;
   uploadedBy?: IUser;
   uploadedByUserId?: string;
   belongsTo?: IPatient;
   belongsToPatientId?: string;
   googleDriveId?: string;
   downloadLink?: string;
   viewLink?: string;
   documentEditLink?: string;
}
