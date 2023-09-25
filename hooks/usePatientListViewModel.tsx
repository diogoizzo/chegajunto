import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useToast } from '../components/ui/use-toast';
import { useQuery } from 'react-query';
import PatientServices from '../services/PatientServices';
import SuccessMsg from '../components/parts/SuccessMsg';
import IPatient from '../interfaces/IPatient';
import PatientViewModel from '../viewModels/patientViewModel/PatientViewModel';
import { useSession } from 'next-auth/react';

export default function usePatientListViewModel() {
   const router = useRouter();

   const urlQuery = router.query;
   const { data: session } = useSession();
   //@ts-ignore
   const userType = String(session?.type);
   //@ts-ignore
   const activeUserId = String(session?.id);

   const [search, setSearch] = useState<IPatient[] | null>(null);

   const { toast } = useToast();

   const query = useQuery(['patients'], () => PatientServices.getAll());

   useEffect(() => {
      if (urlQuery.deleted) {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Paciente Arquivado" />,
            description: (
               <p className="text-cool-gray-500">
                  O paciente foi arquivado com sucesso.
               </p>
            )
         });
      } else if (urlQuery.updated) {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Paciente Atualizado" />,
            description: (
               <p className="text-cool-gray-500">
                  O paciente foi atualizado com sucesso.
               </p>
            )
         });
      }
   }, [toast, urlQuery]);
   return PatientViewModel.listView(
      query,
      search,
      setSearch,
      userType,
      activeUserId
   );
}
