import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import UserServices from '../services/UserServices';
import UserViewModel from '../viewModels/userViewModel/UserViewModel';

export default function useUserDisplayViewModel() {
   const router = useRouter();

   const userId = router.query.id;

   const query = useQuery(['user', userId], () => UserServices.getById(userId));
   return UserViewModel.displayView(query);
}
