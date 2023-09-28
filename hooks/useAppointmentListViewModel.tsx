import { useQuery } from 'react-query';
import AppointmentServices from '../services/AppointmentServices';
import IAppointment from '../interfaces/IAppointment';
import { useRouter } from 'next/router';
import { useToast } from '../components/ui/use-toast';
import { useEffect, useState } from 'react';
import SuccessMsg from '../components/parts/SuccessMsg';
import AppointmentViewModel from '../viewmodels/appointmentViewModel/AppointmentsViewModel';
import { useSession } from 'next-auth/react';

export default function useAppointmentListView() {
   const query = useQuery(['appointment'], () => AppointmentServices.getAll());
   const [search, setSearch] = useState<IAppointment[] | null>(null);
   const { data: session } = useSession();
   //@ts-ignore
   const userType = String(session?.type);
   //@ts-ignore
   const activeUserId = String(session?.id);
   const router = useRouter();
   const { toast } = useToast();
   const urlQuery = router.query;
   useEffect(() => {
      if (urlQuery.deleted) {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Compromisso Apagado" />,
            description: (
               <p className="text-cool-gray-500">
                  O compromisso foi apagado com sucesso.
               </p>
            )
         });
      } else if (urlQuery.updated) {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Compromisso Atualizado" />,
            description: (
               <p className="text-cool-gray-500">
                  O compromisso foi atualizado com sucesso.
               </p>
            )
         });
      } else if (urlQuery.saved) {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Compromisso Salvo" />,
            description: (
               <p className="text-cool-gray-500">
                  O compromisso foi salvo com sucesso.
               </p>
            )
         });
      }
   }, [toast, urlQuery]);
   return AppointmentViewModel.listView(
      query,
      search,
      setSearch,
      userType,
      activeUserId
   );
}
