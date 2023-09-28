import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import PatientServices from '../services/PatientServices';
import PatientViewModel from '../viewmodels/patientViewModel/PatientViewModel';

export default function usePatientEditViewModel() {
   const router = useRouter();

   const patientId = router.query.id;

   const query = useQuery(['patient', patientId], () =>
      PatientServices.getById(patientId)
   );
   return PatientViewModel.edit(query);
}
