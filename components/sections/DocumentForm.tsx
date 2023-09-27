import FormInputLine from '../atoms/FormInputLine';
import Document from '../../entities/Document';
import ConfirmationModal from '../parts/ConfirmationModal';
import PrimaryBtn from '../atoms/PrimaryBtn';
import DangerBtn from '../atoms/DangerBtn';
import StringSelectInput from '../atoms/StringSelectInput';
import FormTextareaLine from '../atoms/FormTextareaLine';
import SelectInput from '../atoms/SelectInput';
import FileInput from '../atoms/FileInput';
import LoadingWithTitle from './LoadingWithTitle';
import useDocumentCreateAndEditViewModel from '../../hooks/useDocumentCreateAndEditViewModel';
import { useRouter } from 'next/router';
import SecundaryBtn from '../atoms/SecundaryBtn';

interface DocumentFormProps {
   doc?: Document;
}

function DocumentForm({ doc }: DocumentFormProps) {
   const router = useRouter();
   const viewModel = useDocumentCreateAndEditViewModel(doc);

   return (
      <>
         <ConfirmationModal
            text={'Tem certeza que deseja apagar o documento?'}
            isOpen={viewModel.isOpen}
            closeModal={() => viewModel.closeModal(viewModel.setIsOpen)}
            deleteAction={() => viewModel.deleteAction(viewModel.setIsOpen)}
         />
         {viewModel.documentCreateMutation.isLoading ? (
            <LoadingWithTitle title="Salvando Novo Documento..." />
         ) : viewModel.documentUpdateMutation.isLoading ? (
            <LoadingWithTitle title="Atualizando Documento..." />
         ) : (
            <section className="py-3">
               <div className="container px-4 mx-auto">
                  <div className="p-10 bg-raisin-black rounded-lg border border-raisin-black-lighter">
                     <form>
                        <FormInputLine
                           state={viewModel.form.name}
                           setState={viewModel.setForm}
                           name="name"
                           label="Nome"
                           type="text"
                           placeHolder="Digite o nome do documento..."
                        />
                        {/* TODO editar os tipos possíveis de documentos, sendo os exigidos pelo sistema + outros */}
                        <StringSelectInput
                           name="type"
                           placeholder="Selecione o tipo de documento"
                           title="Tipo de Documento"
                           options={['Triagem', 'Autorização', 'Outro']}
                           state={viewModel.form.type}
                           setState={viewModel.setForm}
                        />
                        <SelectInput
                           name="uploadedByUserId"
                           title="Responsável pelo Upload"
                           setState={viewModel.setForm}
                           options={viewModel.users}
                           placeholder="Selecione o responsável pelo upload"
                           state={
                              viewModel.form.uploadedByUserId ||
                              viewModel.currentUserId
                           }
                        />
                        <SelectInput
                           name="belongsToPatientId"
                           title="A Quem Pertence"
                           setState={viewModel.setForm}
                           options={viewModel.allPatients}
                           placeholder="Selecione o paciente ao qual o documento pertence"
                           state={
                              viewModel.form.belongsToPatientId ||
                              viewModel.belongsToPatientId
                           }
                        />
                        <FormTextareaLine
                           state={viewModel.form.description}
                           setState={viewModel.setForm}
                           name="description"
                           label="Descrição do Documento"
                           placeHolder="Digite a descrição do documento..."
                        />
                        <FileInput
                           state={viewModel.selectedFile}
                           setState={viewModel.setSelectedFile}
                        />
                        <div className="text-right w-full space-y-3 md:space-x-6">
                           <PrimaryBtn
                              text={'Salvar'}
                              clickHandle={(e: any) =>
                                 viewModel.submitHandler(e, doc)
                              }
                           />

                           {doc ? (
                              <DangerBtn
                                 text={'Apagar Documento'}
                                 openConfirmation={(e: any) =>
                                    viewModel.openConfirmationModal(
                                       e,
                                       viewModel.setIsOpen
                                    )
                                 }
                              />
                           ) : null}
                           <SecundaryBtn
                              text="Cancelar"
                              clickHandle={() => router.push('/documentos')}
                           />
                        </div>
                     </form>
                  </div>
               </div>
            </section>
         )}
      </>
   );
}
export default DocumentForm;
