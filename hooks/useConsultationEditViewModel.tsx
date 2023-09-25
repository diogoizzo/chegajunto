import { useQuery } from 'react-query';
import ConsultationServices from '../services/ConsultationServices';
import { useRouter } from 'next/router';
import ConsultationViewModel from '../viewModels/consultationViewModel/ConsultationViewModel';

export default function useConsultationEditViewModel() {
   const router = useRouter();

   const consultationId = String(router.query.id);

   const query = useQuery(['consultation', consultationId], () =>
      ConsultationServices.getById(consultationId)
   );
   return ConsultationViewModel.editView(query);
}
