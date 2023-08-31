import { useEffect, useRef, useState } from 'react';
import IUser from '../../interfaces/IUser';
import UserServices from '../../services/UserServices';
import User from '../../entities/User';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from 'react-query';
import ConfirmationModal from '../parts/ConfirmationModal';
import PrimaryBtn from '../atoms/PrimaryBtn';
import DangerBtn from '../atoms/DangerBtn';
import useErrorToast from '../../hooks/useErrorToast';
import StringSelectInput from '../atoms/StringSelectInput';
import IAppointment from '../../interfaces/IAppointment';
import FormInputTimeWithStep from '../atoms/FomInputTimeWithStep';
import SelectInput from '../atoms/SelectInput';
import IPatient from '../../interfaces/IPatient';
import Patient from '../../entities/Patient';
import PatientServices from '../../services/PatientServices';
import AppointmentServices from '../../services/AppointmentServices';
import SelectAvailabilityInput from '../atoms/SelectAvailabilityInput';
import IAvailability from '../../interfaces/IAvailability';
import AvailabilityServices from '../../services/AvailabilityServices';
import DisplayLine from '../atoms/DisplayLine';

interface AppointmentFormProps {
   appointment?: IAppointment;
}

export interface IAppointmentForm {
   dayOfWeek?: string;
   time?: string;
   professionalUserId?: string;
   patientId?: string;
}

function AppointmentForm({ appointment }: AppointmentFormProps) {
   const router = useRouter();

   const errorToast = useErrorToast();

   const [isOpen, setIsOpen] = useState(false);

   const usersQuery = useQuery(['users'], () => UserServices.getAll());

   const users = usersQuery.data && User.createMany(usersQuery.data);

   const [compatiblePatients, setCompatiblePatients] = useState<
      IPatient[] | []
   >([]);

   const [patientsLoading, setPatientsLoading] = useState(false);

   const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

   const [selectedUserAvailability, setSelectedUserAvailability] =
      useState<IAvailability | null>(null);

   const [form, setForm] = useState<IAppointmentForm>({
      professionalUserId: appointment?.professionalUserId,
      patientId: appointment?.patientId
   });

   const updatedAppointmentMutation = useMutation({
      mutationFn: AppointmentServices.update,
      onSuccess: () => {
         router.push(`/compromissos?updated=true`);
      },
      onError: () => {
         errorToast('Não foi possível atualizar o compromisso');
      }
   });

   const deleteAppointmentMutation = useMutation({
      mutationFn: AppointmentServices.delete,
      onSuccess: () => {
         router.push('/compromissos?deleted=true');
      },
      onError: () => {
         errorToast('Não foi possível atualizar o compromisso');
      }
   });

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
      if (appointment) {
         updatedAppointmentMutation.mutate({
            id: String(appointment.id),
            form
         });
      } else {
         const activeAvailability = selectedUser?.availabilities?.filter(
            (availability) =>
               availability.id === String(selectedUserAvailability)
         )[0];
         const finalForm = {
            ...form,
            dayOfWeek: activeAvailability?.dayOfWeek,
            time: activeAvailability?.time
         };
         createAppointmentMutation.mutate(finalForm);
      }
   }

   function deleteAction() {
      closeModal();
      deleteAppointmentMutation.mutate(appointment?.id);
   }

   function closeModal() {
      setIsOpen(false);
   }

   function openConfirmationModal(e: any) {
      e.preventDefault();
      setIsOpen(true);
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
   console.log(form);
   return (
      <>
         <ConfirmationModal
            text={'Tem certeza que deseja apagar o usuário?'}
            isOpen={isOpen}
            closeModal={closeModal}
            deleteAction={deleteAction}
         />
         <section className="py-3">
            <div className="container px-4 mx-auto">
               <div className="p-10 bg-raisin-black rounded-lg border border-raisin-black-lighter">
                  {appointment ? (
                     <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                        <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                           <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                              {`${appointment?.patient.name} na ${appointment?.dayOfWeek} às ${appointment?.time}`}
                           </h4>
                           <p className="text-md text-carolina-blue">
                              {appointment?.professional.name}
                           </p>
                        </div>
                     </div>
                  ) : null}

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
                                                Carregando pacientes
                                                compatíveis...
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
                        {appointment ? (
                           <DangerBtn
                              text={'Apagar Compromisso'}
                              openConfirmation={openConfirmationModal}
                           />
                        ) : null}
                     </div>
                  </form>
               </div>
            </div>
         </section>
      </>
   );
}
export default AppointmentForm;
