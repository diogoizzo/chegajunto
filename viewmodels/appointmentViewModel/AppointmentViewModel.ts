import { UseMutationResult, UseQueryResult } from 'react-query';
import IAppointment from '../../interfaces/IAppointment';
import Appointment from '../../entities/Appointment';
import AppointmentListViewModel from './AppointmentLIstViewModel';
import { Dispatch, SetStateAction } from 'react';
import AppointmentDisplayViewModel from './AppointmentDisplayViewModel';
import User from '../../entities/User';
import IPatient from '../../interfaces/IPatient';
import IUser from '../../interfaces/IUser';
import IAvailability from '../../interfaces/IAvailability';
import { IAppointmentForm } from '../../components/sections/AppointmentForm';
import AppointmentCreateViewModel from './AppointmentCreateViewModel';
import AppointmentDeleteViewModel from './AppointmentDeleteViewModel';

export default class AppointmentViewModel {
   static listView(
      query: UseQueryResult<any, unknown>,
      search: IAppointment[] | null,
      setSearch: Dispatch<SetStateAction<IAppointment[] | null>>
   ) {
      const allAppointment = query.data && Appointment.createMany(query.data);
      return new AppointmentListViewModel(
         query,
         search,
         setSearch,
         allAppointment
      );
   }
   static displayView(query: UseQueryResult<any, unknown>) {
      const appointment =
         query.data && Appointment.createFromObject(query.data);
      return new AppointmentDisplayViewModel(query, appointment);
   }
   static createView(
      usersQuery: UseQueryResult<User[] | undefined, unknown>,
      compatiblePatients: IPatient[],
      setCompatiblePatient: Dispatch<SetStateAction<[] | IPatient[]>>,
      patientsLoading: boolean,
      selectedUser: IUser | null,
      setSelectedUser: Dispatch<SetStateAction<IUser | null>>,
      selectedUserAvailability: IAvailability | null,
      setSelectedUserAvailability: Dispatch<
         SetStateAction<IAvailability | null>
      >,
      form: IAppointmentForm,
      setForm: Dispatch<SetStateAction<IAppointmentForm>>,
      createAppointmentMutation: UseMutationResult<
         any,
         unknown,
         IAppointmentForm,
         unknown
      >
   ) {
      const users = (usersQuery.data && User.createMany(usersQuery.data)) || [];
      return new AppointmentCreateViewModel(
         usersQuery,
         compatiblePatients,
         setCompatiblePatient,
         patientsLoading,
         selectedUser,
         setSelectedUser,
         selectedUserAvailability,
         setSelectedUserAvailability,
         form,
         setForm,
         createAppointmentMutation,
         users
      );
   }
   static deleteView(
      isOpen: boolean,
      setIsOpen: Dispatch<SetStateAction<boolean>>,
      deleteAppointmentMutation: UseMutationResult<
         any,
         unknown,
         string | undefined,
         unknown
      >,
      appointment?: IAppointment
   ) {
      return new AppointmentDeleteViewModel(
         isOpen,
         setIsOpen,
         deleteAppointmentMutation,
         appointment
      );
   }
}
