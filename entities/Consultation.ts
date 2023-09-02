import IConsultation from '../interfaces/IConsultation';
import IPatient from '../interfaces/IPatient';
import IUser from '../interfaces/IUser';

export default class Consultation implements IConsultation {
   constructor(
      public id: string,
      public createdAt: Date,
      public updatedAt: Date,
      public patientAbsent: boolean,
      public patient: IPatient,
      public patientId: string,
      public observation?: string,
      public professional?: IUser,
      public professionalUserId?: string
   ) {}
   static createFromObject({
      id,
      createdAt,
      updatedAt,
      patientAbsent,
      patient,
      patientId,
      observation,
      professional,
      professionalUserId
   }: IConsultation): Consultation {
      return new Consultation(
         String(id),
         createdAt,
         updatedAt,
         patientAbsent,
         patient,
         patientId,
         observation,
         professional,
         professionalUserId
      );
   }
   static createMany(consultations: IConsultation[]): Consultation[] {
      return consultations.map((consultation) => {
         const {
            id,
            createdAt,
            updatedAt,
            patientAbsent,
            patient,
            patientId,
            observation,
            professional,
            professionalUserId
         } = consultation;
         return new Consultation(
            String(id),
            createdAt,
            updatedAt,
            patientAbsent,
            patient,
            patientId,
            observation,
            professional,
            professionalUserId
         );
      });
   }
}
