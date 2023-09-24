import Menu from '../../components/parts/Menu';
import PageHeader from '../../components/parts/PageHeader';
import PatientDisplay from '../../components/sections/PatientDisplay';
import usePatientDisplayModel from '../../hooks/usePatientDisplayModel';

export default function PatientDisplayView() {
   const viewModel = usePatientDisplayModel();

   return (
      <Menu>
         <PageHeader
            title={viewModel.patient?.name}
            subtitle="Veja as informações do paciente acima."
            btnText="Editar"
            search={false}
            btnHref={viewModel.patient?.patientEditLink || '/'}
         />
         <PatientDisplay patient={viewModel.patient} />
      </Menu>
   );
}

PatientDisplayView.auth = true;
