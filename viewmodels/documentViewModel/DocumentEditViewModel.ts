import { UseQueryResult } from 'react-query';
import Document from '../../entities/Document';

export default class DocumentEditViewModel {
   constructor(
      public documentId: string,
      public query: UseQueryResult<any, unknown>,
      public document: Document
   ) {}
}
