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
   deleteAction(setIsOpen: Dispatch<SetStateAction<boolean>>) {
      setIsOpen(false);
      this.deleteAppointmentMutation.mutate(this.appointment?.id);
   }

   closeModal(setIsOpen: Dispatch<SetStateAction<boolean>>) {
      setIsOpen(false);
   }

   openConfirmationModal(e: any, setIsOpen: Dispatch<SetStateAction<boolean>>) {
      this.setIsOpen && this.setIsOpen(true);
   }
}
