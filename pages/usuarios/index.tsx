import { useEffect, useState } from 'react';
import Menu from '../../components/parts/Menu';
import PageHeader from '../../components/parts/PageHeader';
import UserTable from '../../components/sections/UserTable';
import UserServices from '../../services/UserServices';
import User from '../../entities/User';
import { useToast } from '../../components/ui/use-toast';
import { useRouter } from 'next/router';
import SuccessMsg from '../../components/parts/SuccessMsg';

export default function Usuarios<NextPage>() {
   const [users, setUsers] = useState<User[]>([]);
   const router = useRouter();

   const urlQuery = router.query;

   const { toast } = useToast();

   useEffect(() => {
      UserServices.getAll().then((data) => data && setUsers(data));
   }, []);
   useEffect(() => {
      if (urlQuery.saved) {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Novo Usuário Criado" />,
            description: (
               <p className="text-cool-gray-500">
                  O novo usuário foi salvo no banco de dados com sucesso.
               </p>
            )
         });
      } else if (urlQuery.deleted) {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Usuário Apagado" />,
            description: (
               <p className="text-cool-gray-500">
                  O usuário foi deletado com sucesso.
               </p>
            )
         });
      } else if (urlQuery.updated) {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Usuário Atualizado" />,
            description: (
               <p className="text-cool-gray-500">
                  O usuário foi atualizado com sucesso.
               </p>
            )
         });
      }
   }, [toast, urlQuery]);
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
