import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import useErrorToast from './useErrorToast';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import UserServices from '../services/UserServices';
import User from '../entities/User';
import PatientServices from '../services/PatientServices';
import Patient from '../entities/Patient';
import DocumentServices from '../services/DocumentServices';
import IDocument from '../interfaces/IDocument';
import Document from '../entities/Document';
import DocumentViewModel from '../viewModels/documentViewModel/DocumentViewModel';

export default function useDocumentCreateAndEditViewModel(doc?: Document) {
   const router = useRouter();

   const { data } = useSession();

   const errorToast = useErrorToast();

   const documentType = router.query?.documentType
      ? String(router.query?.documentType)
      : undefined;

   const belongsToPatientId = router.query?.belongsToPatientId
      ? String(router.query?.belongsToPatientId)
      : undefined;
   //@ts-ignore
   const currentUserId = data?.id;

   const [isOpen, setIsOpen] = useState(false);

   const userQuery = useQuery(['user'], () => UserServices.getAll());

   const patientQuery = useQuery(['patients'], () => PatientServices.getAll());

   const documentCreateMutation = useMutation({
      mutationFn: DocumentServices.createFromForm,
      onSuccess: () => {
         if (belongsToPatientId) {
            router.push(`/pacientes/${belongsToPatientId}?documentSaved=true`);
         } else {
            router.push('/documentos?saved=true');
         }
      },
      onError: () => {
         errorToast(
            'Não foi possível criar o novo documento. O tamanho do arquivo não pode ultrapassar 2mb'
         );
      }
   });

   const documentUpdateMutation = useMutation({
      mutationFn: DocumentServices.update,
      onSuccess: () => {
         router.push(`/documentos?updated=true`);
      },
      onError: () => {
         router.push(`/documentos/?updateError=true`);
      }
   });

   const [form, setForm] = useState<IDocument>({
      id: doc?.id || '',
      name: doc?.name || '',
      type: doc?.type || documentType,
      description: doc?.description || '',
      uploadedBy: doc?.uploadedBy,
      uploadedByUserId: doc?.uploadedByUserId || currentUserId,
      belongsTo: doc?.belongsTo,
      belongsToPatientId: doc?.belongsToPatientId || belongsToPatientId
   });

   const [selectedFile, setSelectedFile] = useState<File>();

   const userDeleteMutation = useMutation({
      mutationFn: DocumentServices.delete,
      onSuccess: () => {
         router.push('/documentos?deleted=true');
      },
      onError: () => {
         errorToast('Não foi possível apagar o documento');
      }
   });
   return DocumentViewModel.createAndEdit(
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
      setForm,
      setSelectedFile,
      selectedFile,
      documentType,
      belongsToPatientId,
      doc
   );
}
