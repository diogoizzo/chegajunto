import { useRouter } from 'next/router';
import Menu from '../../components/parts/Menu';
import { useQuery } from 'react-query';
import LoadingWithTitle from '../../components/sections/LoadingWithTitle';
import ConsultationServices from '../../services/ConsultationServices';
import Consultation from '../../entities/Consultation';
import ConsultationDisplay from '../../components/sections/ConsultationDisplay';
import PageHeader from '../../components/parts/PageHeader';
import IConsultation from '../../interfaces/IConsultation';

export default function VizualizarAtendimento() {
   const router = useRouter();

   const consultationId = String(router.query.id);

   const consultationQuery = useQuery(['consultation', consultationId], () =>
      ConsultationServices.getById(consultationId)
   );

   const consultation: IConsultation =
      consultationQuery.data &&
      Consultation.createFromObject(consultationQuery.data);

   return (
      <Menu>
         <PageHeader
            title={'Veja as Informações do Atendimento'}
            btnHref={consultation?.consultationEditLink}
            btnText="Editar"
            search={false}
         />
         {consultationQuery.isLoading ? (
            <LoadingWithTitle title="Carregando atendimento..." />
         ) : (
            <ConsultationDisplay consultation={consultation} />
         )}
      </Menu>
   );
}

VizualizarAtendimento.auth = true;
