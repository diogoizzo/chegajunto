import FormPageHeader from '../../../components/parts/FromPageHeader';
import Menu from '../../../components/parts/Menu';
import DocumentForm from '../../../components/sections/DocumentForm';
import LoadingWithTitle from '../../../components/sections/LoadingWithTitle';
import useDocumentEditViewModel from '../../../hooks/useDocumentoEditViewModel';

export default function EditDocument() {
   const viewModel = useDocumentEditViewModel();
   return (
      <Menu>
         <FormPageHeader
            title={viewModel.document?.name}
            subtitle="Edite as informações do documento acima."
         />
         {viewModel.query.isLoading ? (
            <LoadingWithTitle title="Carregando documento..." />
         ) : (
            <DocumentForm doc={viewModel.document} />
         )}
      </Menu>
   );
}

EditDocument.auth = true;
