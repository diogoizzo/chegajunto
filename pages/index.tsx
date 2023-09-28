import PageHeaderJustTitle from '../components/parts/DashboardPageHeader';
import Menu from '../components/parts/Menu';
import AppointmentTable from '../components/sections/AppointmentTable';
import DashboardChart from '../components/sections/DashboardChart';
import LoadingWithTitle from '../components/sections/LoadingWithTitle';
import PatientesTable from '../components/sections/PatientesTable';
import useDashboardViewModel from '../hooks/useDashboardViewModel';

export default function Dashboard<NextPage>() {
   const viewModel = useDashboardViewModel();
   return (
      <Menu>
         <PageHeaderJustTitle title="Dashboard" />
         <DashboardChart
            patientsCreatedThisMonth={viewModel?.patientsCreatedThisMonth}
            patientsArchivedThisMonth={viewModel?.patientsArchivedThisMonth}
            consultationsThisMonth={viewModel?.consultationsThisMonth}
            absentsThisMonth={viewModel?.absentsThisMonth}
            newDocumentsThisMonth={viewModel?.newDocumentsThisMonth}
         />
         {viewModel.dashboardQuery?.isLoading ? (
            <LoadingWithTitle title="Carregando Dashboard" />
         ) : (
            <>
               <PageHeaderJustTitle title="Compromissos" />
               {viewModel.userAppointments?.length > 0 ? (
                  <AppointmentTable data={viewModel.userAppointments} />
               ) : (
                  <div className="w-full text-lg text-center mt-10 text-cool-gray-900">
                     Você não possui nenhum compromisso cadastrado.
                  </div>
               )}
               {/* <AppointmentTable data={viewModel.userAppointments} /> */}
               <PageHeaderJustTitle title="Pacientes" />
               {viewModel.userPatients?.length > 0 ? (
                  <PatientesTable data={viewModel.userPatients} />
               ) : (
                  <div className="w-full text-lg text-center mt-10 pb-20 text-cool-gray-900">
                     Você não possui nenhum paciente cadastrado.
                  </div>
               )}
            </>
         )}
      </Menu>
   );
}

Dashboard.auth = true;
