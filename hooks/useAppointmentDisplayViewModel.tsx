import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import AppointmentServices from '../services/AppointmentServices';
import AppointmentViewModel from '../viewModels/appointmentViewModel/AppointmentsViewModel';

export default function useAppointmentDisplayViewModel() {
   const router = useRouter();

   const appointmentId = String(router.query.id);

   const query = useQuery(['appointment', appointmentId], () =>
      AppointmentServices.getById(appointmentId)
   );
   return AppointmentViewModel.displayView(query);
}
