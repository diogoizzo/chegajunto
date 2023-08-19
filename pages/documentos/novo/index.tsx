import FormPageHeader from '../../../components/parts/FromPageHeader';
import Menu from '../../../components/parts/Menu';
import DocumentForm from '../../../components/sections/DocumentForm';

export default function NovoDocumento<NextPage>() {
   return (
      <Menu>
         <FormPageHeader
            title={'Novo Documento'}
            subtitle="Preencha as informações do novo documento."
         />
         <DocumentForm />
      </Menu>
   );
}

NovoDocumento.auth = true;
