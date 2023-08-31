import { useRouter } from 'next/router';
import FormPageHeader from '../../../components/parts/FromPageHeader';
import Menu from '../../../components/parts/Menu';
import { useQuery } from 'react-query';
import DocumentServices from '../../../services/DocumentServices';
import Document from '../../../entities/Document';
import DocumentForm from '../../../components/sections/DocumentForm';
import LoadingWithTitle from '../../../components/sections/LoadingWithTitle';
import AppointmentForm from '../../../components/sections/AppointmentForm';
import AppointmentServices from '../../../services/AppointmentServices';
import Appointment from '../../../entities/Appointment';

export default function EditDocument() {
   const router = useRouter();

   const appointmentId = String(router.query.id);

   const query = useQuery(['appointment', appointmentId], () =>
      AppointmentServices.getById(appointmentId)
   );

   const appointment = query.data && Appointment.createFromObject(query.data);

   return (
      <Menu>
         <FormPageHeader title={'Edite as Informações do Compromisso'} />
         {query.isLoading ? (
            <LoadingWithTitle title="Carregando compromisso..." />
         ) : (
            <AppointmentForm appointment={appointment} />
         )}
      </Menu>
   );
}

EditDocument.auth = true;
