import { ParsedUrlQuery } from 'querystring';
import IConsultation from '../../interfaces/IConsultation';
import { Dispatch, SetStateAction } from 'react';
import { UseQueryResult } from 'react-query';

export default class AppointmentListViewModel {
   constructor(
      public urlQuery: ParsedUrlQuery,
      public search: IConsultation[] | null,
      public setSearch: Dispatch<SetStateAction<IConsultation[] | null>>,
      public consultationQuery: UseQueryResult<IConsultation[], unknown>,
      public consultations: IConsultation[] | []
   ) {}
}
