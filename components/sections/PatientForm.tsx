import { useState } from 'react';
import FormInputLine from '../atoms/FormInputLine';
import SelectInput from '../atoms/SelectInput';
import IPatient from '../../interfaces/IPatient';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';
import ConfirmationModal from '../parts/ConfirmationModal';
import PrimaryBtn from '../atoms/PrimaryBtn';
import DangerBtn from '../atoms/DangerBtn';
import PatientServices from '../../services/PatientServices';
import FormTextareaLine from '../atoms/FormTextareaLine';
import useErrorToast from '../../hooks/useErrorToast';
import FormSwitchLine from '../atoms/FormSwitchLine';
import UserServices from '../../services/UserServices';
import User from '../../entities/User';
import FormInputDateLine from '../atoms/FormInputDateLine';
import AvailabilityForm from './AvailabilityForm';
import IAvailability from '../../interfaces/IAvailability';

interface PatientFormProps {
   patient?: IPatient;
}

function PatientForm({ patient }: PatientFormProps) {
   const router = useRouter();

   const errorToast = useErrorToast();

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
      interviewedByUserId: patient?.interviewedByUserId || undefined,
      complaint: patient?.complaint || undefined,
      observation: patient?.observation || undefined,
      underResponsibilityOf: patient?.underResponsibilityOf || undefined,
      underResponsibilityOfUserId:
         patient?.underResponsibilityOfUserId || undefined,
      getLink: patient?.getLink || '',
      patientEditLink: patient?.patientEditLink || ''
   });

   const query = useQuery(['user'], () => UserServices.getAll());

   const users = query.data && User.createMany(query.data);

   const patientUpdateMutation = useMutation({
      mutationFn: PatientServices.updateById,
      onSuccess: () => {
         router.push(`/pacientes?updated=true`);
      },
      onError: () => {
         errorToast('Não foi possível atualizar o paciente.');
      }
   });

   const patientDeleteMutation = useMutation({
      mutationFn: PatientServices.delete,
      onSuccess: () => {
         router.push('/pacientes?deleted=true');
      },
      onError: () => {
         errorToast('Não foi possível arquivar o paciente,');
      }
   });
   const patientCreateMutation = useMutation({
      mutationFn: PatientServices.create,
      onSuccess: (data) => {
         router.push(`/pacientes/${data.id}?saved=true`);
      },
      onError: () => {
         errorToast('Não foi possível criar o novo paciente.');
      }
   });

   async function salvar(e: any) {
      e.preventDefault();
      if (!patient) {
         patientCreateMutation.mutate(form);
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

   //todo não esquecer de remover a constante abaixo, após buscar do bd
   const availabilities: IAvailability[] = [
      {
         id: 'cfasdfasdfaer23442teddd',
         dayOfWeek: 'Segunda-feira',
         time: '18:00',
         professionals: [],
         patients: []
      },
      {
         id: 'cfasdfasddfgdfrergr23442teddd',
         dayOfWeek: 'Terça-feira',
         time: '14:00',
         professionals: [],
         patients: []
      },
      {
         id: 'cfasdfasddfgdfrergr23442tesdfsdf',
         dayOfWeek: 'Sexta-feira',
         time: '10:00',
         professionals: [],
         patients: []
      }
   ];

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
               <div className="p-10 bg-raisin-black rounded-lg border border-raisin-black-lighter">
                  <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                     <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                        <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                           Informações Pessoais
                        </h4>
                        {patient ? (
                           <p className="text-sm text-cool-gray-500">
                              Edite as informações pessoais do paciente acima.
                           </p>
                        ) : (
                           <p className="text-sm text-cool-gray-500">
                              Preencha as informações pessoais do novo paciente.
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
                     {/* TODO acrescentar informações de parentesco (pai e mãe) */}
                     <FormInputDateLine
                        state={form.birthday}
                        setState={setForm}
                        name="birthday"
                        label="Data de Nascimento"
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
                                 Edite as informações institucionais do paciente
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
                     <FormSwitchLine
                        label="É bolsista?"
                        setState={setForm}
                        name="scholarship"
                        state={form.scholarship}
                     />
                     <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                        <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                           <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                              Informações Médicas
                           </h4>
                           {patient ? (
                              <p className="text-sm text-cool-gray-500">
                                 Edite as informações médicas do paciente acima.
                              </p>
                           ) : (
                              <p className="text-sm text-cool-gray-500">
                                 Preencha as médicas do novo paciente.
                              </p>
                           )}
                        </div>
                     </div>
                     <FormSwitchLine
                        label="Faz uso de medicação?"
                        setState={setForm}
                        name="isMedicated"
                        state={form.isMedicated}
                     />
                     {form.isMedicated ? (
                        <FormInputLine
                           state={form.medication}
                           setState={setForm}
                           name="medicamentos"
                           label="Quais medicamentos"
                           type="text"
                           placeHolder="Digite o nome dos medicamentos utilizados pelo paciente..."
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
                     <SelectInput
                        name="interviewedByUserId"
                        title="Responsável pela Entrevista"
                        setState={setForm}
                        options={users}
                        placeholder="Selecione o responsável pela entrevista"
                        state={form.interviewedBy?.id}
                     />
                     <SelectInput
                        name="underResponsibilityOfUserId"
                        title="Responsável pelo Paciente"
                        setState={setForm}
                        options={users}
                        placeholder="Selecione o responsável pela entrevista"
                        state={form.underResponsibilityOf?.id}
                     />
                     <div className="text-right space-x-6">
                        <PrimaryBtn text={'Salvar'} clickHandle={salvar} />
                        {patient ? (
                           <DangerBtn
                              text={'Arquivar paciente'}
                              openConfirmation={openConfirmationModal}
                           />
                        ) : null}
                     </div>
                  </form>
               </div>
               <AvailabilityForm
                  availabilities={patient?.availabilities || []}
                  patientId={patient?.id}
               />
            </div>
         </section>
      </>
   );
}
export default PatientForm;
