import { useRouter } from 'next/router';
import Menu from '../../components/parts/Menu';
import { useMutation, useQuery } from 'react-query';
import PageHeader from '../../components/parts/PageHeader';
import Document from '../../entities/Document';
import DocumentDisplay from '../../components/sections/DocumentDisplay';
import LoadingWithTitle from '../../components/sections/LoadingWithTitle';
import DocumentServices from '../../services/DocumentServices';
import PageHeaderWithMenu from '../../components/parts/PageHeaderWithMenu';
import useErrorToast from '../../hooks/useErrorToast';
import { useState } from 'react';
import ConfirmationModal from '../../components/parts/ConfirmationModal';

export default function DocumentView() {
   const router = useRouter();

   const documentId = String(router.query.id);

   const errorToast = useErrorToast();

   const [isOpen, setIsOpen] = useState(false);

   const queryDocument = useQuery(['patient', documentId], () =>
      DocumentServices.getById(documentId)
   );

   const document: Document =
      queryDocument.data && Document.createFromObject(queryDocument.data);
   console.log(document);
   const userDeleteMutation = useMutation({
      mutationFn: DocumentServices.delete,
      onSuccess: () => {
         router.push('/documentos?deleted=true');
      },
      onError: () => {
         errorToast('Não foi posssível apagar o documento');
      }
   });

   function deleteAction() {
      closeModal();
      userDeleteMutation.mutate(document?.id);
   }

   function closeModal() {
      setIsOpen(false);
   }

   function openConfirmationModal(e: any) {
      setIsOpen(true);
   }

   return (
      <Menu>
         <ConfirmationModal
            text={'Tem certeza que deseja apagar o documento?'}
            isOpen={isOpen}
            closeModal={closeModal}
            deleteAction={deleteAction}
         />
         <PageHeaderWithMenu
            title={document?.name}
            subtitle="Veja as informações do documento acima."
            data={document}
            openConfirmatioModal={openConfirmationModal}
         />
         {queryDocument.isLoading ? (
            <LoadingWithTitle title="Carregando informações do documento..." />
         ) : (
            <DocumentDisplay document={document} />
         )}

         {/* <PatientDisplay patient={document} /> */}
      </Menu>
   );
}

DocumentView.auth = true;
