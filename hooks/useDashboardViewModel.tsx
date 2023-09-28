import { useSession } from 'next-auth/react';
import { useQuery } from 'react-query';
import DashboardServices from '../services/DashboardServices';
import DashboardViewModel from '../viewmodels/dashboardViewModel/DashboardViewModel';

export default function useDashboardViewModel() {
   const { data: session } = useSession();
   //@ts-ignore
   const activeUserId = String(session?.id);
   console.log(session);
   const dashboardQuery = useQuery(['dashboard', activeUserId], async () =>
      DashboardServices.getUserInfo(activeUserId)
   );
   console.log(dashboardQuery);
   return DashboardViewModel.patientsAndAppointmentsList(
      activeUserId,
      dashboardQuery
   );
}
