import { useRouter } from 'next/router';
import Menu from '../../components/parts/Menu';
import Patient from '../../entities/Patient';
import { useQuery } from 'react-query';
import SuccessMsg from '../../components/parts/SuccessMsg';
import PageHeader from '../../components/parts/PageHeader';
import PatientDisplay from '../../components/sections/PatientDisplay';
import PatientServices from '../../services/PatientServices';
import { useEffect } from 'react';
import { useToast } from '../../components/ui/use-toast';
import IAvailability from '../../interfaces/IAvailability';

export default function PatientView() {
   const router = useRouter();

   const urlQuery = router.query;

   const patientId = router.query.id;

   const query = useQuery(['patient', patientId], () =>
      PatientServices.getById(patientId)
   );

   const patient = query.data && Patient.createFromObject(query.data);
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

   return (
      <Menu>
         <PageHeader
            title={patient?.name}
            subtitle="Veja as informações do paciente acima."
            btnText="Editar"
            search={false}
            btnHref={patient?.patientEditLink || '/'}
         />
         <PatientDisplay patient={patient} />
      </Menu>
   );
}

PatientView.auth = true;
