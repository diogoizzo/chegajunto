import { useQuery } from 'react-query';
import Menu from '../../components/parts/Menu';
import Appointment from '../../entities/Appointment';
import { useEffect, useState } from 'react';
import AppointmentTable from '../../components/sections/AppointmentTable';
import AppointmentServices from '../../services/AppointmentServices';
import { useRouter } from 'next/router';
import { useToast } from '../../components/ui/use-toast';
import SuccessMsg from '../../components/parts/SuccessMsg';
import LoadingWithTitle from '../../components/sections/LoadingWithTitle';
import AppointmentPageHeader from '../../components/parts/AppointmentPageHeader';
import IAppointment from '../../interfaces/IAppointment';

export default function AppointmentListView<NextPage>() {
   const query = useQuery(['appointment'], () => AppointmentServices.getAll());
   const allAppointment = query.data && Appointment.createMany(query.data);
   const [search, setSearch] = useState<IAppointment[] | null>(null);
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
   return (
      <Menu>
         <AppointmentPageHeader
            title="Compromissos"
            subtitle="Veja a lista completa de compromissos cadastrados no sistema."
            btnHref="/compromissos/novo"
            data={allAppointment}
            setData={setSearch}
         />
         {query.isLoading ? (
            <LoadingWithTitle title="Carregando todos os compromissos..." />
         ) : null}
         {query.isFetched ? (
            allAppointment.length > 0 ? (
               <AppointmentTable data={search ?? allAppointment} />
            ) : (
               <div className="flex w-full justify-center mt-20">
                  <h2 className="text-4xl text-slate-700">
                     Nenhum compromisso encontrado
                  </h2>
               </div>
            )
         ) : null}
      </Menu>
   );
}

AppointmentListView.auth = true;
