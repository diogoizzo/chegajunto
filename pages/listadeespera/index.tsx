import Menu from '../../components/parts/Menu';
import PageHeader from '../../components/parts/PageHeader';
import Loading from '../../components/sections/loading';
import WaitingPatientesTable from '../../components/sections/WaitingPatientesTable';
import useWaitingListViewModel from '../../hooks/useWaitingListViewModel';

export default function Espera<NextPage>() {
   const viewModel = useWaitingListViewModel();

   return (
      <Menu>
         <PageHeader
            title="Lista de Espera"
            subtitle="Veja a lista de pacientes em espera."
            data={viewModel.waitingPatients}
            setData={viewModel.setSearch}
         />
         {viewModel.query.isLoading ? (
            <Loading />
         ) : (
            <WaitingPatientesTable
               data={viewModel.search ?? viewModel.waitingPatients}
            />
         )}
      </Menu>
   );
}

Espera.auth = true;
