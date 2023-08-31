import Link from 'next/link';
import IAppointment from '../../interfaces/IAppointment';

interface AppointmentTableProps {
   small?: boolean;
   data: IAppointment[];
}

function AppointmentTable({ small, data }: AppointmentTableProps) {
   return (
      <section className="py-3">
         <div className="container px-4 mx-auto">
            <div className="py-3 bg-raisin-black rounded-lg border border-raisin-black-lighter">
               {small ? (
                  <div className="flex flex-wrap mb-4 items-center justify-between px-6 mt-2">
                     <div className="w-full sm:w-auto">
                        <h4 className="text-xl leading-normal font-semibold text-cool-gray-200">
                           Pacientes
                        </h4>
                     </div>
                     <div className="w-full sm:w-auto">
                        <a
                           className="inline-block py-2 px-4 mr-4 text-xs leading-5 font-semibold text-carolina-blue bg-raisin-black-light hover:bg-raisin-black-lighter rounded-lg"
                           href="#"
                        >
                           Adicionar
                        </a>
                        <a
                           className="inline-block py-2 px-4 text-xs leading-5 font-semibold text-carolina-blue bg-raisin-black-light hover:bg-raisin-black-lighter rounded-lg"
                           href="#"
                        >
                           Ver Todos
                        </a>
                     </div>
                  </div>
               ) : null}
               <div className="px-6">
                  <div className="w-full mt-6 pb-6 overflow-x-auto">
                     <table className="w-full min-w-max">
                        <thead>
                           <tr className="text-left">
                              <th className="p-0">
                                 <div className="py-3 px-6 rounded-l-xl bg-raisin-black-light">
                                    <span className="text-xs text-gray-300 font-semibold">
                                       PACIENTE
                                    </span>
                                 </div>
                              </th>
                              <th className="p-0">
                                 <div className="py-3 px-6 bg-raisin-black-light">
                                    <span className="text-xs text-gray-300 font-semibold">
                                       PROFISSIONAL
                                    </span>
                                 </div>
                              </th>
                              <th className="p-0">
                                 <div className="py-3 px-6 bg-raisin-black-light">
                                    <span className="text-xs text-gray-300 font-semibold">
                                       DIA
                                    </span>
                                 </div>
                              </th>
                              <th className="p-0">
                                 <div className="py-3 px-6 bg-raisin-black-light">
                                    <span className="text-xs text-gray-300 font-semibold">
                                       HORA
                                    </span>
                                 </div>
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           {data.map((appointment, idx) => {
                              return (
                                 <tr key={appointment.id}>
                                    <td className="p-0">
                                       <Link
                                          href={String(appointment.editLink)}
                                          passHref
                                       >
                                          <div
                                             className={`flex items-center h-16 px-6 ${
                                                idx % 2 !== 0
                                                   ? 'bg-raisin-black-light rounded-l-xl'
                                                   : null
                                             }`}
                                          >
                                             <span className="text-sm text-cool-gray-200 font-medium">
                                                {appointment.patient.name}
                                             </span>
                                          </div>
                                       </Link>
                                    </td>
                                    <td className="p-0">
                                       <Link
                                          href={String(appointment.editLink)}
                                          passHref
                                       >
                                          <div
                                             className={`flex items-center h-16 px-6 ${
                                                idx % 2 !== 0
                                                   ? 'bg-raisin-black-light'
                                                   : null
                                             }`}
                                          >
                                             <span className="text-sm text-cool-gray-200 font-medium">
                                                {appointment.professional.name}
                                             </span>
                                          </div>
                                       </Link>
                                    </td>
                                    <td className="p-0">
                                       <Link
                                          href={String(appointment.editLink)}
                                          passHref
                                       >
                                          <div
                                             className={`flex items-center h-16 px-6 ${
                                                idx % 2 !== 0
                                                   ? 'bg-raisin-black-light'
                                                   : null
                                             }`}
                                          >
                                             <span className="text-sm text-cool-gray-200 font-medium">
                                                {appointment.dayOfWeek}
                                             </span>
                                          </div>
                                       </Link>
                                    </td>
                                    <td className="p-0">
                                       <Link
                                          href={String(appointment.editLink)}
                                          passHref
                                       >
                                          <div
                                             className={`flex items-center h-16 px-6 ${
                                                idx % 2 !== 0
                                                   ? 'bg-raisin-black-light'
                                                   : null
                                             }`}
                                          >
                                             <div className="flex h-full items-center">
                                                <span className="text-sm font-medium text-cool-gray-200">
                                                   {appointment.time}
                                                </span>
                                             </div>
                                          </div>
                                       </Link>
                                    </td>
                                 </tr>
                              );
                           })}
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
export default AppointmentTable;
