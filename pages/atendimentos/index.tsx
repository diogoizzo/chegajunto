import Menu from '../../components/parts/Menu';
import ConsultationTable from '../../components/sections/ConsultationTable';
import ConsultationPageHeader from '../../components/parts/ConsultationPageHeader';
import LoadingWithTitle from '../../components/sections/LoadingWithTitle';
import useConsultationListViewModel from '../../hooks/useConsultationListViewModel';

export default function ConsultationListView<NextPage>() {
   const listViewModel = useConsultationListViewModel();

   return (
      <Menu>
         <ConsultationPageHeader
            title="Atendimentos"
            subtitle="Veja a lista completa de atendimentos cadastrados no sistema."
            btnHref="/atendimentos/novo"
            data={listViewModel.consultations}
            setData={listViewModel.setSearch}
         />
         {listViewModel.consultationQuery.isLoading ? (
            <LoadingWithTitle title="Carregando Atendimentos..." />
         ) : listViewModel.search?.length === 0 ||
           listViewModel.consultations?.length === 0 ? (
            <div className="flex w-full justify-center mt-20">
               <h2 className="text-4xl text-slate-700">
                  Nenhum atendimento encontrado
               </h2>
            </div>
         ) : (
            <ConsultationTable
               data={listViewModel.search ?? listViewModel.consultations}
            />
         )}
      </Menu>
   );
}

ConsultationListView.auth = true;
