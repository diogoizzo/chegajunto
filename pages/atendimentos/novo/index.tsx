import FormPageHeader from '../../../components/parts/FromPageHeader';
import Menu from '../../../components/parts/Menu';
import ConsultationForm from '../../../components/sections/ConsultationForm';

export default function Atendimentos<NextPage>() {
   return (
      <Menu>
         <FormPageHeader
            title="Novo Atendimento"
            subtitle="Preencha as informações do novo atendimento"
         />
         <ConsultationForm />
      </Menu>
   );
}

Atendimentos.auth = true;
