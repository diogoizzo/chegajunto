import IDocument from '../interfaces/IDocument';
import IPatient from '../interfaces/IPatient';
import IUser from '../interfaces/IUser';

export default class Document implements IDocument {
   constructor(
      public id: string,
      public name: string,
      public type?: string,
      public mimeType?: string,
      public uploadedBy?: IUser,
      public uploadedByUserId?: string,
      public belongsTo?: IPatient,
      public belongsToPatientId?: string,
      public googleDriveId?: string,
      public description?: string
   ) {}

   get downloadLink() {
      return `https://drive.google.com/uc?id=${this.googleDriveId}&export=download`;
   }
   get viewLink() {
      return `https://drive.google.com/file/d/${this.googleDriveId}/view?usp=drivesdk`;
   }
   get documentDisplayLink() {
      return `/documentos/${this.id}`;
   }
   get documentEditLink() {
      return `/documentos/editar/${this.id}`;
   }
   static createFromObject({
      id,
      name,
      type,
      mimeType,
      uploadedBy,
      uploadedByUserId,
      belongsTo,
      belongsToPatientId,
      googleDriveId,
      description
   }: IDocument): Document {
      return new Document(
         id,
         name,
         type,
         mimeType,
         uploadedBy,
         uploadedByUserId,
         belongsTo,
         belongsToPatientId,
         googleDriveId,
         description
      );
   }

   static createMany(documents: IDocument[]): Document[] {
      return documents.map((document) => {
         const {
            id,
            name,
            type,
            mimeType,
            uploadedBy,
            uploadedByUserId,
            belongsTo,
            belongsToPatientId,
            googleDriveId,
            description
         } = document;
         return new Document(
            id,
            name,
            type,
            mimeType,
            uploadedBy,
            uploadedByUserId,
            belongsTo,
            belongsToPatientId,
            googleDriveId,
            description
         );
      });
   }
}
