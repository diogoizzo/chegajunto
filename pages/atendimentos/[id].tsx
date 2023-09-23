import { useRouter } from 'next/router';
import Menu from '../../components/parts/Menu';
import { useQuery } from 'react-query';
import LoadingWithTitle from '../../components/sections/LoadingWithTitle';
import ConsultationServices from '../../services/ConsultationServices';
import Consultation from '../../entities/Consultation';
import ConsultationDisplay from '../../components/sections/ConsultationDisplay';
import PageHeader from '../../components/parts/PageHeader';
import useConsultationDisplayViewModel from '../../hooks/useConsultationDisplayViewModel';

export default function AppointmentDisplayView() {
   const viewModel = useConsultationDisplayViewModel();

   return (
      <Menu>
         <PageHeader
            title={'Veja as Informações do Atendimento'}
            btnHref={viewModel.consultation?.consultationEditLink}
            btnText="Editar"
            search={false}
         />
         {viewModel.consultationQuery.isLoading ? (
            <LoadingWithTitle title="Carregando atendimento..." />
         ) : (
            <ConsultationDisplay consultation={viewModel.consultation} />
         )}
      </Menu>
   );
}

AppointmentDisplayView.auth = true;
