import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import PatientServices from '../services/PatientServices';
import { useToast } from '../components/ui/use-toast';
import { useEffect } from 'react';
import SuccessMsg from '../components/parts/SuccessMsg';
import PatientViewModel from '../viewmodels/patientViewModel/PatientViewModel';

export default function usePatientDisplayModel() {
   const router = useRouter();

   const urlQuery = router.query;

   const patientId = router.query.id;

   const query = useQuery(['patient', patientId], () =>
      PatientServices.getById(patientId)
   );

   const { toast } = useToast();

   useEffect(() => {
      if (urlQuery.saved) {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Novo Paciente Criado" />,
            description: (
               <p className="text-cool-gray-500">
                  O novo paciente foi salvo no banco de dados com sucesso.
               </p>
            )
         });
      }
      if (urlQuery.documentSaved) {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Novo Documento Salvo" />,
            description: (
               <p className="text-cool-gray-500">
                  O novo documento foi salvo no banco de dados com sucesso.
               </p>
            )
         });
      }
   }, [toast, urlQuery]);
   return PatientViewModel.displayView(query);
}
