import { Dispatch, SetStateAction } from 'react';
import { UseMutationResult, UseQueryResult } from 'react-query';
import Document from '../../entities/Document';

export default class DocumentDisplayAndActionsViewModel {
   constructor(
      public isOpen: boolean,
      public setIsOpen: Dispatch<SetStateAction<boolean>>,
      public queryDocument: UseQueryResult<any, unknown>,

      public userDeleteMutation: UseMutationResult<void, unknown, any, unknown>,
      public document: Document,
      public documentId?: string
   ) {}
   deleteAction(setIsOpen: Dispatch<SetStateAction<boolean>>) {
      setIsOpen(false);
      this.userDeleteMutation.mutate(this.document);
   }

   closeModal(setIsOpen: Dispatch<SetStateAction<boolean>>) {
      setIsOpen(false);
   }

   openConfirmationModal(e: any, setIsOpen: Dispatch<SetStateAction<boolean>>) {
      setIsOpen(true);
   }
}
