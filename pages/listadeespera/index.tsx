import { useQuery } from 'react-query';
import Menu from '../../components/parts/Menu';
import PageHeader from '../../components/parts/PageHeader';
import Patient from '../../entities/Patient';
import PatientServices from '../../services/PatientServices';
import IPatient from '../../interfaces/IPatient';
import { useState } from 'react';
import Loading from '../../components/sections/loading';
import WaitingPatientesTable from '../../components/sections/WaitingPatientesTable';
import dayjs from 'dayjs';

export default function Espera<NextPage>() {
   const [search, setSearch] = useState(null);

   const query = useQuery(['patients'], () => PatientServices.getAll());

   const allPatients = query.data && Patient.createMany(query.data);

   const waitingPatients = allPatients?.filter(
      (patient: IPatient) => patient.status === 'Espera'
   );

   return (
      <Menu>
         <PageHeader
            title="Lista de Espera"
            subtitle="Veja a lista de pacientes em espera."
            data={waitingPatients}
            setData={setSearch}
         />
         {query.isLoading ? (
            <Loading />
         ) : (
            <WaitingPatientesTable data={search ?? waitingPatients} />
         )}
      </Menu>
   );
}

Espera.auth = true;
