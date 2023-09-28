import { useState } from 'react';
import { useQuery } from 'react-query';
import PatientServices from '../services/PatientServices';
import { useSession } from 'next-auth/react';
import Patient from '../entities/Patient';
import PatientViewModel from '../viewmodels/patientViewModel/PatientViewModel';

export default function useArchiveViewModel() {
   const [search, setSearch] = useState<Patient[] | null>(null);

   const query = useQuery(['patients'], () => PatientServices.getAll());

   const { data: session } = useSession();
   //@ts-ignore
   const userType = String(session?.type);
   //@ts-ignore
   const activeUserId = String(session?.id);
   return PatientViewModel.archiveView(
      query,
      search,
      setSearch,
      userType,
      activeUserId
   );
}
