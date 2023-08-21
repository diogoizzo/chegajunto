import IDocument from './IDocument';
import IUser from './IUser';

export default interface IPatient {
   id: string;
   name: string;
   status: string;
   email?: string;
   birthday?: Date;
   birthplace?: string;
   education?: string;
   school?: string;
   scholarship?: boolean;
   isMedicated?: boolean;
   medication?: string;
   interviewedBy?: IUser;
   interviewedByUserId?: string;
   complaint?: string;
   createdAt?: Date;
   updatedAt?: Date;
   cpf?: string;
   address?: string;
   phone?: string;
   observation?: string;
   underResponsibilityOf?: IUser;
   underResponsibilityOfUserId?: string;
   documents?: IDocument[];
   getLink: string;
   patientEditLink: string;
   isDocumentsComplete?: boolean;
   hasAutorization?: boolean;
   hasSorting?: boolean;
   uploadAutorizationLink?: string;
   uploadSortingLink?: string;
}
