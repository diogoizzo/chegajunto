import { Dispatch, SetStateAction } from 'react';
import { IAvailabilityForm } from '../../components/sections/AvailabilityForm';
import IAvailability from '../../interfaces/IAvailability';
import { UseMutationResult } from 'react-query';

export default class PatientAvailabilityViewModel {
   constructor(
      public availabilities: IAvailability[],
      public form: IAvailabilityForm,
      public setForm: Dispatch<SetStateAction<IAvailabilityForm>>,
      public createAvailabilitiyMutation: any,
      public deleteAvailabilitiyMutation: UseMutationResult<
         any,
         unknown,
         {
            patientId: string;
            availabilityId: string;
         },
         unknown
      >,
      public errorToast: (msg: string) => void,
      public patientId?: string
   ) {}
   async addAvailability(
      form: IAvailabilityForm,
      setForm: Dispatch<SetStateAction<IAvailabilityForm>>,
      errorToast: (msg: string) => void,
      patientId?: string
   ) {
      if (form.dayOfWeek && form.time) {
         const id = String(patientId);
         this.createAvailabilitiyMutation.mutate({
            patientId: id,
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
         const id = String(this.patientId);
         this.deleteAvailabilitiyMutation.mutate({
            patientId: id,
            availabilityId
         });
      }
   }
}
