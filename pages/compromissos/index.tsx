import Menu from '../../components/parts/Menu';
import AppointmentTable from '../../components/sections/AppointmentTable';
import LoadingWithTitle from '../../components/sections/LoadingWithTitle';
import AppointmentPageHeader from '../../components/parts/AppointmentPageHeader';
import useAppointmentListViewModel from '../../hooks/useAppointmentListViewModel';

export default function AppointmentListView<NextPage>() {
   const viewModel = useAppointmentListViewModel();
   return (
      <Menu>
         {viewModel.userType === 'Psicólogo' ? (
            <AppointmentPageHeader
               title="Compromissos"
               subtitle="Veja a lista completa de compromissos cadastrados no sistema."
               btnHref="/compromissos/novo"
               data={viewModel?.allAppointment}
               setData={viewModel.setSearch}
            />
         ) : (
            <AppointmentPageHeader
               title="Compromissos"
               subtitle="Veja a lista completa de compromissos cadastrados no sistema."
               data={viewModel?.allAppointment}
               setData={viewModel.setSearch}
            />
         )}

         {viewModel.query.isLoading ? (
            <LoadingWithTitle title="Carregando todos os compromissos..." />
         ) : null}
         {viewModel.query.isFetched ? (
            viewModel.allAppointment && viewModel.allAppointment.length > 0 ? (
               <AppointmentTable
                  data={viewModel.search ?? viewModel.allAppointment}
               />
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
