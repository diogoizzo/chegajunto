import Link from 'next/link';
import IPatient from '../../interfaces/IPatient';
interface WaitingPatientesTableProps {
   small?: boolean;
   data: IPatient[];
}

function WaitingPatientesTable({ small, data }: WaitingPatientesTableProps) {
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
                                       NOME
                                    </span>
                                 </div>
                              </th>
                              <th className="p-0">
                                 <div className="py-3 px-6 bg-raisin-black-light">
                                    <span className="text-xs text-gray-300 font-semibold">
                                       DOCUMENTOS
                                    </span>
                                 </div>
                              </th>

                              <th className="p-0">
                                 <div className="py-3 px-6 bg-raisin-black-light">
                                    <span className="text-xs text-gray-300 font-semibold">
                                       TELEFONE
                                    </span>
                                 </div>
                              </th>
                              <th className="p-0">
                                 <div className="py-3 px-6 rounded-r-xl bg-raisin-black-light">
                                    <span className="text-xs text-gray-300 font-semibold">
                                       EMAIL
                                    </span>
                                 </div>
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           {data.map((patient, idx) => {
                              return (
                                 <tr key={patient.id}>
                                    <td className="p-0">
                                       <Link href={patient.getLink} passHref>
                                          <div
                                             className={`flex items-center h-16 px-6 ${
                                                idx % 2 !== 0
                                                   ? 'bg-raisin-black-light rounded-l-xl'
                                                   : null
                                             }`}
                                          >
                                             <span className="text-sm text-cool-gray-200 font-medium">
                                                {patient.name}
                                             </span>
                                          </div>
                                       </Link>
                                    </td>
                                    <td className="p-0">
                                       <Link href={patient.getLink} passHref>
                                          <div
                                             className={`flex items-center h-16 px-6 ${
                                                idx % 2 !== 0
                                                   ? 'bg-raisin-black-light'
                                                   : null
                                             }`}
                                          >
                                             {patient.isDocumentsComplete ? (
                                                <span className="inline-block px-3 py-1 text-xs text-raisin-black font-medium bg-carolina-blue rounded-full">
                                                   COMPLETOS
                                                </span>
                                             ) : (
                                                <span className="inline-block px-3 py-1 text-xs text-raisin-black font-medium bg-red-300 rounded-full">
                                                   INCOMPLETOS
                                                </span>
                                             )}
                                          </div>
                                       </Link>
                                    </td>
                                    <td className="p-0">
                                       <Link href={patient.getLink} passHref>
                                          <div
                                             className={`flex items-center h-16 px-6 ${
                                                idx % 2 !== 0
                                                   ? 'bg-raisin-black-light'
                                                   : null
                                             }`}
                                          >
                                             <span className="text-sm text-cool-gray-200 font-medium">
                                                {patient.phone}
                                             </span>
                                          </div>
                                       </Link>
                                    </td>
                                    <td className="p-0">
                                       <Link href={patient.getLink} passHref>
                                          <div
                                             className={`flex items-center h-16 px-6 ${
                                                idx % 2 !== 0
                                                   ? 'bg-raisin-black-light rounded-r-xl'
                                                   : null
                                             }`}
                                          >
                                             <div className="flex h-full items-center">
                                                <span className="text-sm font-medium text-cool-gray-200">
                                                   {patient.email}
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
export default WaitingPatientesTable;
