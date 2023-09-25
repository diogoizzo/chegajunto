import { UseQueryResult } from 'react-query';
import Patient from '../../entities/Patient';
import { Dispatch, SetStateAction } from 'react';

export default class PatientArchiveViewModel {
   constructor(
      public query: UseQueryResult<any, unknown>,
      public search: Patient[] | null,
      public setSearch: Dispatch<SetStateAction<Patient[] | null>>,
      public userType: string,
      public activeUserId: string,
      public archivedPatients: Patient[]
   ) {}
}
