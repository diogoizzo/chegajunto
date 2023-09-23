import { UseQueryResult } from 'react-query';
import IConsultation from '../../interfaces/IConsultation';

export default class AppointmentDisplayViewModel {
   constructor(
      public consultationId: string,
      public consultationQuery: UseQueryResult<any, unknown>,
      public consultation: IConsultation
   ) {}
}
