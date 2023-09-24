import { Dispatch, SetStateAction } from 'react';
import { IAvailabilityForm } from '../../components/sections/AvailabilityForm';
import IAvailability from '../../interfaces/IAvailability';
import { UseMutationResult } from 'react-query';

export default class UserAvailabilityViewModel {
   constructor(
      public availabilities: IAvailability[],
      public form: IAvailabilityForm,
      public setForm: Dispatch<SetStateAction<IAvailabilityForm>>,
      public createAvailabilitiyMutation: UseMutationResult<
         any,
         unknown,
         any,
         unknown
      >,
      public deleteAvailabilitiyMutation: UseMutationResult<
         any,
         unknown,
         {
            userId: string;
            availabilityId: string;
         },
         unknown
      >,
      public errorToast: (msg: string) => void,
      public userId?: string
   ) {}
   async addAvailability(
      form: IAvailabilityForm,
      setForm: Dispatch<SetStateAction<IAvailabilityForm>>,
      userId?: string
   ) {
      if (form.dayOfWeek && form.time) {
         const id = String(userId);
         this.createAvailabilitiyMutation.mutate({
            userId: id,
            form
         });
         setForm({
            dayOfWeek: '',
            time: ''
         });
      } else {
         this.errorToast(
            'É necessário selecionar um dia e hora para cadastrar uma disponibilidade'
         );
      }
   }

   async handleDelete(availabilityId?: string) {
      if (availabilityId) {
         const id = String(this.userId);
         this.deleteAvailabilitiyMutation.mutate({
            userId: id,
            availabilityId
         });
      }
   }
}
