import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useToast } from '../components/ui/use-toast';
import UserServices from '../services/UserServices';
import IUser from '../interfaces/IUser';
import SuccessMsg from '../components/parts/SuccessMsg';
import UserViewModel from '../viewModels/userViewModel/UserViewModel';

export default function useUserListViewModel() {
   const router = useRouter();

   const [search, setSearch] = useState<IUser[] | null>(null);

   const urlQuery = router.query;

   const usersQuery = useQuery(['users'], () => UserServices.getAll());

   const { toast } = useToast();

   useEffect(() => {
      if (urlQuery.saved) {
         toast({
            // @ts-expect-error
            // eslint-disable-next-line react/jsx-no-undef
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
   return UserViewModel.listView(search, setSearch, urlQuery, usersQuery);
}
