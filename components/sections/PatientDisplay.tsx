import DisplayLine from '../atoms/DisplayLine';

import IPatient from '../../interfaces/IPatient';

interface PatientDisplayProps {
   patient?: IPatient;
}

function PatientDisplay({ patient }: PatientDisplayProps) {
   return (
      <section className="py-3 mt-3">
         <div className="container px-4 mx-auto">
            <div className="p-10 bg-raisin-black rounded-lg">
               <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                  <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                     <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                        Informações Pessoais
                     </h4>
                  </div>
               </div>
               <DisplayLine label="Nome" content={patient?.name} />
               <DisplayLine label="Telefone" content={patient?.phone} />
               <DisplayLine label="Email" content={patient?.email} />
               <DisplayLine label="Endereço" content={patient?.address} />
               <DisplayLine
                  label="Data de Nascimento"
                  content={String(patient?.birthday)}
               />
               <DisplayLine label="Status" content={patient?.status} />

               <DisplayLine
                  label="Naturalidade"
                  content={patient?.birthplace}
               />
               <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                  <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                     <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                        Informações Institucionais
                     </h4>
                  </div>
               </div>
               <DisplayLine label="Escolaridade" content={patient?.education} />
               <DisplayLine label="Nome da Escola" content={patient?.school} />
               <DisplayLine
                  label="É Bolsista?"
                  content={patient?.scholarship ? 'Sim' : 'Não'}
               />
               <div className="flex flex-wrap items-center justify-between -mx-4 mb-8 pb-6 border-b border-gray-400 border-opacity-20">
                  <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                     <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                        Informações Médicas
                     </h4>
                  </div>
               </div>
               <DisplayLine
                  label="Faz uso de medicação?"
                  content={patient?.isMedicated ? 'Sim' : 'Não'}
               />
               {patient?.isMedicated ? (
                  <DisplayLine
                     label="Qual Medicação"
                     content={patient?.medication}
                  />
               ) : null}
               <DisplayLine
                  label="Reclamação do Paciente"
                  content={patient?.complaint}
               />
               <DisplayLine
                  label="Observações sobre o Paciente"
                  content={patient?.observation}
               />
               <DisplayLine
                  label="Entrevistado por"
                  content={patient?.interviewedBy?.name}
               />
               <DisplayLine
                  label="Responsável"
                  content={patient?.underResponsibilityOf?.name}
               />
            </div>
         </div>
      </section>
   );
}
export default PatientDisplay;
