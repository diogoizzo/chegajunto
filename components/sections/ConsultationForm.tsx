import { useRouter } from 'next/router';
import PrimaryBtn from '../atoms/PrimaryBtn';
import SelectInput from '../atoms/SelectInput';
import SecundaryBtn from '../atoms/SecundaryBtn';
import FormSwitchLine from '../atoms/FormSwitchLine';
import FormTextareaLine from '../atoms/FormTextareaLine';
import useConsultationCreateViewModel from '../../hooks/useConsultationCreateViewModel';
import Consultation from '../../entities/Consultation';
import DangerBtn from '../atoms/DangerBtn';
import ConfirmationModal from '../parts/ConfirmationModal';

export interface IConsultationForm {
   patientAbsent: boolean;
   observation: string;
   professionalUserId?: string;
   patientId?: string;
}

interface ConsultationFormProps {
   consultation?: Consultation;
}

function ConsultationForm({ consultation }: ConsultationFormProps) {
   const router = useRouter();
   const viewModel = useConsultationCreateViewModel(consultation);

   return (
      <>
         <ConfirmationModal
            text={'Tem certeza que deseja apagar o documento?'}
            isOpen={viewModel.isOpen}
            closeModal={() => viewModel.closeModal(viewModel.setIsOpen)}
            deleteAction={() =>
               viewModel.deleteAction(viewModel.setIsOpen, consultation)
            }
         />
         <section className="py-3">
            <div className="container px-4 mx-auto">
               <div className="p-10 bg-raisin-black rounded-lg border border-raisin-black-lighter">
                  <form>
                     <SelectInput
                        name="professionalUserId"
                        title="Profissional Responsável"
                        setState={viewModel.setForm}
                        options={viewModel.users}
                        placeholder="Selecione o profissional responsável..."
                        state={viewModel.form.professionalUserId}
                     />
                     <SelectInput
                        name="patientId"
                        title="Paciente"
                        setState={viewModel.setForm}
                        options={viewModel.patients}
                        placeholder="Selecione o paciente..."
                        state={viewModel.form.patientId}
                     />
                     <FormSwitchLine
                        label="Paciente Ausente?"
                        setState={viewModel.setForm}
                        name="patientAbsent"
                        state={viewModel.form.patientAbsent}
                     />
                     <FormTextareaLine
                        state={viewModel.form.observation}
                        setState={viewModel.setForm}
                        name="observation"
                        label="Anotações do Atendimento"
                        placeHolder="Digite os detalhes do atendimento..."
                     />
                     <div className="text-right space-x-6">
                        <PrimaryBtn
                           text={'Salvar'}
                           clickHandle={() =>
                              viewModel.save(
                                 viewModel.createConsultationMutation,
                                 viewModel.updateConsultationMutation,
                                 consultation
                              )
                           }
                        />
                        {consultation ? (
                           <DangerBtn
                              text="Apagar Atendimento"
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
                           clickHandle={() => router.push('/atendimentos')}
                        />
                     </div>
                  </form>
               </div>
            </div>
         </section>
      </>
   );
}
export default ConsultationForm;
