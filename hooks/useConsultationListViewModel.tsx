import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import IConsultation from '../interfaces/IConsultation';
import { useToast } from '../components/ui/use-toast';
import { useQuery } from 'react-query';
import ConsultationServices from '../services/ConsultationServices';
import SuccessMsg from '../components/parts/SuccessMsg';
import AppointmentViewModel from '../viewModels/consultationViewModel/ConsultationViewModel';

export default function useAppointmentListViewModel() {
   const router = useRouter();

   const urlQuery = router.query;

   const [search, setSearch] = useState<IConsultation[] | null>(null);

   const { toast } = useToast();

   const consultationQuery = useQuery(['consultations'], () =>
      ConsultationServices.getAll()
   );
   useEffect(() => {
      if (urlQuery.deleted) {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Atendimento Apagado" />,
            description: (
               <p className="text-cool-gray-500">
                  O atendimento foi apagado com sucesso.
               </p>
            )
         });
      } else if (urlQuery.saved) {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Atendimento Criado" />,
            description: (
               <p className="text-cool-gray-500">
                  O atendimento foi criado com sucesso.
               </p>
            )
         });
      } else if (urlQuery.updated) {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Atendimento Atualizado" />,
            description: (
               <p className="text-cool-gray-500">
                  O atendimento foi atualizado com sucesso.
               </p>
            )
         });
      }
   }, [toast, urlQuery]);
   return AppointmentViewModel.listView(
      urlQuery,
      search,
      setSearch,
      consultationQuery
   );
}
