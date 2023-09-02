import { useRouter } from 'next/router';
import FormPageHeader from '../../components/parts/FromPageHeader';
import Menu from '../../components/parts/Menu';
import { useQuery } from 'react-query';
import LoadingWithTitle from '../../components/sections/LoadingWithTitle';
import AppointmentServices from '../../services/AppointmentServices';
import Appointment from '../../entities/Appointment';
import AppointmentDisplay from '../../components/sections/AppointmentDisplay';

export default function EditDocument() {
   const router = useRouter();

   const appointmentId = String(router.query.id);

   const query = useQuery(['appointment', appointmentId], () =>
      AppointmentServices.getById(appointmentId)
   );

   const appointment = query.data && Appointment.createFromObject(query.data);

   return (
      <Menu>
         <FormPageHeader title={'Veja as Informações do Compromisso'} />
         {query.isLoading ? (
            <LoadingWithTitle title="Carregando compromisso..." />
         ) : (
            <AppointmentDisplay appointment={appointment} />
         )}
      </Menu>
   );
}

EditDocument.auth = true;
