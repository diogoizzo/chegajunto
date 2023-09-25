import Menu from '../../components/parts/Menu';
import PageHeader from '../../components/parts/PageHeader';
import WaitingPatientesTable from '../../components/sections/WaitingPatientesTable';
import useArchiveViewModel from '../../hooks/useArchiveViewModel';

export default function Arquivados<NextPage>() {
   const viewModel = useArchiveViewModel();

   return (
      <Menu>
         <PageHeader
            title="Pacientes Arquivados"
            subtitle="Veja a lista completa de pacientes arquivados."
            data={viewModel.archivedPatients}
            setData={viewModel.setSearch}
         />
         {viewModel.query.isFetched ? (
            viewModel.archivedPatients?.length > 0 ? (
               <WaitingPatientesTable
                  data={viewModel.search ?? viewModel.archivedPatients}
               />
            ) : (
               <div className="flex w-full justify-center mt-20">
                  <h2 className="text-4xl text-slate-700">
                     Nenhum paciente arquivado
                  </h2>
               </div>
            )
         ) : null}
      </Menu>
   );
}

Arquivados.auth = true;
