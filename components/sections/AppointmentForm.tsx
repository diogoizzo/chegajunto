import { useEffect, useRef, useState } from 'react';
import IUser from '../../interfaces/IUser';
import UserServices from '../../services/UserServices';
import User from '../../entities/User';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';
import PrimaryBtn from '../atoms/PrimaryBtn';
import useErrorToast from '../../hooks/useErrorToast';
import SelectInput from '../atoms/SelectInput';
import IPatient from '../../interfaces/IPatient';
import AppointmentServices from '../../services/AppointmentServices';
import SelectAvailabilityInput from '../atoms/SelectAvailabilityInput';
import IAvailability from '../../interfaces/IAvailability';
import AvailabilityServices from '../../services/AvailabilityServices';
import DisplayLine from '../atoms/DisplayLine';
import SecundaryBtn from '../atoms/SecundaryBtn';

export interface IAppointmentForm {
   dayOfWeek?: string;
   time?: string;
   professionalUserId?: string;
   patientId?: string;
}

function AppointmentForm() {
   const router = useRouter();

   const errorToast = useErrorToast();

   const usersQuery = useQuery(['users'], () => UserServices.getAll());

   const users = usersQuery.data && User.createMany(usersQuery.data);

   const [compatiblePatients, setCompatiblePatients] = useState<
      IPatient[] | []
   >([]);

   const [patientsLoading, setPatientsLoading] = useState(false);

   const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

   const [selectedUserAvailability, setSelectedUserAvailability] =
      useState<IAvailability | null>(null);

   const [form, setForm] = useState<IAppointmentForm>({});

   const createAppointmentMutation = useMutation({
      mutationFn: AppointmentServices.create,
      onSuccess: () => {
         router.push('/compromissos?saved=true');
      },
      onError: () => {
         errorToast('Não foi possível criar o novo compromisso');
      }
   });

   function save() {
      const activeAvailability = selectedUser?.availabilities?.filter(
         (availability) => availability.id === String(selectedUserAvailability)
      )[0];
      const finalForm = {
         ...form,
         dayOfWeek: activeAvailability?.dayOfWeek,
         time: activeAvailability?.time
      };
      createAppointmentMutation.mutate(finalForm);
   }

   useEffect(() => {
      const selectedProfessional = users?.filter(
         (user) => user.id === form.professionalUserId
      )[0];
      if (selectedProfessional?.id !== selectedUser?.id) {
         setSelectedUser(selectedProfessional ? selectedProfessional : null);
      }
   }, [form.professionalUserId, users, selectedUser]);

   useEffect(() => {
      setPatientsLoading(true);
      const activeAvailability = selectedUser?.availabilities?.filter(
         (availability) => availability.id === String(selectedUserAvailability)
      )[0];
      AvailabilityServices.getCompatibleAvailabilities(
         String(activeAvailability?.dayOfWeek),
         String(activeAvailability?.time)
      ).then((res: IAvailability) => {
         res?.patients && setCompatiblePatients(res.patients);
         setPatientsLoading(false);
      });
   }, [selectedUserAvailability, selectedUser?.availabilities]);
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
                        <SelectInput
                           name="patientId"
                           title="Paciente"
                           setState={setForm}
                           options={compatiblePatients}
                           placeholder="Selecione o paciente..."
                           state={form.patientId}
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
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
}
export default AppointmentForm;
