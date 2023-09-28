import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import DocumentServices from '../services/DocumentServices';
import DocumentViewModel from '../viewmodels/documentViewModel/DocumentViewModel';

export default function useDocumentEditViewModel() {
   const router = useRouter();

   const documentId = String(router.query.id);

   const query = useQuery(['document', documentId], () =>
      DocumentServices.getById(documentId)
   );

   return DocumentViewModel.editView(documentId, query);
}
