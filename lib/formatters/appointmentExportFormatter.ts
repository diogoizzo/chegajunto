import IAppointment from '../../interfaces/IAppointment';

export default function appointmentExportFormatter(
   appointments: IAppointment[]
) {
   return appointments.map((appointment) => {
      return {
         'Dia da Semana': appointment.dayOfWeek,
         Hora: appointment.time,
         Profissional: appointment.professional.name,
         Paciente: appointment.patient.name
      };
   });
}
