import { useRouter } from 'next/router';
import FormPageHeader from '../../../components/parts/FromPageHeader';
import Menu from '../../../components/parts/Menu';
import UserForm from '../../../components/sections/UserForm';
import { useQuery } from 'react-query';
import UserServices from '../../../services/UserServices';
import User from '../../../entities/User';

export default function EditUser() {
   const router = useRouter();

   const userId = router.query.id;

   const query = useQuery(['user', userId], () => UserServices.getById(userId));

   const user = query.data && User.createFormObject(query.data);

   return (
      <Menu>
         <FormPageHeader
            title={user?.name}
            subtitle="Edite as informações do usuário acima."
         />
         {user ? <UserForm user={user} /> : null}
      </Menu>
   );
}

EditUser.auth = true;
