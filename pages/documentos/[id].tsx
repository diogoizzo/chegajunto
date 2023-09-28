import Menu from '../../components/parts/Menu';
import DocumentDisplay from '../../components/sections/DocumentDisplay';
import LoadingWithTitle from '../../components/sections/LoadingWithTitle';
import PageHeaderWithMenu from '../../components/parts/PageHeaderWithMenu';
import ConfirmationModal from '../../components/parts/ConfirmationModal';
import useDocumentDisplayAndActionsViewModel from '../../hooks/useDocumentDisplayAndActionsViewModel';

export default function DocumentView() {
   const viewModel = useDocumentDisplayAndActionsViewModel();
   return (
      <Menu>
         <ConfirmationModal
            text={'Tem certeza que deseja apagar o documento?'}
            isOpen={viewModel.isOpen}
            closeModal={() => viewModel.closeModal(viewModel.setIsOpen)}
            deleteAction={() => viewModel.deleteAction(viewModel.setIsOpen)}
         />
         <PageHeaderWithMenu
            title={viewModel.document?.name}
            subtitle="Veja as informações do documento acima."
            data={viewModel.document}
            openConfirmatioModal={(e: any) =>
               viewModel.openConfirmationModal(e, viewModel.setIsOpen)
            }
         />
         {viewModel.queryDocument.isLoading ? null : (
            <DocumentDisplay document={viewModel.document} />
         )}
      </Menu>
   );
}

DocumentView.auth = true;
