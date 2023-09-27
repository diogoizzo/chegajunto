import Link from 'next/link';
import IConsultation from '../../interfaces/IConsultation';
import dayjs from 'dayjs';

interface UserTableProps {
   small?: boolean;
   data: IConsultation[];
}

function ConsultationTable({ small, data }: UserTableProps) {
   return (
      <section className="py-3">
         <div className="container px-4 mx-auto">
            <div className="py-3 bg-raisin-black rounded-lg border border-raisin-black-lighter">
               <div className="px-6">
                  <div className="w-full mt-6 pb-6 overflow-x-auto">
                     <table className="w-full min-w-max">
                        <thead>
                           <tr className="text-left">
                              <th className="p-0">
                                 <div className="py-3 px-6 rounded-l-xl bg-raisin-black-light">
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
                              <th className="p-0">
                                 <div className="py-3 px-6 bg-raisin-black-light">
                                    <span className="text-xs text-gray-300 font-semibold">
                                       PACIENTE
                                    </span>
                                 </div>
                              </th>
                              <th className="p-0">
                                 <div className="py-3 px-6 rounded-r-xl bg-raisin-black-light">
                                    <span className="text-xs text-gray-300 font-semibold">
                                       PROFISSIONAL
                                    </span>
                                 </div>
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           {data.map((consultation, idx) => {
                              return (
                                 <tr key={consultation.id}>
                                    <td className="p-0">
                                       <Link
                                          href={consultation.consultationLink}
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
                                                {dayjs(
                                                   consultation.createdAt
                                                ).format('DD/MM/YYYY')}
                                                {/* TODO formatar com daysjs  - dia*/}
                                             </span>
                                          </div>
                                       </Link>
                                    </td>
                                    <td className="p-0">
                                       <Link
                                          href={consultation.consultationLink}
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
                                                {dayjs(
                                                   consultation.createdAt
                                                ).format('HH:mm')}
                                             </span>
                                          </div>
                                       </Link>
                                    </td>
                                    <td className="p-0">
                                       <Link
                                          href={consultation.consultationLink}
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
                                                {consultation.patient?.name}
                                             </span>
                                          </div>
                                       </Link>
                                    </td>
                                    <td className="p-0">
                                       <Link
                                          href={consultation.consultationLink}
                                          passHref
                                       >
                                          <div
                                             className={`flex items-center rounded-r-xl h-16 px-6 ${
                                                idx % 2 !== 0
                                                   ? 'bg-raisin-black-light'
                                                   : null
                                             }`}
                                          >
                                             <div className="flex h-full items-center">
                                                <span className="text-sm font-medium  text-cool-gray-200">
                                                   {
                                                      consultation.professional
                                                         ?.name
                                                   }
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
export default ConsultationTable;
