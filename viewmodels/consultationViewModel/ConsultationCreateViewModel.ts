import { Dispatch, SetStateAction } from 'react';
import { IConsultationForm } from '../../components/sections/ConsultationForm';
import { UseMutationResult, UseQueryResult } from 'react-query';
import User from '../../entities/User';
import { IAppointmentForm } from '../../components/sections/AppointmentForm';
import Patient from '../../entities/Patient';
import Consultation from '../../entities/Consultation';

export default class ConsultationCreateViewModel {
   constructor(
      public form: IConsultationForm,
      public setForm: Dispatch<SetStateAction<IConsultationForm>>,
      public userQuery: UseQueryResult<User[] | undefined, unknown>,
      public patientQuery: UseQueryResult<any, unknown>,
      public isOpen: boolean,
      public setIsOpen: Dispatch<SetStateAction<boolean>>,
      public createConsultationMutation: UseMutationResult<
         any,
         unknown,
         IAppointmentForm,
         unknown
      >,
      public updateConsultationMutation: UseMutationResult<
         any,
         unknown,
         any,
         unknown
      >,
      public deleteConsultationMutation: UseMutationResult<
         any,
         unknown,
         string | undefined,
         unknown
      >,
      public users: User[],
      public patients: Patient[]
   ) {}
   save(
      createConsultationMutation: UseMutationResult<
         any,
         unknown,
         IAppointmentForm,
         unknown
      >,
      updateConsultationMutation: UseMutationResult<any, unknown, any, unknown>,
      consultation?: Consultation
   ) {
      if (consultation) {
         updateConsultationMutation.mutate({
            id: consultation.id,
            form: this.form
         });
      } else {
         createConsultationMutation.mutate(this.form);
      }
   }

   deleteAction(
      setIsOpen: Dispatch<SetStateAction<boolean>>,
      consultation?: Consultation
   ) {
      setIsOpen(false);
      this.deleteConsultationMutation.mutate(consultation?.id);
   }
   closeModal(setIsOpen: Dispatch<SetStateAction<boolean>>) {
      setIsOpen(false);
   }

   openConfirmationModal(e: any, setIsOpen: Dispatch<SetStateAction<boolean>>) {
      e.preventDefault();
      setIsOpen(true);
   }
}
