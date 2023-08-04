import { useRouter } from 'next/router';
import FormPageHeader from '../../../components/parts/FromPageHeader';
import Menu from '../../../components/parts/Menu';
import { useQuery } from 'react-query';
import Patient from '../../../entities/Patient';
import PatientServices from '../../../services/PatientServices';
import PatientForm from '../../../components/sections/PatientForm';

export default function EditPatient() {
   const router = useRouter();

   const patientId = router.query.id;

   const query = useQuery(['user', patientId], () =>
      PatientServices.getById(patientId)
   );

   const patient = query.data && Patient.createFromObject(query.data);

   return (
      <Menu>
         <FormPageHeader
            title={patient?.name}
            subtitle="Edite as informações do paciente acima."
         />
         {patient ? <PatientForm patient={patient} /> : null}
      </Menu>
   );
}

EditPatient.auth = true;
