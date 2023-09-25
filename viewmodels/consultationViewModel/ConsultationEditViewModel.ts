import { UseQueryResult } from 'react-query';
import Consultation from '../../entities/Consultation';

export default class ConsultationEditViewModel {
   constructor(
      public query: UseQueryResult<any, unknown>,
      public consultation: Consultation
   ) {}
}
