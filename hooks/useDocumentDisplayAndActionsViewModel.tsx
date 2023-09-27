import { useRouter } from 'next/router';
import useErrorToast from './useErrorToast';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import DocumentServices from '../services/DocumentServices';
import DocumentViewModel from '../viewModels/documentViewModel/DocumentViewModel';

export default function useDocumentDisplayAndActionsViewModel() {
   const router = useRouter();
   const documentId = String(router.query.id);

   const errorToast = useErrorToast();

   const [isOpen, setIsOpen] = useState(false);

   const queryDocument = useQuery(['patient', documentId], () =>
      DocumentServices.getById(documentId)
   );

   const userDeleteMutation = useMutation({
      mutationFn: DocumentServices.delete,
      onSuccess: () => {
         router.push('/documentos?deleted=true');
      },
      onError: () => {
         errorToast('Não foi posssível apagar o documento');
      }
   });
   return DocumentViewModel.displayAndActions(
      isOpen,
      setIsOpen,
      queryDocument,
      userDeleteMutation,
      documentId
   );
}
