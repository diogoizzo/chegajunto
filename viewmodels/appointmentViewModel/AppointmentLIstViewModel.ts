import { UseQueryResult } from 'react-query';
import IAppointment from '../../interfaces/IAppointment';
import { Dispatch, SetStateAction } from 'react';

export default class AppointmentListViewModel {
   constructor(
      public query: UseQueryResult<any, unknown>,
      public search: IAppointment[] | null,
      public setSearch: Dispatch<SetStateAction<IAppointment[] | null>>,
      public allAppointment: IAppointment[] | null
   ) {}
}
