import FormPageHeader from '../../components/parts/FromPageHeader';
import UserForm from '../../components/sections/UserForm';
import Menu from '../../components/parts/Menu';

export default function SignUp() {
   return (
      <Menu>
         <FormPageHeader
            title="Novo Usuário"
            subtitle="Preencha as informações abaixo para cadastrar um novo usuário no sistema."
         />
         <UserForm />
      </Menu>
   );
}
SignUp.auth = false;
