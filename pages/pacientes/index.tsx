import Menu from '../../components/parts/Menu';
import PageHeader from '../../components/parts/PageHeader';
import PatientesTable from '../../components/sections/PatientesTable';
import Loading from '../../components/sections/loading';
import usePatientListViewModel from '../../hooks/usePatientListViewModel';

export default function PatientListView<NextPage>() {
   const viewModel = usePatientListViewModel();

   return (
      <Menu>
         <PageHeader
            title="Pacientes"
            subtitle="Veja a lista completa de pacientes cadastrados no sistema."
            btnHref="/pacientes/novo"
            data={viewModel.activePatients}
            setData={viewModel.setSearch}
         />
         {viewModel.query.isLoading ? null : (
            <PatientesTable
               data={viewModel.search ?? viewModel.activePatients}
            />
         )}
      </Menu>
   );
}

PatientListView.auth = true;
