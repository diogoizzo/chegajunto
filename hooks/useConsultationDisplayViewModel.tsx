import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import ConsultationServices from '../services/ConsultationServices';
import ConsultationViewModel from '../viewModels/consultationViewModel/ConsultationViewModel';

export default function useConsultationDisplayViewModel() {
   const router = useRouter();

   const consultationId = String(router.query.id);

   const consultationQuery = useQuery(['consultation', consultationId], () =>
      ConsultationServices.getById(consultationId)
   );
   return ConsultationViewModel.displayView(consultationId, consultationQuery);
}
