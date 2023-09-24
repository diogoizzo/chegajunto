import { Dispatch, SetStateAction } from 'react';
import IDocument from '../../interfaces/IDocument';
import { UseQueryResult } from 'react-query';

export default class DocumentListViewModel {
   constructor(
      public search: IDocument[] | null,
      public setSearch: Dispatch<SetStateAction<IDocument[] | null>>,
      public queryDocument: UseQueryResult<any, unknown>,
      public allDocuments: any
   ) {}
}
