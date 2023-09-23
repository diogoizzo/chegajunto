import FormPageHeader from '../../components/parts/FromPageHeader';
import Menu from '../../components/parts/Menu';
import LoadingWithTitle from '../../components/sections/LoadingWithTitle';
import AppointmentDisplay from '../../components/sections/AppointmentDisplay';
import useAppointmentDisplayViewModel from '../../hooks/useAppointmentDisplayViewModel';

export default function AppointmentDisplayView() {
   const viewModel = useAppointmentDisplayViewModel();

   return (
      <Menu>
         <FormPageHeader title={'Veja as Informações do Compromisso'} />
         {viewModel.query.isLoading ? (
            <LoadingWithTitle title="Carregando compromisso..." />
         ) : (
            <AppointmentDisplay appointment={viewModel.appointment} />
         )}
      </Menu>
   );
}

AppointmentDisplayView.auth = true;
