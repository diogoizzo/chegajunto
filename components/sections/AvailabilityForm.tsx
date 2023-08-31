import { useState } from 'react';
import IAvailability from '../../interfaces/IAvailability';
import FormInputTimeWithStep from '../atoms/FomInputTimeWithStep';
import PrimaryBtn from '../atoms/PrimaryBtn';
import StringSelectInput from '../atoms/StringSelectInput';
import { useMutation, useQueryClient } from 'react-query';
import AvailabilityServices from '../../services/AvailabilityServices';
import useErrorToast from '../../hooks/useErrorToast';

export interface IAvailabilityForm {
   dayOfWeek?: string;
   time: string;
}

function AvailabilityForm({
   availabilities,
   patientId
}: {
   availabilities: IAvailability[];
   patientId?: string;
}) {
   const [form, setForm] = useState<IAvailabilityForm>({
      dayOfWeek: undefined,
      time: ''
   });

   const errorToast = useErrorToast();

   const queryClient = useQueryClient();

   const createAvailabilitiyMutation = useMutation({
      mutationFn: AvailabilityServices.createPatientAvailability,
      onSuccess: () => {
         queryClient.invalidateQueries(['patient', patientId]);
      },
      onError: () => {
         errorToast('Não foi possível criar a disponibilidade');
      }
   });
   const deleteAvailabilitiyMutation = useMutation({
      mutationFn: AvailabilityServices.deletePatientAvailability,
      onSuccess: () => {
         queryClient.invalidateQueries(['patient', patientId]);
      },
      onError: () => {
         errorToast('Não foi possível apagar a disponibilidade');
      }
   });

   async function addAvailability() {
      if (form.dayOfWeek && form.time) {
         const id = String(patientId);
         createAvailabilitiyMutation.mutate({
            patientId: id,
            form
         });
         setForm({
            dayOfWeek: '',
            time: ''
         });
      } else {
         errorToast(
            'É necessário selecionar um dia e hora para cadastrar uma disponibilidade'
         );
      }
   }

   async function handleDelete(availabilityId?: string) {
      if (availabilityId) {
         const id = String(patientId);
         deleteAvailabilitiyMutation.mutate({
            patientId: id,
            availabilityId
         });
      }
   }
   return (
      <div className="p-10 bg-raisin-black rounded-lg mt-4 border border-raisin-black-lighter">
         <div className="flex flex-wrap items-center justify-between -mx-4  pb-6 border-b border-gray-400 border-opacity-20">
            <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
               <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                  Disponibilidades
               </h4>
            </div>
         </div>
         <div className=" -mx-4 mb-10">
            <h5 className="mt-6 px-4   text-xl text-cool-gray-500 font-semibold">
               Adicionar disponibilidade
            </h5>
            <p className="mt-1 px-4 text-md text-cool-gray-900 mb-10">
               Preencha as informações abaixo para adicionar uma nova
               disponibilidade
            </p>
            <form className="w-full px-4 border-b border-gray-400 border-opacity-20">
               <StringSelectInput
                  title="Dia da Semana"
                  state={form.dayOfWeek}
                  setState={setForm}
                  placeholder="Selecione o dia da semana..."
                  name="dayOfWeek"
                  options={[
                     'Segunda-feira',
                     'Terça-feria',
                     'Quarta-feira',
                     'Quinta-feira',
                     'Sexta-feira',
                     'Sábado',
                     'Domingo'
                  ]}
               />

               <FormInputTimeWithStep
                  label="Horário"
                  name="time"
                  state={form.time}
                  setState={setForm}
               />
               <div className="w-full text-right mb-6">
                  <PrimaryBtn text="Adicionar" clickHandle={addAvailability} />
               </div>
            </form>
         </div>
         {availabilities?.length > 0 ? (
            availabilities?.map((availability) => (
               <div
                  key={availability.id}
                  className="flex flex-wrap items-center justify-between -mx-4 last:border-none  pb-3 mt-5 border-b border-cool-gray-900 border-opacity-10"
               >
                  <div className="w-full sm:w-auto px-4  sm:mb-0">
                     <p className="font-medium text-md  text-cool-gray-500 mb-1">
                        {`${availability.dayOfWeek} às ${availability.time}`}
                     </p>
                  </div>
                  <button
                     onClick={() => handleDelete(availability.id)}
                     className="w-full sm:w-auto px-4 mb-6 sm:mb-0"
                  >
                     <svg
                        className="font-medium text-md cursor-pointer  text-cool-gray-500 hover:text-cool-gray-200 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="trash-alt"
                     >
                        <path
                           fill="currentcolor"
                           d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
                        ></path>
                     </svg>
                  </button>
               </div>
            ))
         ) : (
            <span className="font-medium inline-block text-lg mt-10  text-cool-gray-500/60">
               Nenhuma disponibilidade cadastrada
            </span>
         )}
      </div>
   );
}
export default AvailabilityForm;
