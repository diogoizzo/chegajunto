import { UseQueryResult } from 'react-query';
import Patient from '../../entities/Patient';
import { Dispatch, SetStateAction } from 'react';

export default class PatientWaitingListViewModel {
   constructor(
      public waitingPatients: Patient[],
      public query: UseQueryResult<any, unknown>,
      public search: Patient[] | null,
      public setSearch: Dispatch<SetStateAction<Patient[] | null>>
   ) {}
}
