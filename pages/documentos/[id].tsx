import { useRouter } from 'next/router';
import Menu from '../../components/parts/Menu';
import { useQuery } from 'react-query';
import PageHeader from '../../components/parts/PageHeader';
import Document from '../../entities/Document';
import DocumentDisplay from '../../components/sections/DocumentDisplay';
import LoadingWithTitle from '../../components/sections/LoadingWithTitle';
import DocumentServices from '../../services/DocumentServices';

export default function DocumentoView() {
   const router = useRouter();

   const documentId = String(router.query.id);

   const queryDocument = useQuery(['patient', documentId], () =>
      DocumentServices.getById(documentId)
   );

   const document: Document =
      queryDocument.data && Document.createFromObject(queryDocument.data);
   console.log(document);
   return (
      <Menu>
         <PageHeader
            title={document?.name}
            subtitle="Veja as informações do documento acima."
            btnText="Editar"
            search={false}
            btnHref={document?.documentEditLink || '/'}
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

DocumentoView.auth = true;
