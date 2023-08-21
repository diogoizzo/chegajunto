import { useState } from 'react';
import FormInputLine from '../atoms/FormInputLine';
import IUser from '../../interfaces/IUser';
import UserServices from '../../services/UserServices';
import User from '../../entities/User';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import ConfirmationModal from '../parts/ConfirmationModal';
import PrimaryBtn from '../atoms/PrimaryBtn';
import DangerBtn from '../atoms/DangerBtn';
import useErrorToast from '../../hooks/useErrorToast';
import StringSelectInput from '../atoms/StringSelectInput';

interface UserFormProps {
   user?: User;
}

export interface UserFromData extends IUser {
   confirmPassword?: string;
   password?: string;
}

function UserForm({ user }: UserFormProps) {
   const router = useRouter();

   const errorToast = useErrorToast();

   const [isOpen, setIsOpen] = useState(false);

   const [form, setForm] = useState<UserFromData>({
      id: user?.id || undefined,
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      address: user?.address || '',
      cpf: user?.cpf || '',
      type: user?.type || 'Psicólogo',
      crp: user?.crp || '',
      institution: user?.institution || '',
      period: user?.period || 0,
      password: '',
      confirmPassword: '',
      userLink: user?.userLink || ''
   });

   const userUpdateMutation = useMutation({
      mutationFn: UserServices.updateById,
      onSuccess: () => {
         router.push(`/usuarios?updated=true`);
      }
   });

   const userDeleteMutation = useMutation({
      mutationFn: UserServices.delete,
      onSuccess: () => {
         router.push('/usuarios?deleted=true');
      }
   });

   async function register(e: any) {
      e.preventDefault();
      if (!user) {
         if (!form.name) {
            errorToast('É preciso informar ao menos o nome do paciente');
         } else if (!form.password) {
            errorToast('É necessário informar uma senha');
         } else if (form.password !== form.confirmPassword) {
            errorToast('As senhas precisam ser iguais');
         } else {
            const isRegistred = await UserServices.register(form);
            if (isRegistred) {
               router.push('/usuarios?saved=true');
            }
         }
      } else {
         delete form?.password;
         delete form?.confirmPassword;
         userUpdateMutation.mutate(form);
      }
   }

   function deleteAction() {
      closeModal();
      userDeleteMutation.mutate(user?.id);
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
            text={'Tem certeza que deseja apagar o usuário?'}
            isOpen={isOpen}
            closeModal={closeModal}
            deleteAction={deleteAction}
         />
         {/* TODO verificar se os subtitulos estao se ajustando para o caso de
         novo usuário e edição de usuário */}
         <section className="py-3">
            <div className="container px-4 mx-auto">
               <div className="p-10 bg-raisin-black rounded-lg">
                  <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                     <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                        <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                           Informações Pessoais
                        </h4>

                        {user ? (
                           <p className="text-sm text-cool-gray-500">
                              Edite as informaçõs pessoais do usuário acima.
                           </p>
                        ) : (
                           <p className="text-sm text-cool-gray-500">
                              Preencha as informaçõs pessoais do novo usuário.
                           </p>
                        )}
                     </div>
                  </div>
                  <form>
                     <FormInputLine
                        state={form.name}
                        setState={setForm}
                        name="name"
                        label="Nome"
                        type="text"
                        placeHolder="Digite o nome do novo usuário..."
                     />

                     <FormInputLine
                        state={form.email}
                        setState={setForm}
                        name="email"
                        label="Email"
                        type="email"
                        placeHolder="Digite o email do novo usuário..."
                     />
                     <FormInputLine
                        state={form.phone}
                        setState={setForm}
                        name="phone"
                        label="Telefone"
                        type="tel"
                        placeHolder="Digite o telefone do novo usuário..."
                     />
                     <FormInputLine
                        state={form.address}
                        setState={setForm}
                        name="address"
                        label="Endereço"
                        type="text"
                        placeHolder="Digite o endereço do novo usuário..."
                     />
                     <FormInputLine
                        state={form.cpf}
                        setState={setForm}
                        name="cpf"
                        label="CPF"
                        type="text"
                        placeHolder="Digite o CPF do novo usuário..."
                     />
                     <StringSelectInput
                        name="type"
                        placeholder="Selecione o tipo de usuário"
                        title="Tipo de usuário"
                        options={['Psicólogo', 'Estagiário']}
                        state={form.type}
                        setState={setForm}
                     />
                     {form.type === 'Psicólogo' ? (
                        <>
                           <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 mt-12 border-b border-gray-400 border-opacity-20">
                              <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                                 <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                                    Informações Profissionais
                                 </h4>
                                 <p className="text-sm text-cool-gray-500">
                                    Preencha as informaçõs profissionais do novo
                                    usuário.
                                 </p>
                              </div>
                           </div>
                           <FormInputLine
                              state={form.crp}
                              setState={setForm}
                              name="crp"
                              label="CRP"
                              type="text"
                              placeHolder="Digite o número do CRP do novo usuário..."
                           />
                        </>
                     ) : (
                        <>
                           <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 mt-12 border-b border-gray-400 border-opacity-20">
                              <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                                 <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                                    Informações Institucionais
                                 </h4>
                                 <p className="text-sm text-cool-gray-500">
                                    Preencha as informaçõs acadêmicas do
                                    estagiário.
                                 </p>
                              </div>
                           </div>
                           <FormInputLine
                              state={form.institution}
                              setState={setForm}
                              name="institution"
                              label="Instituição de Ensino"
                              type="text"
                              placeHolder="Digite o nome da instituição de ensino do novo usuário..."
                           />
                           <FormInputLine
                              state={String(form.period)}
                              setState={setForm}
                              name="period"
                              label="Período"
                              type="number"
                              placeHolder="Digite o período que o novo usuário esta cursando..."
                           />
                        </>
                     )}
                     {!user ? (
                        <>
                           <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 mt-12 border-b border-gray-400 border-opacity-20">
                              <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                                 <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                                    Senha
                                 </h4>
                              </div>
                           </div>
                           <FormInputLine
                              state={form.password}
                              setState={setForm}
                              name="password"
                              label="Senha"
                              type="password"
                              placeHolder="Digite a senha do novo usuário"
                           />
                           <FormInputLine
                              state={form.confirmPassword}
                              setState={setForm}
                              name="confirmPassword"
                              label="Repita a Senha"
                              type="password"
                              placeHolder="Repita a senha do novo usuário"
                           />
                        </>
                     ) : null}

                     <div className="text-right space-x-6">
                        <PrimaryBtn text={'Salvar'} clickHandle={register} />
                        {user ? (
                           <DangerBtn
                              text={'Apagar Usuário'}
                              openConfirmation={openConfirmationModal}
                           />
                        ) : null}
                     </div>
                  </form>
               </div>
            </div>
         </section>
      </>
   );
}
export default UserForm;
