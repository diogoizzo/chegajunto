import { Dispatch, SetStateAction } from 'react';
import { UseMutationResult, UseQueryResult } from 'react-query';
import User from '../../entities/User';
import IDocument from '../../interfaces/IDocument';
import Document from '../../entities/Document';
import Patient from '../../entities/Patient';

export default class DocumentCreateAndEditViewModel {
   constructor(
      public errorToast: (msg: string) => void,
      public currentUserId: any,
      public isOpen: boolean,
      public setIsOpen: Dispatch<SetStateAction<boolean>>,
      public userQuery: UseQueryResult<User[] | undefined, unknown>,
      public patientQuery: UseQueryResult<any, unknown>,
      public documentCreateMutation: UseMutationResult<
         any,
         unknown,
         any,
         unknown
      >,
      public documentUpdateMutation: UseMutationResult<
         any,
         unknown,
         any,
         unknown
      >,
      public userDeleteMutation: UseMutationResult<void, unknown, any, unknown>,
      public form: IDocument,
      public users: User[],
      public allPatients: Patient[],
      public setForm: Dispatch<SetStateAction<IDocument>>,
      public setSelectedFile: Dispatch<SetStateAction<File | undefined>>,
      public selectedFile?: File,
      public documentType?: string,
      public belongsToPatientId?: string,
      public document?: Document
   ) {}
   async submitHandler(e: Event, document?: Document) {
      e.preventDefault();
      console.log(document);
      if (document) {
         this.documentUpdateMutation.mutate({
            form: this.form,
            selectedFile: this.selectedFile
         });
      } else {
         try {
            if (!this.selectedFile) {
               this.errorToast('Nenhum arquivo selecionado');
               return;
            }
            this.documentCreateMutation.mutate({
               form: this.form,
               selectedFile: this.selectedFile
            });
         } catch (error: any) {
            console.log(error.response?.data);
         }
      }
   }

   deleteAction(setIsOpen: Dispatch<SetStateAction<boolean>>) {
      setIsOpen(false);
      this.userDeleteMutation.mutate(this.document?.id);
   }

   closeModal(setIsOpen: Dispatch<SetStateAction<boolean>>) {
      setIsOpen(false);
   }

   openConfirmationModal(e: any, setIsOpen: Dispatch<SetStateAction<boolean>>) {
      e.preventDefault();
      setIsOpen(true);
   }
}
