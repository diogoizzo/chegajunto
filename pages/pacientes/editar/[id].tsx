import FormPageHeader from '../../../components/parts/FromPageHeader';
import Menu from '../../../components/parts/Menu';
import PatientForm from '../../../components/sections/PatientForm';
import usePatientEditViewModel from '../../../hooks/usePatientEditViewModel';

export default function PatientEditView() {
   const viewModel = usePatientEditViewModel();

   return (
      <Menu>
         <FormPageHeader
            title={viewModel.patient?.name}
            subtitle="Edite as informações do paciente acima."
         />
         {viewModel.patient ? (
            <PatientForm patient={viewModel.patient} />
         ) : null}
      </Menu>
   );
}

PatientEditView.auth = true;
