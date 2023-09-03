import IConsultation from '../interfaces/IConsultation';
import IPatient from '../interfaces/IPatient';
import IUser from '../interfaces/IUser';

export default class Consultation implements IConsultation {
   constructor(
      public id: string,
      public patientAbsent: boolean,
      public patient: IPatient,
      public patientId: string,
      public createdAt: Date,
      public observation?: string,
      public professional?: IUser,
      public professionalUserId?: string
   ) {}
   static createFromObject({
      id,
      patientAbsent,
      patient,
      patientId,
      createdAt,
      observation,
      professional,
      professionalUserId
   }: IConsultation): Consultation {
      return new Consultation(
         String(id),
         patientAbsent,
         patient,
         patientId,
         createdAt,
         observation,
         professional,
         professionalUserId
      );
   }
   static createMany(consultations: IConsultation[]): Consultation[] {
      return consultations.map((consultation) => {
         const {
            id,
            patientAbsent,
            patient,
            patientId,
            createdAt,
            observation,
            professional,
            professionalUserId
         } = consultation;
         return new Consultation(
            String(id),
            patientAbsent,
            patient,
            patientId,
            createdAt,
            observation,
            professional,
            professionalUserId
         );
      });
   }
   get consultationLink() {
      return `/atendimentos/${this.id}`;
   }
   get consultationEditLink() {
      return `/atendimentos/editar/${this.id}`;
   }
}
