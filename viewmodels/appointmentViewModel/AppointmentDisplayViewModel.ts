import { UseQueryResult } from 'react-query';
import IAppointment from '../../interfaces/IAppointment';

export default class AppointmentDisplayViewModel {
   constructor(
      public query: UseQueryResult<any, unknown>,
      public appointment: IAppointment
   ) {}
}
