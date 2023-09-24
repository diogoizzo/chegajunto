import { UseQueryResult } from 'react-query';
import Patient from '../../entities/Patient';

export default class PatientDisplayModel {
   constructor(
      public query: UseQueryResult<any, unknown>,
      public patient: Patient
   ) {}
}
