import { UseMutationResult, UseQueryResult } from 'react-query';
import User from '../../entities/User';
import IPatient from '../../interfaces/IPatient';
import { Dispatch, SetStateAction } from 'react';
import IUser from '../../interfaces/IUser';
import IAvailability from '../../interfaces/IAvailability';
import { IAppointmentForm } from '../../components/sections/AppointmentForm';

export default class AppointmentCreateViewModel {
   constructor(
      public usersQuery: UseQueryResult<User[] | undefined, unknown>,
      public compatiblePatients: IPatient[],
      public setCompatiblePatient: Dispatch<SetStateAction<[] | IPatient[]>>,
      public patientsLoading: boolean,
      public selectedUser: IUser | null,
      public setSelectedUser: Dispatch<SetStateAction<IUser | null>>,
      public selectedUserAvailability: IAvailability | null,
      public setSelectedUserAvailability: Dispatch<
         SetStateAction<IAvailability | null>
      >,
      public form: IAppointmentForm,
      public setForm: Dispatch<SetStateAction<IAppointmentForm>>,
      public createAppointmentMutation: UseMutationResult<
         any,
         unknown,
         IAppointmentForm,
         unknown
      >,
      public users: IUser[]
   ) {}
   save() {
      const activeAvailability = this.selectedUser?.availabilities?.filter(
         (availability) =>
            availability.id === String(this.selectedUserAvailability)
      )[0];
      const finalForm = {
         ...this.form,
         dayOfWeek: activeAvailability?.dayOfWeek,
         time: activeAvailability?.time
      };
      this.createAppointmentMutation.mutate(finalForm);
   }
}
