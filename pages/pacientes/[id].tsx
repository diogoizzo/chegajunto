import { useRouter } from 'next/router';
import Menu from '../../components/parts/Menu';
import Patient from '../../entities/Patient';
import { useQuery } from 'react-query';

import PageHeader from '../../components/parts/PageHeader';
import PatientDisplay from '../../components/sections/PatientDisplay';
import PatientServices from '../../services/PatientServices';

export default function VizualizarPaciente() {
   const router = useRouter();

   const patientId = router.query.id;

   const query = useQuery(['patient', patientId], () =>
      PatientServices.getById(patientId)
   );

   const patient = query.data && Patient.createFromObject(query.data);

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

VizualizarPaciente.auth = true;
