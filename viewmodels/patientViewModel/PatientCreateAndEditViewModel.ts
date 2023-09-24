import { Dispatch, SetStateAction } from 'react';
import IPatient from '../../interfaces/IPatient';
import { UseMutationResult, UseQueryResult } from 'react-query';
import User from '../../entities/User';

export default class PatientCreateAndEditViewModel {
   constructor(
      public isOpen: boolean,
      public setIsOpen: Dispatch<SetStateAction<boolean>>,
      public form: IPatient,
      public setForm: Dispatch<SetStateAction<IPatient>>,
      public query: UseQueryResult<User[] | undefined, unknown>,
      public patientUpdateMutation: UseMutationResult<
         any,
         unknown,
         any,
         unknown
      >,
      public patientDeleteMutation: UseMutationResult<
         any,
         unknown,
         string | undefined,
         unknown
      >,
      public patientCreateMutation: UseMutationResult<
         any,
         unknown,
         IPatient,
         unknown
      >,
      public users: User[],
      public patient?: IPatient
   ) {}
   async salvar(e: any) {
      e.preventDefault();
      if (!this?.patient) {
         this.patientCreateMutation.mutate(this.form);
      } else {
         this.patientUpdateMutation.mutate(this.form);
      }
   }

   deleteAction(setIsOpen: Dispatch<SetStateAction<boolean>>) {
      setIsOpen(false);
      this.patientDeleteMutation.mutate(this.patient?.id);
   }
   closeModal(setIsOpen: Dispatch<SetStateAction<boolean>>) {
      setIsOpen(false);
   }

   openConfirmationModal(e: any, setIsOpen: Dispatch<SetStateAction<boolean>>) {
      e.preventDefault();
      setIsOpen(true);
   }
}
