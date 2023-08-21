import { useRouter } from 'next/router';
import FormPageHeader from '../../../components/parts/FromPageHeader';
import Menu from '../../../components/parts/Menu';
import { useQuery } from 'react-query';
import DocumentServices from '../../../services/DocumentServices';
import Document from '../../../entities/Document';
import DocumentForm from '../../../components/sections/DocumentForm';
import LoadingWithTitle from '../../../components/sections/LoadingWithTitle';

export default function EditDocument() {
   const router = useRouter();

   const documentId = String(router.query.id);

   const query = useQuery(['document', documentId], () =>
      DocumentServices.getById(documentId)
   );

   const document = query.data && Document.createFromObject(query.data);

   return (
      <Menu>
         <FormPageHeader
            title={document?.name}
            subtitle="Edite as informações do documento acima."
         />
         {query.isLoading ? (
            <LoadingWithTitle title="Carrgando documento..." />
         ) : (
            <DocumentForm document={document} />
         )}
      </Menu>
   );
}

EditDocument.auth = true;
