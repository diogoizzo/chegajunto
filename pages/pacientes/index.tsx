import { useQuery } from 'react-query';
import Menu from '../../components/parts/Menu';
import PageHeader from '../../components/parts/PageHeader';
import PatientesTable from '../../components/sections/PatientesTable';
import Patient from '../../entities/Patient';
import PatientServices from '../../services/PatientServices';

export default function Pacientes<NextPage>() {
   const query = useQuery(['patient'], () => PatientServices.getAll());

   const patients = query.data && Patient.createMany(query.data);

   return (
      <Menu>
         <PageHeader
            title="Pacientes"
            subtitle="Veja a lista completa de pacientes cadastrados no sistema."
            btnHref="/"
         />
         {query.isLoading ? (
            'Carregando...'
         ) : (
            <PatientesTable data={patients} />
         )}
      </Menu>
   );
}

Pacientes.auth = true;
