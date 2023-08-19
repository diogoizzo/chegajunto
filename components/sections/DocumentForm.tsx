import { useEffect, useState } from 'react';
import FormInputLine from '../atoms/FormInputLine';
import IUser from '../../interfaces/IUser';
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
import axios from 'axios';
import LoadingWithTitle from './LoadingWithTitle';

interface DocumentFormProps {
   document?: Document;
}

function DocumentForm({ document }: DocumentFormProps) {
   const router = useRouter();

   const { data } = useSession();

   const errorToast = useErrorToast();

   //@ts-ignore
   const currentUserId = data?.id;

   //    const errorToast = useErrorToast();

   //    const [isOpen, setIsOpen] = useState(false);

   const userQuery = useQuery(['user'], () => UserServices.getAll());

   const users = userQuery.data && User.createMany(userQuery.data);

   const patientQuery = useQuery(['patients'], () => PatientServices.getAll());

   const allPatients =
      patientQuery.data && Patient.createMany(patientQuery.data);

   const documentCreateMutation = useMutation({
      mutationFn: DocumentServices.createFromForm,
      onSuccess: () => {
         router.push('/documentos?saved=true');
      },
      onError: () => {
         errorToast('Não foi possível criar o novo documento.');
      }
   });

   const [form, setForm] = useState<IDocument>({
      id: document?.id || '',
      name: document?.name || '',
      type: document?.type || '',
      description: document?.description || '',
      uploadedBy: document?.uploadedBy,
      uploadedByUserId: document?.uploadedByUserId || currentUserId,
      belongsTo: document?.belongsTo,
      belongsToPatientId: document?.belongsToPatientId
   });

   const [selectedFile, setSelectedFile] = useState<File>();

   useEffect(() => {
      if (currentUserId) {
         setForm((prev) => {
            return { ...prev, uploadedByUserId: currentUserId };
         });
      }
   }, [currentUserId]);

   async function submitHandler() {
      if (document) {
         //todo fazer update
      } else {
         try {
            if (!selectedFile) return;
            documentCreateMutation.mutate({
               form,
               selectedFile
            });
            // await DocumentServices.createFromForm({form, selectedFile});
            //  const { data } = await axios.post('/api/documentos/upload', formData);
         } catch (error: any) {
            console.log(error.response?.data);
         }
      }

      //   for (const [key, value] of Object.entries(form)) {
      //      console.log(key, value);
      //      formData.append(key, value);
      //   }
      //   const res = DocumentServices.create(formData);
   }

   //    const userUpdateMutation = useMutation({
   //       mutationFn: UserServices.updateById,
   //       onSuccess: () => {
   //          router.push(`/usuarios?updated=true`);
   //       }
   //    });

   //    const userDeleteMutation = useMutation({
   //       mutationFn: UserServices.delete,
   //       onSuccess: () => {
   //          router.push('/usuarios?deleted=true');
   //       }
   //    });

   //    async function register(e: any) {
   //       e.preventDefault();
   //       if (!user) {
   //          if (!form.name) {
   //             errorToast('É preciso informar ao menos o nome do paciente');
   //          } else if (!form.password) {
   //             errorToast('É necessário informar uma senha');
   //          } else if (form.password !== form.confirmPassword) {
   //             errorToast('As senhas precisam ser iguais');
   //          } else {
   //             const isRegistred = await UserServices.register(form);
   //             if (isRegistred) {
   //                router.push('/usuarios?saved=true');
   //             }
   //          }
   //       } else {
   //          delete form?.password;
   //          delete form?.confirmPassword;
   //          userUpdateMutation.mutate(form);
   //       }
   //    }

   //    function deleteAction() {
   //       closeModal();
   //       userDeleteMutation.mutate(user?.id);
   //    }

   //    function closeModal() {
   //       setIsOpen(false);
   //    }

   //    function openConfirmationModal(e: any) {
   //       e.preventDefault();
   //       setIsOpen(true);
   //    }

   return (
      <>
         {/* <ConfirmationModal
            text={'Tem certeza que deseja apagar o usuário?'}
            isOpen={isOpen}
            closeModal={closeModal}
            deleteAction={deleteAction}
         /> */}
         {/* TODO verificar se os subtitulos estao se ajustando para o caso de
         novo usuário e edição de usuário */}
         {documentCreateMutation.isLoading ? (
            <LoadingWithTitle title="Salvando Novo Documento..." />
         ) : null}

         {documentCreateMutation.isIdle ? (
            <section className="py-3 mt-3">
               <div className="container px-4 mx-auto">
                  <div className="p-10 bg-raisin-black rounded-lg">
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
                           options={['Anamnese', 'Autorização', 'Outro']}
                           state={form.type}
                           setState={setForm}
                        />
                        <SelectInput
                           name="uploadedByUserId"
                           title="Responsável pelo Upload"
                           setState={setForm}
                           options={users}
                           placeholder="Selecione o responsável pela entrevista"
                           state={form.uploadedByUserId}
                        />
                        {/* TODO verificar se isso abaixo esta funcionando
                        corretamente, pois o state esta uploadedby e nao
                        belongsto */}
                        <SelectInput
                           name="belongsToPatientId"
                           title="A Quem Pertence"
                           setState={setForm}
                           options={allPatients}
                           placeholder="Selecione o paciente ao qual o documento pertence"
                           state={form.uploadedBy?.id}
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
                           {/* {document ? (
                           <DangerBtn
                              text={'Apagar Usuário'}
                              openConfirmation={openConfirmationModal}
                           />
                        ) : null} */}
                        </div>
                     </form>
                  </div>
               </div>
            </section>
         ) : null}
      </>
   );
}
export default DocumentForm;
