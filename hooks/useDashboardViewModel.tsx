import { useSession } from 'next-auth/react';
import { useQuery } from 'react-query';
import DashboardServices from '../services/DashboardServices';
import DashboardViewModel from '../viewModels/dashboardViewModel/DashboardViewModel';

export default function useDashboardViewModel() {
   const { data: session } = useSession();
   //@ts-ignore
   const activeUserId = String(session?.id);
   const dashboardQuery = useQuery(['dashboard', activeUserId], async () =>
      DashboardServices.getUserInfo(activeUserId)
   );
   return DashboardViewModel.patientsAndAppointmentsList(
      activeUserId,
      dashboardQuery
   );
}
