import Menu from '../../components/parts/Menu';
import LoadingWithTitle from '../../components/sections/LoadingWithTitle';
import ConsultationDisplay from '../../components/sections/ConsultationDisplay';
import PageHeader from '../../components/parts/PageHeader';
import useConsultationDisplayViewModel from '../../hooks/useConsultationDisplayViewModel';
import dayjs from 'dayjs';

export default function AppointmentDisplayView() {
   const viewModel = useConsultationDisplayViewModel();

   return (
      <Menu>
         <PageHeader
            title={`${dayjs(viewModel.consultation?.createdAt).format(
               'DD/MM/YYYY'
            )} - ${viewModel?.consultation?.patient?.name}`}
            btnHref={viewModel.consultation?.consultationEditLink}
            btnText="Editar"
            search={false}
         />
         {viewModel.consultationQuery.isLoading ? null : (
            <ConsultationDisplay consultation={viewModel.consultation} />
         )}
      </Menu>
   );
}

AppointmentDisplayView.auth = true;
