import FormInputLine from '../atoms/FormInputLine';
import SelectInput from '../atoms/SelectInput';
import IPatient from '../../interfaces/IPatient';
import ConfirmationModal from '../parts/ConfirmationModal';
import PrimaryBtn from '../atoms/PrimaryBtn';
import DangerBtn from '../atoms/DangerBtn';
import FormTextareaLine from '../atoms/FormTextareaLine';
import FormSwitchLine from '../atoms/FormSwitchLine';
import FormInputDateLine from '../atoms/FormInputDateLine';
import AvailabilityForm from './AvailabilityForm';
import usePatientCreateAndEditViewModel from '../../hooks/usePatientCreateAndEditViewModel';

interface PatientFormProps {
   patient?: IPatient;
}

function PatientForm({ patient }: PatientFormProps) {
   const viewModel = usePatientCreateAndEditViewModel(patient);

   return (
      <>
         <ConfirmationModal
            text={'Tem certeza que deseja arquivar o paciente?'}
            isOpen={viewModel.isOpen}
            closeModal={() => viewModel.closeModal(viewModel.setIsOpen)}
            deleteAction={() => viewModel.deleteAction(viewModel.setIsOpen)}
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
                        state={viewModel.form.name}
                        setState={viewModel.setForm}
                        name="name"
                        label="Nome"
                        type="text"
                        placeHolder="Digite o nome do novo paciente..."
                     />
                     <FormInputLine
                        state={viewModel.form.phone}
                        setState={viewModel.setForm}
                        name="phone"
                        label="Telefone"
                        type="tel"
                        placeHolder="Digite o telefone do novo paciente..."
                     />
                     <FormInputLine
                        state={viewModel.form.email}
                        setState={viewModel.setForm}
                        name="email"
                        label="Email"
                        type="email"
                        placeHolder="Digite o email do novo paciente..."
                     />
                     <FormInputLine
                        state={viewModel.form.address}
                        setState={viewModel.setForm}
                        name="address"
                        label="Endereço"
                        type="text"
                        placeHolder="Digite o endereço do novo paciente..."
                     />
                     {/* TODO acrescentar informações de parentesco (pai e mãe) */}
                     <FormInputDateLine
                        state={viewModel.form.birthday}
                        setState={viewModel.setForm}
                        name="birthday"
                        label="Data de Nascimento"
                     />
                     <FormInputLine
                        state={viewModel.form.cpf}
                        setState={viewModel.setForm}
                        name="cpf"
                        label="CPF"
                        type="text"
                        placeHolder="Digite o CPF do novo paciente..."
                     />
                     <FormInputLine
                        state={viewModel.form.birthplace}
                        setState={viewModel.setForm}
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
                        state={viewModel.form.education}
                        setState={viewModel.setForm}
                        name="education"
                        label="Escolaridade"
                        type="text"
                        placeHolder="Digite o grau de escolaridade do paciente..."
                     />
                     <FormInputLine
                        state={viewModel.form.school}
                        setState={viewModel.setForm}
                        name="school"
                        label="Nome da Escola"
                        type="text"
                        placeHolder="Digite o nome da escola do paciente..."
                     />
                     <FormSwitchLine
                        label="É bolsista?"
                        setState={viewModel.setForm}
                        name="scholarship"
                        state={viewModel.form.scholarship}
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
                        setState={viewModel.setForm}
                        name="isMedicated"
                        state={viewModel.form.isMedicated}
                     />
                     {viewModel.form.isMedicated ? (
                        <FormInputLine
                           state={viewModel.form.medication}
                           setState={viewModel.setForm}
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
                        state={viewModel.form.complaint}
                        setState={viewModel.setForm}
                        name="complaint"
                        label="Reclamação do Paciente"
                        placeHolder="Digite os detalhes da reclamação do paciente..."
                     />
                     <FormTextareaLine
                        state={viewModel.form.observation}
                        setState={viewModel.setForm}
                        name="observation"
                        label="Observações sobre o Paciente"
                        placeHolder="Digite as obervações relevantes sobre o paciente..."
                     />
                     <SelectInput
                        name="interviewedByUserId"
                        title="Responsável pela Entrevista"
                        setState={viewModel.setForm}
                        options={viewModel.users}
                        placeholder="Selecione o responsável pela entrevista"
                        state={viewModel.form.interviewedByUserId}
                     />
                     <SelectInput
                        name="underResponsibilityOfUserId"
                        title="Responsável pelo Paciente"
                        setState={viewModel.setForm}
                        options={viewModel.users}
                        placeholder="Selecione o responsável pela entrevista"
                        state={viewModel.form.underResponsibilityOfUserId}
                     />
                     <div className="text-right space-x-6">
                        <PrimaryBtn
                           text={'Salvar'}
                           clickHandle={(e: any) => viewModel.salvar(e)}
                        />
                        {patient ? (
                           <DangerBtn
                              text={'Arquivar paciente'}
                              openConfirmation={(e: any) =>
                                 viewModel.openConfirmationModal(
                                    e,
                                    viewModel.setIsOpen
                                 )
                              }
                           />
                        ) : null}
                     </div>
                  </form>
               </div>
               {viewModel.patient?.id && (
                  <AvailabilityForm
                     availabilities={patient?.availabilities || []}
                     patientId={patient?.id}
                  />
               )}
            </div>
         </section>
      </>
   );
}
export default PatientForm;
