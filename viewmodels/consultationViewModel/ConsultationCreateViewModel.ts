import { Dispatch, SetStateAction } from 'react';
import { IConsultationForm } from '../../components/sections/ConsultationForm';
import { UseMutationResult, UseQueryResult } from 'react-query';
import User from '../../entities/User';
import { IAppointmentForm } from '../../components/sections/AppointmentForm';
import Patient from '../../entities/Patient';

export default class ConsultationCreateViewModel {
   constructor(
      public form: IConsultationForm,
      public setForm: Dispatch<SetStateAction<IConsultationForm>>,
      public userQuery: UseQueryResult<User[] | undefined, unknown>,
      public patientQuery: UseQueryResult<any, unknown>,
      public createConsultationMutation: UseMutationResult<
         any,
         unknown,
         IAppointmentForm,
         unknown
      >,
      public users: User[],
      public patients: Patient[]
   ) {}
   save() {
      this.createConsultationMutation.mutate(this.form);
   }
}
