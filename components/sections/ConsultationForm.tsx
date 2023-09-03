import { useEffect, useRef, useState } from 'react';
import IUser from '../../interfaces/IUser';
import UserServices from '../../services/UserServices';
import User from '../../entities/User';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';
import PrimaryBtn from '../atoms/PrimaryBtn';
import useErrorToast from '../../hooks/useErrorToast';
import SelectInput from '../atoms/SelectInput';
import SecundaryBtn from '../atoms/SecundaryBtn';
import PatientServices from '../../services/PatientServices';
import Patient from '../../entities/Patient';
import FormSwitchLine from '../atoms/FormSwitchLine';
import FormTextareaLine from '../atoms/FormTextareaLine';
import ConsultationServices from '../../services/ConsultationServices';

export interface IConsultationForm {
   patientAbsent: boolean;
   observation: string;
   professionalUserId?: string;
   patientId?: string;
}

function ConsultationForm() {
   const router = useRouter();

   const errorToast = useErrorToast();

   const [form, setForm] = useState<IConsultationForm>({
      patientAbsent: false,
      observation: '',
      professionalUserId: undefined,
      patientId: undefined
   });
   const userQuery = useQuery(['user'], () => UserServices.getAll());

   const users = userQuery.data && User.createMany(userQuery.data);

   const patientQuery = useQuery(['patients'], () => PatientServices.getAll());

   const patients = patientQuery.data && Patient.createMany(patientQuery.data);

   const createConsultationMutation = useMutation({
      mutationFn: ConsultationServices.create,
      onError: () => {
         errorToast('Não foi possível criar o compromisso');
      }
   });

   function save() {
      createConsultationMutation.mutate(form);
   }

   return (
      <section className="py-3">
         <div className="container px-4 mx-auto">
            <div className="p-10 bg-raisin-black rounded-lg border border-raisin-black-lighter">
               <form>
                  <SelectInput
                     name="professionalUserId"
                     title="Profissional Responsável"
                     setState={setForm}
                     options={users}
                     placeholder="Selecione o profissional responsável..."
                     state={form.professionalUserId}
                  />
                  <SelectInput
                     name="patientId"
                     title="Paciente"
                     setState={setForm}
                     options={patients}
                     placeholder="Selecione o paciente..."
                     state={form.patientId}
                  />
                  <FormSwitchLine
                     label="Paciente Ausente?"
                     setState={setForm}
                     name="patientAbsent"
                     state={form.patientAbsent}
                  />
                  <FormTextareaLine
                     state={form.observation}
                     setState={setForm}
                     name="observation"
                     label="Anotações do Atendimento"
                     placeHolder="Digite os detalhes do atendimento..."
                  />
                  {/* 
                  {selectedUser ? (
                     <SelectAvailabilityInput
                        title="Disponibilidade"
                        state={selectedUserAvailability}
                        setState={setSelectedUserAvailability}
                        options={selectedUser?.availabilities || []}
                        placeholder="Selecione a disponibilidade a ser utilizada..."
                     />
                  ) : (
                     <DisplayLine
                        label="Disponibilidade"
                        content="Selecione um responsável para ver suas disponibilidades. "
                     />
                  )}
                  {selectedUserAvailability ? (
                     compatiblePatients.length > 0 ? (
                        
                     ) : (
                        <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-cool-gray-900 border-opacity-10">
                           <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
                              <span className="text-md font-medium text-cool-gray-500">
                                 Paciente
                              </span>
                           </div>
                           <div className="w-full sm:w-2/3 px-4">
                              <div className="max-w-xl">
                                 <div className="flex flex-wrap items-center -mx-3">
                                    <div className="w-full px-3 mb-3 sm:mb-0">
                                       {patientsLoading ? (
                                          <p className="text-md text-cool-gray-200  font-medium ">
                                             Carregando pacientes compatíveis...
                                          </p>
                                       ) : (
                                          <p className="text-md text-red-200  font-medium ">
                                             Não existe nenhuma paciente
                                             compatível com esse horário.
                                          </p>
                                       )}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     )
                  ) : (
                     <DisplayLine
                        label="Paciente"
                        content="Selecione um responsável e uma disponibilidade para ver os pacientes compatíveis."
                     />
                  )}

                  <div className="text-right space-x-6">
                     <PrimaryBtn text={'Salvar'} clickHandle={save} />
                     <SecundaryBtn
                        text="Cancelar"
                        clickHandle={() => router.push('/compromissos')}
                     />
                  </div> */}
                  <div className="text-right space-x-6">
                     <PrimaryBtn text={'Salvar'} clickHandle={save} />
                     <SecundaryBtn
                        text="Cancelar"
                        clickHandle={() => router.push('/compromissos')}
                     />
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
}
export default ConsultationForm;
