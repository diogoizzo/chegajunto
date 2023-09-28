import { useSession } from 'next-auth/react';
import { useQuery } from 'react-query';
import UserServices from '../services/UserServices';
import UserViewModel from '../viewmodels/userViewModel/UserViewModel';

export default function useUserProfileEditViewModel() {
   const { data: session } = useSession();
   //@ts-ignore
   const activeUserId = session?.id;

   const activeUserQuery = useQuery(['user', activeUserId], () =>
      UserServices.getById(activeUserId)
   );
   return UserViewModel.ProfileEdit(activeUserQuery);
}
