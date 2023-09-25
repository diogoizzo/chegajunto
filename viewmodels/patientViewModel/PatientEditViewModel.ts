import { UseQueryResult } from 'react-query';
import Patient from '../../entities/Patient';

export default class PatientEditViewModel {
   constructor(
      public query: UseQueryResult<any, unknown>,
      public patient: Patient
   ) {}
}
