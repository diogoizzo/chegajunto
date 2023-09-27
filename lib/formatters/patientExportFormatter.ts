import dayjs from 'dayjs';
import IPatient from '../../interfaces/IPatient';

export default function patientExportFormatter(patients: IPatient[]) {
   return patients.map((patient) => {
      return {
         Nome: patient.name,
         Email: patient.email,
         Status: patient.status,
         CPF: patient.cpf,
         Telefone: patient.phone,
         Endereço: patient.address,
         Observação: patient.observation,
         Aniversário: patient.birthday
            ? dayjs(patient.birthday).format('DD/MM/YYYY')
            : '',
         'Local de Nascimento': patient.birthplace,
         Escolaridade: patient.education,
         Escola: patient.school,
         Bolsista: patient.scholarship ? 'SIM' : 'NÃO',
         'Usa Medicação': patient.isMedicated ? 'SIM' : 'NÃO',
         Medicação: patient.medication ? patient.medication : 'Nenhuma',
         'Responsável pela Entrevista': patient.interviewedBy?.name,
         'Responsável pelo Paciente': patient.underResponsibilityOf?.name,
         Reclamação: patient.complaint,
         'Data do cadastro': dayjs(patient.createdAt).format('DD/MM/YYYY'),
         'Última Atualização': dayjs(patient.updatedAt).format('DD/MM/YYYY'),
         Disponibilidades: patient.availabilities
            ?.map(
               (availability) =>
                  `${availability.dayOfWeek} às ${availability.time}`
            )
            .join(' - ')
      };
   });
}
