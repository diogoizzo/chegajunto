import { useQuery } from 'react-query';
import Menu from '../../components/parts/Menu';
import PageHeader from '../../components/parts/PageHeader';
import Patient from '../../entities/Patient';
import PatientServices from '../../services/PatientServices';
import IPatient from '../../interfaces/IPatient';
import WaitingPatientesTable from '../../components/sections/WaitingPatientesTable';
import { useState } from 'react';

export default function Arquivados<NextPage>() {
   const [search, setSearch] = useState(null);

   const query = useQuery(['patients'], () => PatientServices.getAll());

   const allPatients = query.data && Patient.createMany(query.data);

   const archivedPatients = allPatients?.filter(
      (patient: IPatient) => patient.status === 'Arquivado'
   );

   return (
      <Menu>
         <PageHeader
            title="Pacientes Arquivados"
            subtitle="Veja a lista completa de pacientes arquivados."
            data={archivedPatients}
            setData={setSearch}
         />
         {query.isFetched ? (
            archivedPatients?.length > 0 ? (
               <WaitingPatientesTable data={search ?? archivedPatients} />
            ) : (
               <div className="flex w-full justify-center mt-20">
                  <h2 className="text-4xl text-slate-700">
                     Nenhum paciente arquivado
                  </h2>
               </div>
            )
         ) : null}
      </Menu>
   );
}

Arquivados.auth = true;
