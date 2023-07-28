import IUser from '../interfaces/IUser';
import IPatient from '../interfaces/IPatient';

export default class Patient implements IPatient {
   constructor(
      public id: string,
      public name: string,
      public status: string,
      public email?: string,
      public birthday?: Date,
      public birthplace?: string,
      public education?: string,
      public school?: string,
      public scholarship?: boolean,
      public isMedicated?: boolean,
      public medication?: string,
      public interviewedBy?: IUser,
      public complaint?: string,
      public createdAt?: Date,
      public updatedAt?: Date,
      public cpf?: string,
      public address?: string,
      public phone?: string,
      public observation?: string,
      public underResponsibilityOf?: IUser
   ) {}

   get getLink() {
      return `/pacientes/${this.id}`;
   }

   static createFromObject({
      id,
      name,
      status,
      email,
      birthday,
      birthplace,
      education,
      school,
      scholarship,
      isMedicated,
      medication,
      interviewedBy,
      complaint,
      createdAt,
      updatedAt,
      cpf,
      address,
      phone,
      observation,
      underResponsibilityOf
   }: IPatient): IPatient {
      return new Patient(
         id,
         name,
         status,
         email,
         birthday,
         birthplace,
         education,
         school,
         scholarship,
         isMedicated,
         medication,
         interviewedBy,
         complaint,
         createdAt,
         updatedAt,
         cpf,
         address,
         phone,
         observation,
         underResponsibilityOf
      );
   }
   static createMany(patients: IPatient[]): Patient[] {
      return patients.map((patient) => {
         const {
            id,
            name,
            status,
            email,
            birthday,
            birthplace,
            education,
            school,
            scholarship,
            isMedicated,
            medication,
            interviewedBy,
            complaint,
            createdAt,
            updatedAt,
            cpf,
            address,
            phone,
            observation,
            underResponsibilityOf
         } = patient;
         return new Patient(
            id,
            name,
            status,
            email,
            birthday,
            birthplace,
            education,
            school,
            scholarship,
            isMedicated,
            medication,
            interviewedBy,
            complaint,
            createdAt,
            updatedAt,
            cpf,
            address,
            phone,
            observation,
            underResponsibilityOf
         );
      });
   }
}
