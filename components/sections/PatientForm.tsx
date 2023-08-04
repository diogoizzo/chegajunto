import { useState } from 'react';
import FormInputLine from '../atoms/FormInputLine';
import SelectInput from '../atoms/SelectInput';
import IPatient from '../../interfaces/IPatient';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import ConfirmationModal from '../parts/ConfirmationModal';
import PrimaryBtn from '../atoms/PrimaryBtn';
import DangerBtn from '../atoms/DangerBtn';
import PatientServices from '../../services/PatientServices';
import FormTextareaLine from '../atoms/FormTextareaLine';

interface PatientFormProps {
   patient?: IPatient;
}

function PatientForm({ patient }: PatientFormProps) {
   const router = useRouter();

   const [isOpen, setIsOpen] = useState(false);

   const [form, setForm] = useState<IPatient>({
      id: patient?.id || '',
      name: patient?.name || '',
      email: patient?.email || '',
      phone: patient?.phone || '',
      address: patient?.address || '',
      cpf: patient?.cpf || '',
      status: patient?.status || '',
      birthday: patient?.birthday || undefined,
      birthplace: patient?.birthplace || '',
      education: patient?.education || '',
      school: patient?.school || '',
      scholarship: patient?.scholarship || undefined,
      isMedicated: patient?.isMedicated || undefined,
      medication: patient?.medication || undefined,
      interviewedBy: patient?.interviewedBy || undefined,
      complaint: patient?.complaint || undefined,
      observation: patient?.observation || undefined,
      underResponsibilityOf: patient?.underResponsibilityOf || undefined,
      getLink: patient?.getLink || '',
      patientEditLink: patient?.patientEditLink || ''
   });

   const patientUpdateMutation = useMutation({
      mutationFn: PatientServices.updateById,
      onSuccess: () => {
         router.push(`/pacientes/${patient?.id}`);
      }
   });

   const patientDeleteMutation = useMutation({
      mutationFn: PatientServices.delete,
      onSuccess: () => {
         console.log('entrei no onsucesso do delete');
         router.push('/pacientes');
      }
   });

   async function register(e: any) {
      e.preventDefault();
      if (!patient) {
         //    await PatientServices.register(form);
      } else {
         patientUpdateMutation.mutate(form);
      }
   }

   function deleteAction() {
      closeModal();
      patientDeleteMutation.mutate(patient?.id);
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
            text={'Tem certeza que deseja arquivar o paciente?'}
            isOpen={isOpen}
            closeModal={closeModal}
            deleteAction={deleteAction}
         />
         <section className="py-3 mt-3">
            <div className="container px-4 mx-auto">
               <div className="p-10 bg-raisin-black rounded-lg">
                  <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                     <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                        <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                           Informações Pessoais
                        </h4>
                        {patient ? (
                           <p className="text-sm text-cool-gray-500">
                              Edite as informaçõs pessoais do paciente acima.
                           </p>
                        ) : (
                           <p className="text-sm text-cool-gray-500">
                              Preencha as informaçõs pessoais do novo paciente.
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
                        placeHolder="Digite o nome do novo paciente..."
                     />
                     <FormInputLine
                        state={form.phone}
                        setState={setForm}
                        name="phone"
                        label="Telefone"
                        type="tel"
                        placeHolder="Digite o telefone do novo paciente..."
                     />
                     <FormInputLine
                        state={form.email}
                        setState={setForm}
                        name="email"
                        label="Email"
                        type="email"
                        placeHolder="Digite o email do novo paciente..."
                     />
                     <FormInputLine
                        state={form.address}
                        setState={setForm}
                        name="address"
                        label="Endereço"
                        type="text"
                        placeHolder="Digite o endereço do novo paciente..."
                     />
                     <FormInputLine
                        //todo aqui vou precisa ajusar para usar o daysjs e formatar a data corretamente
                        state={String(form.birthday)}
                        setState={setForm}
                        name="birthday"
                        label="Data de Nascimento"
                        type="date"
                        placeHolder="Digite a data de nascimento do paciente..."
                     />
                     <FormInputLine
                        state={form.cpf}
                        setState={setForm}
                        name="cpf"
                        label="CPF"
                        type="text"
                        placeHolder="Digite o CPF do novo paciente..."
                     />
                     <FormInputLine
                        state={form.birthplace}
                        setState={setForm}
                        name="birthplace"
                        label="Naturalidade"
                        type="text"
                        placeHolder="Digite a naturalidade do paciente..."
                     />
                     <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                        <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                           <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                              Informações Institucionais
                           </h4>
                           {patient ? (
                              <p className="text-sm text-cool-gray-500">
                                 Edite as informaçõs institucionais do paciente
                                 acima.
                              </p>
                           ) : (
                              <p className="text-sm text-cool-gray-500">
                                 Preencha as institucionais do novo paciente.
                              </p>
                           )}
                        </div>
                     </div>
                     <FormInputLine
                        state={form.education}
                        setState={setForm}
                        name="education"
                        label="Escolaridade"
                        type="text"
                        placeHolder="Digite o grau de escolaridade do paciente..."
                     />
                     <FormInputLine
                        state={form.school}
                        setState={setForm}
                        name="school"
                        label="Nome da Escola"
                        type="text"
                        placeHolder="Digite o nome da escola do paciente..."
                     />
                     {/* TODO transformar em um toogle - scholarship - abaixo */}
                     <FormInputLine
                        state={form.school}
                        setState={setForm}
                        name="school"
                        label="Nome da Escola"
                        type="text"
                        placeHolder="Digite o nome da escola do paciente..."
                     />

                     <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                        <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                           <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                              Informações Médicas
                           </h4>
                           {patient ? (
                              <p className="text-sm text-cool-gray-500">
                                 Edite as informaçõs médicas do paciente acima.
                              </p>
                           ) : (
                              <p className="text-sm text-cool-gray-500">
                                 Preencha as médicas do novo paciente.
                              </p>
                           )}
                        </div>
                     </div>

                     {/* TODO transformar em um toogle - ismedicated - abaixo */}
                     <FormInputLine
                        state={form.school}
                        setState={setForm}
                        name="school"
                        label="Nome da Escola"
                        type="text"
                        placeHolder="Digite o nome da escola do paciente..."
                     />
                     {form.isMedicated ? (
                        <FormInputLine
                           state={form.medication}
                           setState={setForm}
                           name="medicamentos"
                           label="Medicamentos"
                           type="text"
                           placeHolder="Digite o nome dos medicamentos utilzados pelo paciente..."
                        />
                     ) : null}
                     <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                        <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                           <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                              Outras informações
                           </h4>
                           {patient ? (
                              <p className="text-sm text-cool-gray-500">
                                 Edite as outras informações do paciente acima.
                              </p>
                           ) : (
                              <p className="text-sm text-cool-gray-500">
                                 Preencha as outras informações do novo
                                 paciente.
                              </p>
                           )}
                        </div>
                     </div>
                     <FormTextareaLine
                        state={form.complaint}
                        setState={setForm}
                        name="complaint"
                        label="Reclamação do Paciente"
                        placeHolder="Digite os detalhes da reclamação do paciente..."
                     />
                     <FormTextareaLine
                        state={form.observation}
                        setState={setForm}
                        name="observation"
                        label="Observações sobre o Paciente"
                        placeHolder="Digite as obervações relevantes sobre o paciente..."
                     />
                     {/* TODO criar funcionlaidade para buscar todos os usuários e apresentar seus nomes na lista abaixo */}
                     <SelectInput
                        name="interviewedBy.name"
                        title="Responsável pela Entrevista"
                        setState={setForm}
                        options={['teste1', 'teste2']}
                        state={form.interviewedBy?.name}
                     />
                     <SelectInput
                        name="underResponsibilityOf.name"
                        title="Responsável pelo Paciente"
                        setState={setForm}
                        options={['teste1', 'teste2']}
                        state={form.underResponsibilityOf?.name}
                     />
                     <div className="text-right space-x-6">
                        <PrimaryBtn text={'Salvar'} clickHandle={register} />
                        <DangerBtn
                           text={'Arquivar paciente'}
                           openConfirmation={openConfirmationModal}
                        />
                     </div>
                  </form>
               </div>
            </div>
         </section>
      </>
   );
}
export default PatientForm;
