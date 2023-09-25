import { useRouter } from 'next/router';
import useErrorToast from './useErrorToast';
import { useState } from 'react';
import { UserFromData } from '../components/sections/UserForm';
import User from '../entities/User';
import { useMutation, useQueryClient } from 'react-query';
import UserServices from '../services/UserServices';
import UserViewModel from '../viewModels/userViewModel/UserViewModel';
import { useToast } from '../components/ui/use-toast';
import SuccessMsg from '../components/parts/SuccessMsg';

export default function useUserEditViewModel(user?: User, activeUser?: User) {
   const router = useRouter();

   const { toast } = useToast();

   const errorToast = useErrorToast();
   const queryClient = useQueryClient();

   const [isOpen, setIsOpen] = useState(false);

   const [form, setForm] = useState<UserFromData>({
      id: user?.id || activeUser?.id || undefined,
      name: user?.name || activeUser?.name || '',
      email: user?.email || activeUser?.email || '',
      phone: user?.phone || activeUser?.phone || '',
      address: user?.address || activeUser?.address || '',
      cpf: user?.cpf || activeUser?.cpf || '',
      type: user?.type || activeUser?.type || 'Psicólogo',
      crp: user?.crp || activeUser?.crp || '',
      institution: user?.institution || activeUser?.institution || '',
      period: user?.period || activeUser?.period || 0,
      password: '',
      confirmPassword: '',
      userLink: user?.userLink || ''
   });

   const userProfileUpdate = useMutation({
      mutationFn: UserServices.updateProfile,
      onSuccess: () => {
         queryClient.invalidateQueries(['user', activeUser?.id]);
         toast({
            // @ts-expect-error
            // eslint-disable-next-line react/jsx-no-undef
            title: <SuccessMsg msg="Perfil Atualizado" />,
            description: (
               <p className="text-cool-gray-500">
                  Seu perfil foi atualizado com sucesso.
               </p>
            )
         });
      }
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
      userProfileUpdate,
      errorToast,
      router,
      user
   );
}
