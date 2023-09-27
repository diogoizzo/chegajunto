import { useState } from 'react';
import IAvailability from '../../interfaces/IAvailability';
import FormInputTimeWithStep from '../atoms/FomInputTimeWithStep';
import PrimaryBtn from '../atoms/PrimaryBtn';
import StringSelectInput from '../atoms/StringSelectInput';
import { useMutation, useQueryClient } from 'react-query';
import AvailabilityServices from '../../services/AvailabilityServices';
import useErrorToast from '../../hooks/useErrorToast';
import usePatientAvailablityViewModel from '../../hooks/usePatientAvailablityViewModel';

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
   const viewModel = usePatientAvailablityViewModel(availabilities, patientId);
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
                  state={viewModel.form.dayOfWeek}
                  setState={viewModel.setForm}
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
                  state={viewModel.form.time}
                  setState={viewModel.setForm}
               />
               <div className="w-full text-right mb-6">
                  <PrimaryBtn
                     text="Adicionar"
                     clickHandle={() =>
                        viewModel.addAvailability(
                           viewModel.form,
                           viewModel.setForm,
                           viewModel.errorToast,
                           patientId
                        )
                     }
                  />
               </div>
            </form>
         </div>
         {availabilities?.length > 0 ? (
            availabilities?.map((availability) => (
               <div
                  key={availability.id}
                  className="flex  items-center justify-between -mx-4 last:border-none  pb-5 mt-5 border-b border-cool-gray-900 border-opacity-10"
               >
                  <div className="w-full px-4  sm:mb-0">
                     <p className="font-medium text-md  text-cool-gray-500 mb-1">
                        {`${availability.dayOfWeek} às ${availability.time}`}
                     </p>
                  </div>
                  <button
                     onClick={() => viewModel.handleDelete(availability.id)}
                     className="sm:w-auto  px-4   inline-flex items-center"
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
            <span className="font-medium inline-block text-lg mt-3 mb-3  text-cool-gray-500/60">
               Nenhuma disponibilidade cadastrada
            </span>
         )}
      </div>
   );
}
export default AvailabilityForm;
