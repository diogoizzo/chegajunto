import { Dispatch, SetStateAction } from 'react';
import IDocument from '../../interfaces/IDocument';
import { UseMutationResult, UseQueryResult } from 'react-query';
import Document from '../../entities/Document';
import DocumentListViewModel from './DocumentListViewModel';
import DocumentDisplayAndActionsViewModel from './DocumentDisplayAndActionsViewModel';
import User from '../../entities/User';
import Patient from '../../entities/Patient';
import DocumentCreateAndEditViewModel from './DocumentCreateAndEditViewModel';
import DocumentEditViewModel from './DocumentEditViewModel';

export default class DocumentViewModel {
   static listView(
      search: IDocument[] | null,
      setSearch: Dispatch<SetStateAction<IDocument[] | null>>,
      queryDocument: UseQueryResult<any, unknown>
   ) {
      const allDocuments =
         queryDocument.data && Document.createMany(queryDocument.data);
      return new DocumentListViewModel(
         search,
         setSearch,
         queryDocument,
         allDocuments
      );
   }
   static displayAndActions(
      isOpen: boolean,
      setIsOpen: Dispatch<SetStateAction<boolean>>,
      queryDocument: UseQueryResult<any, unknown>,

      userDeleteMutation: UseMutationResult<
         void,
         unknown,
         string | undefined,
         unknown
      >,
      documentId?: string
   ) {
      const document: Document =
         queryDocument.data && Document.createFromObject(queryDocument.data);
      return new DocumentDisplayAndActionsViewModel(
         isOpen,
         setIsOpen,
         queryDocument,
         userDeleteMutation,
         document,
         documentId
      );
   }
   static createAndEdit(
      errorToast: (msg: string) => void,
      currentUserId: any,
      isOpen: boolean,
      setIsOpen: Dispatch<SetStateAction<boolean>>,
      userQuery: UseQueryResult<User[] | undefined, unknown>,
      patientQuery: UseQueryResult<any, unknown>,
      documentCreateMutation: UseMutationResult<any, unknown, any, unknown>,
      documentUpdateMutation: UseMutationResult<
         IDocument,
         unknown,
         any,
         unknown
      >,
      userDeleteMutation: UseMutationResult<void, unknown, any, unknown>,
      form: IDocument,
      setForm: Dispatch<SetStateAction<IDocument>>,
      setSelectedFile: Dispatch<SetStateAction<File | undefined>>,
      selectedFile?: File,
      documentType?: string,
      belongsToPatientId?: string,
      document?: Document
   ) {
      const users = (userQuery.data && User.createMany(userQuery.data)) || [];
      const allPatients =
         patientQuery.data && Patient.createMany(patientQuery.data);
      return new DocumentCreateAndEditViewModel(
         errorToast,
         currentUserId,
         isOpen,
         setIsOpen,
         userQuery,
         patientQuery,
         documentCreateMutation,
         documentUpdateMutation,
         userDeleteMutation,
         form,
         users,
         allPatients,
         setForm,
         setSelectedFile,
         selectedFile,
         documentType,
         belongsToPatientId,
         document
      );
   }
   static editView(documentId: string, query: UseQueryResult<any, unknown>) {
      const document =
         (query.data && Document.createFromObject(query.data)) || [];
      return new DocumentEditViewModel(documentId, query, document);
   }
}
