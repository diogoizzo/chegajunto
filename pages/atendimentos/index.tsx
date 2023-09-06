import { useQuery } from 'react-query';
import Menu from '../../components/parts/Menu';
import PageHeader from '../../components/parts/PageHeader';
import PatientesTable from '../../components/sections/PatientesTable';
import Patient from '../../entities/Patient';
import PatientServices from '../../services/PatientServices';
import IPatient from '../../interfaces/IPatient';
import { useRouter } from 'next/router';
import { useToast } from '../../components/ui/use-toast';
import { useEffect, useState } from 'react';
import SuccessMsg from '../../components/parts/SuccessMsg';
import Loading from '../../components/sections/loading';
import ConsultationServices from '../../services/ConsultationServices';
import Consultation from '../../entities/Consultation';
import ConsultationTable from '../../components/sections/ConsultationTable';
import AppointmentPageHeader from '../../components/parts/AppointmentPageHeader';
import ConsultationPageHeader from '../../components/parts/ConsultationPageHeader';
import IConsultation from '../../interfaces/IConsultation';
import LoadingWithTitle from '../../components/sections/LoadingWithTitle';

export default function Atendimentos<NextPage>() {
   const router = useRouter();

   const urlQuery = router.query;

   const [search, setSearch] = useState<IConsultation[] | null>(null);

   const { toast } = useToast();

   const consultationQuery = useQuery(['consultations'], () =>
      ConsultationServices.getAll()
   );

   const consultation =
      consultationQuery.data && Consultation.createMany(consultationQuery.data);

   useEffect(() => {
      if (urlQuery.deleted) {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Atendimento Apagado" />,
            description: (
               <p className="text-cool-gray-500">
                  O atendimento foi apagado com sucesso.
               </p>
            )
         });
      } else if (urlQuery.saved) {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Atendimento Criado" />,
            description: (
               <p className="text-cool-gray-500">
                  O atendimento foi criado com sucesso.
               </p>
            )
         });
      } else if (urlQuery.updated) {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Atendimento Atualizado" />,
            description: (
               <p className="text-cool-gray-500">
                  O atendimento foi atualizado com sucesso.
               </p>
            )
         });
      }
   }, [toast, urlQuery]);

   return (
      <Menu>
         <ConsultationPageHeader
            title="Atendimentos"
            subtitle="Veja a lista completa de atendimentos cadastrados no sistema."
            btnHref="/atendimentos/novo"
            data={consultation}
            setData={setSearch}
         />
         {consultationQuery.isLoading ? (
            <LoadingWithTitle title="Carregando Atendimentos..." />
         ) : search?.length === 0 || consultation.length === 0 ? (
            <div className="flex w-full justify-center mt-20">
               <h2 className="text-4xl text-slate-700">
                  Nenhum atendimento encontrado
               </h2>
            </div>
         ) : (
            <ConsultationTable data={search ?? consultation} />
         )}
      </Menu>
   );
}

Atendimentos.auth = true;
