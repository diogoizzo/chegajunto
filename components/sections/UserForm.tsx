import FormInputLine from '../atoms/FormInputLine';
import IUser from '../../interfaces/IUser';
import User from '../../entities/User';
import ConfirmationModal from '../parts/ConfirmationModal';
import PrimaryBtn from '../atoms/PrimaryBtn';
import DangerBtn from '../atoms/DangerBtn';
import StringSelectInput from '../atoms/StringSelectInput';
import UserAvailabilityForm from './UserAvailabilityForm';
import useUserCreateAndEditViewModel from '../../hooks/useUserCreateAndEditViewModel';
import SecundaryBtn from '../atoms/SecundaryBtn';
import { useRouter } from 'next/router';

interface UserFormProps {
   user?: User;
   activeUser?: User;
}

export interface UserFromData extends IUser {
   confirmPassword?: string;
   password?: string;
}

function UserForm({ user, activeUser }: UserFormProps) {
   const router = useRouter();
   const viewModel = useUserCreateAndEditViewModel(user, activeUser);
   return (
      <>
         <ConfirmationModal
            text={'Tem certeza que deseja apagar o usuário?'}
            isOpen={viewModel.isOpen}
            closeModal={() => viewModel.closeModal(viewModel.setIsOpen)}
            deleteAction={() => viewModel.deleteAction(viewModel.setIsOpen)}
         />
         {/* TODO verificar se os subtitulos estao se ajustando para o caso de
         novo usuário e edição de usuário */}
         <section className="py-3">
            <div className="container px-4 mx-auto">
               <div className="p-10 bg-raisin-black rounded-lg border border-raisin-black-lighter">
                  <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                     <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                        <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                           Informações Pessoais
                        </h4>

                        {user ? (
                           <p className="text-sm text-cool-gray-500">
                              Edite as informações pessoais do usuário acima.
                           </p>
                        ) : (
                           <p className="text-sm text-cool-gray-500">
                              Preencha as informações pessoais do novo usuário.
                           </p>
                        )}
                     </div>
                  </div>
                  <form>
                     <FormInputLine
                        state={viewModel.form.name}
                        setState={viewModel.setForm}
                        name="name"
                        label="Nome"
                        type="text"
                        placeHolder="Digite o nome do novo usuário..."
                     />

                     <FormInputLine
                        state={viewModel.form.email}
                        setState={viewModel.setForm}
                        name="email"
                        label="Email"
                        type="email"
                        placeHolder="Digite o email do novo usuário..."
                     />
                     <FormInputLine
                        state={viewModel.form.phone}
                        setState={viewModel.setForm}
                        name="phone"
                        label="Telefone"
                        type="tel"
                        placeHolder="Digite o telefone do novo usuário..."
                     />
                     <FormInputLine
                        state={viewModel.form.address}
                        setState={viewModel.setForm}
                        name="address"
                        label="Endereço"
                        type="text"
                        placeHolder="Digite o endereço do novo usuário..."
                     />
                     <FormInputLine
                        state={viewModel.form.cpf}
                        setState={viewModel.setForm}
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
                        state={viewModel.form.type}
                        setState={viewModel.setForm}
                     />
                     {viewModel.form.type === 'Psicólogo' ? (
                        <>
                           <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 mt-12 border-b border-gray-400 border-opacity-20">
                              <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                                 <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                                    Informações Profissionais
                                 </h4>
                                 <p className="text-sm text-cool-gray-500">
                                    Preencha as informações profissionais do
                                    novo usuário.
                                 </p>
                              </div>
                           </div>
                           <FormInputLine
                              state={viewModel.form.crp}
                              setState={viewModel.setForm}
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
                                    Preencha as informações acadêmicas do
                                    estagiário.
                                 </p>
                              </div>
                           </div>
                           <FormInputLine
                              state={viewModel.form.institution}
                              setState={viewModel.setForm}
                              name="institution"
                              label="Instituição de Ensino"
                              type="text"
                              placeHolder="Digite o nome da instituição de ensino do novo usuário..."
                           />
                           <FormInputLine
                              state={String(viewModel.form.period)}
                              setState={viewModel.setForm}
                              name="period"
                              label="Período"
                              type="number"
                              placeHolder="Digite o período que o novo usuário esta cursando..."
                           />
                        </>
                     )}
                     {!user || activeUser ? (
                        <>
                           <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 mt-12 border-b border-gray-400 border-opacity-20">
                              <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                                 <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                                    Senha
                                 </h4>
                              </div>
                           </div>
                           <FormInputLine
                              state={viewModel.form.password}
                              setState={viewModel.setForm}
                              name="password"
                              label="Senha"
                              type="password"
                              placeHolder="Digite a senha do novo usuário"
                           />
                           <FormInputLine
                              state={viewModel.form.confirmPassword}
                              setState={viewModel.setForm}
                              name="confirmPassword"
                              label="Repita a Senha"
                              type="password"
                              placeHolder="Repita a senha do novo usuário"
                           />
                        </>
                     ) : null}

                     <div className="text-right space-x-6">
                        <PrimaryBtn
                           text={'Salvar'}
                           clickHandle={(e: any) =>
                              viewModel.register(e, user, activeUser)
                           }
                        />
                        {user ? (
                           <DangerBtn
                              text={'Apagar Usuário'}
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
                           clickHandle={() => router.push('/usuarios')}
                        />
                     </div>
                  </form>
               </div>
               {user ? (
                  <UserAvailabilityForm
                     availabilities={user?.availabilities || []}
                     userId={user?.id}
                  />
               ) : null}
            </div>
         </section>
      </>
   );
}
export default UserForm;
