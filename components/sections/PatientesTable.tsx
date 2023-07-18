interface PatientesTableProps {
   small?: boolean;
}

function PatientesTable({ small }: PatientesTableProps) {
   return (
      <section className="py-3">
         <div className="container px-4 mx-auto">
            <div className="py-3 bg-raisin-black rounded-lg">
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
                                       STATUS
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
                                       RESPONSÁVEL
                                    </span>
                                 </div>
                              </th>
                           </tr>
                        </thead>
                        <tbody>
                           <tr>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       Carlos Agusto Sampaio
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <span className="inline-block px-3 py-1 text-xs text-raisin-black font-medium bg-carolina-blue rounded-full">
                                       COMPLETOS
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       Ativo
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <div className="flex h-full items-center">
                                       <span className="text-sm font-medium text-cool-gray-200">
                                          (24) 99237-5544
                                       </span>
                                    </div>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       Daniel Iunes
                                    </span>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6 rounded-l-xl bg-raisin-black-light">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       Maria Claudia Correa
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6 bg-raisin-black-light">
                                    <span className="inline-block px-3 py-1 text-xs text-raisin-black font-medium bg-red-300 rounded-full">
                                       INCOMPLETOS
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6 bg-raisin-black-light">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       Espera
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6 bg-raisin-black-light">
                                    <div className="flex h-full items-center">
                                       <span className="text-sm font-medium text-cool-gray-200">
                                          (21) 9858-6789
                                       </span>
                                    </div>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6 rounded-r-xl bg-raisin-black-light">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       Marcos Vinicus
                                    </span>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       Marcos Vinicus
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <span className="inline-block px-2 py-1 text-xs text-blue-100 font-medium bg-blue-500 rounded-full">
                                       KICKOFF
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       $16,000
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <div className="flex h-full items-center">
                                       <span className="text-sm font-medium text-cool-gray-200">
                                          John Doe
                                       </span>
                                    </div>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       June 06, 2022
                                    </span>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6 rounded-l-xl bg-raisin-black-light">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       Banner design
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6 bg-raisin-black-light">
                                    <span className="inline-block px-2 py-1 text-xs text-blue-100 font-medium bg-blue-500 rounded-full">
                                       KICKOFF
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6 bg-raisin-black-light">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       $16,000
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6 bg-raisin-black-light">
                                    <div className="flex h-full items-center">
                                       <span className="text-sm font-medium text-cool-gray-200">
                                          John Doe
                                       </span>
                                    </div>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6 rounded-r-xl bg-raisin-black-light">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       June 06, 2022
                                    </span>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       Banner design
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <span className="inline-block px-2 py-1 text-xs text-blue-100 font-medium bg-blue-500 rounded-full">
                                       KICKOFF
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       $16,000
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <div className="flex h-full items-center">
                                       <span className="text-sm font-medium text-cool-gray-200">
                                          John Doe
                                       </span>
                                    </div>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       June 06, 2022
                                    </span>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6 rounded-l-xl bg-raisin-black-light">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       Banner design
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6 bg-raisin-black-light">
                                    <span className="inline-block px-2 py-1 text-xs text-blue-100 font-medium bg-blue-500 rounded-full">
                                       KICKOFF
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6 bg-raisin-black-light">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       $16,000
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6 bg-raisin-black-light">
                                    <div className="flex h-full items-center">
                                       <span className="text-sm font-medium text-cool-gray-200">
                                          John Doe
                                       </span>
                                    </div>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6 rounded-r-xl bg-raisin-black-light">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       June 06, 2022
                                    </span>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       Banner design
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <span className="inline-block px-2 py-1 text-xs text-blue-100 font-medium bg-blue-500 rounded-full">
                                       KICKOFF
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       $16,000
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <div className="flex h-full items-center">
                                       <span className="text-sm font-medium text-cool-gray-200">
                                          John Doe
                                       </span>
                                    </div>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       June 06, 2022
                                    </span>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6 rounded-l-xl bg-raisin-black-light">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       Banner design
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6 bg-raisin-black-light">
                                    <span className="inline-block px-2 py-1 text-xs text-blue-100 font-medium bg-blue-500 rounded-full">
                                       KICKOFF
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6 bg-raisin-black-light">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       $16,000
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6 bg-raisin-black-light">
                                    <div className="flex h-full items-center">
                                       <span className="text-sm font-medium text-cool-gray-200">
                                          John Doe
                                       </span>
                                    </div>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6 rounded-r-xl bg-raisin-black-light">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       June 06, 2022
                                    </span>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       Banner design
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <span className="inline-block px-2 py-1 text-xs text-blue-100 font-medium bg-blue-500 rounded-full">
                                       KICKOFF
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       $16,000
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <div className="flex h-full items-center">
                                       <span className="text-sm font-medium text-cool-gray-200">
                                          John Doe
                                       </span>
                                    </div>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       June 06, 2022
                                    </span>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6 rounded-l-xl bg-raisin-black-light">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       Banner design
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6 bg-raisin-black-light">
                                    <span className="inline-block px-2 py-1 text-xs text-blue-100 font-medium bg-blue-500 rounded-full">
                                       KICKOFF
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6 bg-raisin-black-light">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       $16,000
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6 bg-raisin-black-light">
                                    <div className="flex h-full items-center">
                                       <span className="text-sm font-medium text-cool-gray-200">
                                          John Doe
                                       </span>
                                    </div>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6 rounded-r-xl bg-raisin-black-light">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       June 06, 2022
                                    </span>
                                 </div>
                              </td>
                           </tr>
                           <tr>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       Banner design
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <span className="inline-block px-2 py-1 text-xs text-blue-100 font-medium bg-blue-500 rounded-full">
                                       KICKOFF
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       $16,000
                                    </span>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <div className="flex h-full items-center">
                                       <span className="text-sm font-medium text-cool-gray-200">
                                          John Doe
                                       </span>
                                    </div>
                                 </div>
                              </td>
                              <td className="p-0">
                                 <div className="flex items-center h-16 px-6">
                                    <span className="text-sm text-cool-gray-200 font-medium">
                                       June 06, 2022
                                    </span>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
export default PatientesTable;
