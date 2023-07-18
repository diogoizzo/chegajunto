import { useEffect, useState } from 'react';
import FormInputLine from '../atoms/FormInputLine';
import SelectInput from '../atoms/SelectInput';
import IUser from '../../interfaces/IUser';
import UserServices from '../../Services/UserServices';
import User from '../../entities/User';

interface UserFormProps {
   user?: User;
}

interface UserFromData extends IUser {
   confirmPassword: string;
   password: string;
}

function UserForm({ user }: UserFormProps) {
   const [form, setForm] = useState<UserFromData>({
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      address: user?.address || '',
      cpf: user?.cpf || '',
      type: user?.type || 'Pscicólogo',
      crp: user?.crp || '',
      institution: user?.institution || '',
      period: user?.period || 0,
      password: '',
      confirmPassword: ''
   });
   async function register(e: any) {
      e.preventDefault();
      if (!user) {
         if (form.password !== form.confirmPassword) {
            console.log('As senhas precisam ser iguais');
         } else {
            await UserServices.register(form);
         }
      } else {
         //TODO editar essa função para que faça a atualização do usuário
         console.log('Estou alterando ao inves de criar');
      }
   }

   return (
      <section className="py-3 mt-3">
         <div className="container px-4 mx-auto">
            <div className="p-10 bg-raisin-black rounded-lg">
               <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                  <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                     <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                        Informações Pessoais
                     </h4>
                     <p className="text-sm text-cool-gray-500">
                        Preencha as informaçõs pessoais do novo usuário.
                     </p>
                  </div>
               </div>
               <form onSubmit={register}>
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
                  <SelectInput
                     name="type"
                     title="Tipo de usuário"
                     options={['Pscicólogo', 'Estagiário']}
                     state={form.type}
                     setState={setForm}
                  />
                  {form.type === 'Pscicólogo' ? (
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

                  <div className="text-right">
                     <button
                        type="submit"
                        className="inline-flex py-2 px-10  items-center text-center shadow-sm shadow-black/40 border-2 border-yinmn-blue-900 text-lg font-bold text-cool-gray-200 bg-yinmn-blue-500 hover:bg-yinmn-blue-200 transition duration-200 rounded-lg"
                     >
                        Salvar
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
}
export default UserForm;
