import { useRouter } from 'next/router';
import Menu from '../../components/parts/Menu';
import PageHeader from '../../components/parts/PageHeader';
import UserDisplay from '../../components/sections/UserDisplay';
import { useQuery } from 'react-query';
import UserServices from '../../services/UserServices';
import User from '../../entities/User';

export default function Usuarios<NextPage>() {
   //TODO Aqui eu posso melhorar para reduzir o número de chamadas ao servidor, fazendo uma query de todos os usuários e depois recuperando esses usuários e filtrando o usuário que foi passado como parâmetro
   const router = useRouter();

   const userId = router.query.id;

   const query = useQuery(['user', userId], () => UserServices.getById(userId));

   const user = User.createFormObject(query.data);

   return (
      <Menu>
         <PageHeader
            title={user?.name}
            subtitle="Veja as informações do usuário acima."
            btnText="Editar"
            search={false}
            btnHref={user?.userEditLink || '/'}
         />
         <UserDisplay user={user} />
      </Menu>
   );
}

Usuarios.auth = true;
