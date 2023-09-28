import { Dispatch, SetStateAction } from 'react';
import { UseMutationResult, UseQueryResult } from 'react-query';
import User from '../../entities/User';
import IDocument from '../../interfaces/IDocument';
import Document from '../../entities/Document';
import Patient from '../../entities/Patient';
import axios from 'axios';

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
      if (document) {
         if (this.selectedFile) {
            const { data } = await axios.get('/api/documentos/upload/');
            const { url, awsFileName } = data;
            try {
               await axios.put(url, this.selectedFile);
            } catch (error) {
               console.log(error);
            }
            const form = this.form;
            form.mimeType = this.selectedFile.type.split('/')[1];
            form.src = String(url).split('?')[0];
            form.awsFileName = awsFileName;
            const sendForm = { ...form, updatedFile: true };
            this.documentUpdateMutation.mutate({
               doc: document,
               form: sendForm
            });
         } else {
            this.documentUpdateMutation.mutate({
               doc: document,
               form: this.form
            });
         }
      } else {
         if (!this.form.belongsToPatientId) {
            this.errorToast(
               'É necessário selecionar um paciente ao qual pertence esse documento.'
            );
            return;
         }
         try {
            if (!this.selectedFile) {
               this.errorToast('Nenhum arquivo selecionado');
               return;
            }
            const { data } = await axios.get('/api/documentos/upload/');
            const { url, awsFileName } = data;
            try {
               await axios.put(url, this.selectedFile);
            } catch (error) {
               console.log(error);
            }
            const src = String(url).split('?')[0];
            const form = this.form;
            form.mimeType = this.selectedFile.type.split('/')[1];
            this.documentCreateMutation.mutate({
               form,
               src,
               awsFileName
            });
            return src;
         } catch (error: any) {
            console.log(error.response?.data);
         }
      }
   }

   deleteAction(setIsOpen: Dispatch<SetStateAction<boolean>>) {
      setIsOpen(false);
      this.userDeleteMutation.mutate(this.document);
   }

   closeModal(setIsOpen: Dispatch<SetStateAction<boolean>>) {
      setIsOpen(false);
   }

   openConfirmationModal(e: any, setIsOpen: Dispatch<SetStateAction<boolean>>) {
      e.preventDefault();
      setIsOpen(true);
   }
}
