import { useEffect, useState } from 'react';
import Menu from '../../components/parts/Menu';
import PageHeader from '../../components/parts/PageHeader';
import UserTable from '../../components/sections/UserTable';
import UserServices from '../../services/UserServices';
import User from '../../entities/User';

export default function Usuarios<NextPage>() {
   const [users, setUsers] = useState<User[]>([]);

   useEffect(() => {
      UserServices.getAll().then((data) => data && setUsers(data));
   }, []);
   return (
      <Menu>
         <PageHeader
            title="Usuários"
            subtitle="Veja todos os usuários cadastrados no sistema."
            btnHref="/auth/signup"
         />
         <UserTable data={users} />
      </Menu>
   );
}

Usuarios.auth = true;
