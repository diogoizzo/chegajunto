import Menu from '../../components/parts/Menu';
import PageHeader from '../../components/parts/PageHeader';
import PatientesTable from '../../components/sections/PatientesTable';

export default function Pacientes<NextPage>() {
   return (
      <Menu>
         <PageHeader
            title="Pacientes"
            subtitle="Veja a lista completa de pacientes cadastrados no sistema."
            btnHref="/"
         />
         <PatientesTable />
      </Menu>
   );
}

Pacientes.auth = true;
