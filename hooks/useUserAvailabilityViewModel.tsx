import { useState } from 'react';
import IAvailability from '../interfaces/IAvailability';
import { IAvailabilityForm } from '../components/sections/AvailabilityForm';
import useErrorToast from './useErrorToast';
import { useMutation, useQueryClient } from 'react-query';
import AvailabilityServices from '../services/AvailabilityServices';
import UserViewModel from '../viewModels/userViewModel/UserViewModel';

export default function useUserAvailabilityViewModel(
   availabilities: IAvailability[],
   userId?: string
) {
   const [form, setForm] = useState<IAvailabilityForm>({
      dayOfWeek: undefined,
      time: ''
   });

   const errorToast = useErrorToast();

   const queryClient = useQueryClient();

   const createAvailabilitiyMutation = useMutation({
      mutationFn: AvailabilityServices.createUserAvailability,
      onSuccess: () => {
         queryClient.invalidateQueries(['user', userId]);
      },
      onError: () => {
         errorToast('Não foi possível criar a disponibilidade');
      }
   });
   const deleteAvailabilitiyMutation = useMutation({
      mutationFn: AvailabilityServices.deleteUserAvailability,
      onSuccess: () => {
         queryClient.invalidateQueries(['user', userId]);
      },
      onError: () => {
         errorToast('Não foi possível apagar a disponibilidade');
      }
   });
   return UserViewModel.userAvailablityView(
      availabilities,
      form,
      setForm,
      createAvailabilitiyMutation,
      deleteAvailabilitiyMutation,
      errorToast,
      userId
   );
}
