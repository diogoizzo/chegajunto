import DisplayLine from '../atoms/DisplayLine';
import dayjs from 'dayjs';
import IConsultation from '../../interfaces/IConsultation';

interface ConsultationDisplayProps {
   consultation?: IConsultation;
}

function ConsultationDisplay({ consultation }: ConsultationDisplayProps) {
   return (
      <section className="py-3 ">
         <div className="container px-4 mx-auto">
            <div className="p-10 bg-raisin-black rounded-lg border border-raisin-black-lighter">
               <DisplayLine
                  label="Dia"
                  content={dayjs(consultation?.createdAt).format('DD/MM/YYYY')}
               />
               <DisplayLine
                  label="Hora"
                  content={dayjs(consultation?.createdAt).format('HH:mm')}
               />
               <DisplayLine
                  label="Paciente"
                  content={consultation?.patient?.name}
               />

               <DisplayLine
                  label="Paciente Compareceu"
                  content={consultation?.patientAbsent ? 'Não' : 'Sim'}
               />
               <DisplayLine
                  label="Responsável pelo atendimento"
                  content={consultation?.professional?.name}
               />
               <DisplayLine
                  label="Anotações do Atendimento"
                  content={consultation?.observation}
               />
            </div>
         </div>
      </section>
   );
}
export default ConsultationDisplay;
