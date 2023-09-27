import DisplayLine from '../atoms/DisplayLine';
import IAppointment from '../../interfaces/IAppointment';
import DangerBtn from '../atoms/DangerBtn';
import { useRouter } from 'next/router';
import ConfirmationModal from '../parts/ConfirmationModal';
import SecundaryBtn from '../atoms/SecundaryBtn';
import useAppointmentDeleteViewModel from '../../hooks/useAppointmentDeleteViewModel';

interface AppointmentDisplayProps {
   appointment?: IAppointment;
}

function AppointmentDisplay({ appointment }: AppointmentDisplayProps) {
   const router = useRouter();
   const viewModel = useAppointmentDeleteViewModel(appointment);
   return (
      <>
         <ConfirmationModal
            text={'Tem certeza que deseja apagar o compromisso'}
            isOpen={viewModel.isOpen}
            closeModal={() => viewModel.closeModal(viewModel.setIsOpen)}
            deleteAction={() => viewModel.deleteAction(viewModel.setIsOpen)}
         />
         <section className="py-3">
            <div className="container px-4 mx-auto">
               <div className="p-10 bg-raisin-black rounded-lg border border-raisin-black-lighter">
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
                  <DisplayLine
                     label="Profissional Responsável"
                     content={appointment?.professional.name}
                  />
                  <DisplayLine
                     label="Horário"
                     content={`${appointment?.dayOfWeek} às ${appointment?.time}`}
                  />
                  <DisplayLine
                     label="Paciente"
                     content={appointment?.patient.name}
                  />
                  <div className="w-full text-center md:text-right space-y-3 md:space-x-3">
                     <DangerBtn
                        text={'Apagar Compromisso'}
                        openConfirmation={(e: any) =>
                           viewModel.openConfirmationModal(
                              e,
                              viewModel.setIsOpen
                           )
                        }
                     />
                     <SecundaryBtn
                        text="Cancelar"
                        clickHandle={() => router.push('/compromissos')}
                     />
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
export default AppointmentDisplay;
