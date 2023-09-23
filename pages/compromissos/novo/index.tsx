import FormPageHeader from '../../../components/parts/FromPageHeader';
import Menu from '../../../components/parts/Menu';
import AppointmentForm from '../../../components/sections/AppointmentForm';
import DocumentForm from '../../../components/sections/DocumentForm';

export default function AppointmentCreateView<NextPage>() {
   return (
      <Menu>
         <FormPageHeader
            title={'Novo Compromisso'}
            subtitle="Preencha as informações do novo compromisso."
         />
         <AppointmentForm />
      </Menu>
   );
}

AppointmentCreateView.auth = true;
