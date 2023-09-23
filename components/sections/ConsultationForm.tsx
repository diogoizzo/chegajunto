import { useRouter } from 'next/router';
import PrimaryBtn from '../atoms/PrimaryBtn';
import SelectInput from '../atoms/SelectInput';
import SecundaryBtn from '../atoms/SecundaryBtn';
import FormSwitchLine from '../atoms/FormSwitchLine';
import FormTextareaLine from '../atoms/FormTextareaLine';
import useConsultationCreateViewModel from '../../hooks/useConsultationCreateViewModel';

export interface IConsultationForm {
   patientAbsent: boolean;
   observation: string;
   professionalUserId?: string;
   patientId?: string;
}

function ConsultationForm() {
   const router = useRouter();
   const viewModel = useConsultationCreateViewModel();

   return (
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
                     <PrimaryBtn text={'Salvar'} clickHandle={viewModel.save} />
                     <SecundaryBtn
                        text="Cancelar"
                        clickHandle={() => router.push('/atendimentos')}
                     />
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
}
export default ConsultationForm;
