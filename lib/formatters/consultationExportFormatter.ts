import dayjs from 'dayjs';
import IConsultation from '../../interfaces/IConsultation';

export default function consultationExportFormatter(
   consultations: IConsultation[]
) {
   return consultations.map((consultation) => {
      return {
         'Data da Consulta': dayjs(consultation.createdAt).format('DD/MM/YYYY'),
         Paciente: consultation.patient.name,
         Profissional: consultation.professional?.name,
         'Paciente Ausente': consultation.patientAbsent ? 'SIM' : 'NÃO',
         'Observações da Consulta': consultation.observation
      };
   });
}
