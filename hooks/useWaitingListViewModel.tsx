import { useState } from 'react';
import { useQuery } from 'react-query';
import PatientServices from '../services/PatientServices';
import Patient from '../entities/Patient';
import PatientViewModel from '../viewModels/patientViewModel/PatientViewModel';
import { useSession } from 'next-auth/react';

export default function useWaitingListViewModel() {
   const { data: session } = useSession();
   //@ts-ignore
   const userType = String(session?.type);
   //@ts-ignore
   const activeUserId = String(session?.id);

   const [search, setSearch] = useState<Patient[] | null>(null);

   const query = useQuery(['patients'], () => PatientServices.getAll());

   return PatientViewModel.waitingList(
      query,
      search,
      setSearch,
      userType,
      activeUserId
   );
}
