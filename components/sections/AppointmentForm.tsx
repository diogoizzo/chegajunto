import { useRouter } from 'next/router';
import PrimaryBtn from '../atoms/PrimaryBtn';
import SelectInput from '../atoms/SelectInput';
import SelectAvailabilityInput from '../atoms/SelectAvailabilityInput';
import DisplayLine from '../atoms/DisplayLine';
import SecundaryBtn from '../atoms/SecundaryBtn';
import useAppointmentCreateViewModel from '../../hooks/useAppointmentCreateViewModel';

export interface IAppointmentForm {
   dayOfWeek?: string;
   time?: string;
   professionalUserId?: string;
   patientId?: string;
}

function AppointmentForm() {
   const router = useRouter();
   const viewModel = useAppointmentCreateViewModel();
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
                  {viewModel.selectedUser ? (
                     <SelectAvailabilityInput
                        title="Disponibilidade"
                        state={viewModel.selectedUserAvailability}
                        setState={viewModel.setSelectedUserAvailability}
                        options={viewModel.selectedUser?.availabilities || []}
                        placeholder="Selecione a disponibilidade a ser utilizada..."
                     />
                  ) : (
                     <DisplayLine
                        label="Disponibilidade"
                        content="Selecione um responsável para ver suas disponibilidades. "
                     />
                  )}
                  {viewModel.selectedUserAvailability ? (
                     viewModel.compatiblePatients.length > 0 ? (
                        <SelectInput
                           name="patientId"
                           title="Paciente"
                           setState={viewModel.setForm}
                           options={viewModel.compatiblePatients}
                           placeholder="Selecione o paciente..."
                           state={viewModel.form.patientId}
                        />
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
                                       {viewModel.patientsLoading ? (
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

                  <div className="text-right space-y-3 md:space-x-6">
                     <PrimaryBtn
                        text={'Salvar'}
                        clickHandle={() => {
                           viewModel.save(viewModel.selectedUser);
                        }}
                     />
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
export default AppointmentForm;
