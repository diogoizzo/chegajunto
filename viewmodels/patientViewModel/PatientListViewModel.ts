import { UseQueryResult } from 'react-query';
import IPatient from '../../interfaces/IPatient';
import { Dispatch, SetStateAction } from 'react';

export default class PatientListViewModel {
   constructor(
      public query: UseQueryResult<any, unknown>,
      public search: IPatient[] | null,
      public setSearch: Dispatch<SetStateAction<IPatient[] | null>>,
      public activePatients: IPatient[]
   ) {}
}
