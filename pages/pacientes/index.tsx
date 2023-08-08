import { useQuery } from 'react-query';
import Menu from '../../components/parts/Menu';
import PageHeader from '../../components/parts/PageHeader';
import PatientesTable from '../../components/sections/PatientesTable';
import Patient from '../../entities/Patient';
import PatientServices from '../../services/PatientServices';
import IPatient from '../../interfaces/IPatient';
import { useRouter } from 'next/router';
import { useToast } from '../../components/ui/use-toast';
import { useEffect } from 'react';
import SuccessMsg from '../../components/parts/SuccessMsg';
import Loading from '../../components/sections/loading';

export default function Pacientes<NextPage>() {
   const router = useRouter();

   const urlQuery = router.query;

   const { toast } = useToast();

   console.log(urlQuery);

   const query = useQuery(['patient'], () => PatientServices.getAll());

   const allPatients = query.data && Patient.createMany(query.data);

   const activePatients = allPatients?.filter(
      (patient: IPatient) =>
         patient.status === 'Ativo' || patient.status === 'Espera'
   );

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
      } else if (urlQuery.deleted) {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Paciente Arquivado" />,
            description: (
               <p className="text-cool-gray-500">
                  O paciente foi arquivado com sucesso.
               </p>
            )
         });
      } else if (urlQuery.updated) {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Paciente Atualizado" />,
            description: (
               <p className="text-cool-gray-500">
                  O paciente foi atualizado com sucesso.
               </p>
            )
         });
      }
   }, [toast, urlQuery]);

   return (
      <Menu>
         <PageHeader
            title="Pacientes"
            subtitle="Veja a lista completa de pacientes cadastrados no sistema."
            btnHref="/pacientes/novo"
         />
         {query.isLoading ? (
            <Loading />
         ) : (
            <PatientesTable data={activePatients} />
         )}
      </Menu>
   );
}

Pacientes.auth = true;
