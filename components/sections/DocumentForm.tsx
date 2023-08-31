import { useState } from 'react';
import FormInputLine from '../atoms/FormInputLine';
import UserServices from '../../services/UserServices';
import Document from '../../entities/Document';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';
import ConfirmationModal from '../parts/ConfirmationModal';
import PrimaryBtn from '../atoms/PrimaryBtn';
import DangerBtn from '../atoms/DangerBtn';
import useErrorToast from '../../hooks/useErrorToast';
import StringSelectInput from '../atoms/StringSelectInput';
import IDocument from '../../interfaces/IDocument';
import FormTextareaLine from '../atoms/FormTextareaLine';
import User from '../../entities/User';
import SelectInput from '../atoms/SelectInput';
import { useSession } from 'next-auth/react';
import PatientServices from '../../services/PatientServices';
import Patient from '../../entities/Patient';
import FileInput from '../atoms/FileInput';
import DocumentServices from '../../services/DocumentServices';
import LoadingWithTitle from './LoadingWithTitle';

interface DocumentFormProps {
   document?: Document;
}

function DocumentForm({ document }: DocumentFormProps) {
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

   const users = userQuery.data && User.createMany(userQuery.data);

   const patientQuery = useQuery(['patients'], () => PatientServices.getAll());

   const allPatients =
      patientQuery.data && Patient.createMany(patientQuery.data);

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
      id: document?.id || '',
      name: document?.name || '',
      type: document?.type || documentType,
      description: document?.description || '',
      uploadedBy: document?.uploadedBy,
      uploadedByUserId: document?.uploadedByUserId || currentUserId,
      belongsTo: document?.belongsTo,
      belongsToPatientId: document?.belongsToPatientId || belongsToPatientId
   });

   const [selectedFile, setSelectedFile] = useState<File>();

   async function submitHandler(e: Event) {
      e.preventDefault();

      if (document) {
         documentUpdateMutation.mutate({
            form,
            selectedFile
         });
      } else {
         try {
            if (!selectedFile) {
               errorToast('Nenhum arquivo selecionado');
               return;
            }
            documentCreateMutation.mutate({
               form,
               selectedFile
            });
         } catch (error: any) {
            console.log(error.response?.data);
         }
      }
   }

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
      e.preventDefault();
      setIsOpen(true);
   }

   return (
      <>
         <ConfirmationModal
            text={'Tem certeza que deseja apagar o documento?'}
            isOpen={isOpen}
            closeModal={closeModal}
            deleteAction={deleteAction}
         />
         {documentCreateMutation.isLoading ? (
            <LoadingWithTitle title="Salvando Novo Documento..." />
         ) : documentUpdateMutation.isLoading ? (
            <LoadingWithTitle title="Atualizando Documento..." />
         ) : (
            <section className="py-3">
               <div className="container px-4 mx-auto">
                  <div className="p-10 bg-raisin-black rounded-lg border border-raisin-black-lighter">
                     <form>
                        <FormInputLine
                           state={form.name}
                           setState={setForm}
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
                           state={form.type}
                           setState={setForm}
                        />
                        <SelectInput
                           name="uploadedByUserId"
                           title="Responsável pelo Upload"
                           setState={setForm}
                           options={users}
                           placeholder="Selecione o responsável pelo upload"
                           state={form.uploadedByUserId || currentUserId}
                        />
                        <SelectInput
                           name="belongsToPatientId"
                           title="A Quem Pertence"
                           setState={setForm}
                           options={allPatients}
                           placeholder="Selecione o paciente ao qual o documento pertence"
                           state={form.belongsToPatientId || belongsToPatientId}
                        />
                        <FormTextareaLine
                           state={form.description}
                           setState={setForm}
                           name="description"
                           label="Descrição do Documento"
                           placeHolder="Digite a descrição do documento..."
                        />
                        <FileInput
                           state={selectedFile}
                           setState={setSelectedFile}
                        />
                        <div className="text-right space-x-6">
                           <PrimaryBtn
                              text={'Salvar'}
                              clickHandle={submitHandler}
                           />
                           {document ? (
                              <DangerBtn
                                 text={'Apagar Documento'}
                                 openConfirmation={openConfirmationModal}
                              />
                           ) : null}
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
