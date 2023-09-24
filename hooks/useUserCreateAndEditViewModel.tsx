import { useRouter } from 'next/router';
import useErrorToast from './useErrorToast';
import { useState } from 'react';
import { UserFromData } from '../components/sections/UserForm';
import User from '../entities/User';
import { useMutation } from 'react-query';
import UserServices from '../services/UserServices';
import UserViewModel from '../viewModels/userViewModel/UserViewModel';

export default function useUserEditViewModel(user?: User) {
   const router = useRouter();

   const errorToast = useErrorToast();

   const [isOpen, setIsOpen] = useState(false);

   const [form, setForm] = useState<UserFromData>({
      id: user?.id || undefined,
      name: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      address: user?.address || '',
      cpf: user?.cpf || '',
      type: user?.type || 'Psicólogo',
      crp: user?.crp || '',
      institution: user?.institution || '',
      period: user?.period || 0,
      password: '',
      confirmPassword: '',
      userLink: user?.userLink || ''
   });

   const userUpdateMutation = useMutation({
      mutationFn: UserServices.updateById,
      onSuccess: () => {
         router.push(`/usuarios?updated=true`);
      }
   });

   const userDeleteMutation = useMutation({
      mutationFn: UserServices.delete,
      onSuccess: () => {
         router.push('/usuarios?deleted=true');
      }
   });

   return UserViewModel.createAndEditView(
      isOpen,
      setIsOpen,
      form,
      setForm,
      userUpdateMutation,
      userDeleteMutation,
      errorToast,
      router,
      user
   );
}
