import { Dispatch, SetStateAction } from 'react';
import { UseMutationResult } from 'react-query';
import IAppointment from '../../interfaces/IAppointment';

export default class AppointmentDeleteViewModel {
   constructor(
      public isOpen: boolean,
      public setIsOpen: Dispatch<SetStateAction<boolean>>,
      public deleteAppointmentMutation: UseMutationResult<
         any,
         unknown,
         string | undefined,
         unknown
      >,
      public appointment?: IAppointment
   ) {}
   deleteAction() {
      this.closeModal();
      this.deleteAppointmentMutation.mutate(this.appointment?.id);
   }

   closeModal() {
      this.setIsOpen(false);
   }

   openConfirmationModal(e: any) {
      e.preventDefault();
      this.setIsOpen(true);
   }
}
