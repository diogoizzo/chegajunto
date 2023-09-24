import { useRouter } from 'next/router';
import { useState } from 'react';
import useErrorToast from './useErrorToast';
import { useMutation } from 'react-query';
import AppointmentServices from '../services/AppointmentServices';
import IAppointment from '../interfaces/IAppointment';
import AppointmentViewModel from '../viewModels/appointmentViewModel/AppointmentViewModel';

export default function useAppointmentDeleteViewModel(
   appointment?: IAppointment
) {
   const router = useRouter();
   const [isOpen, setIsOpen] = useState(false);
   const errorToast = useErrorToast();

   const deleteAppointmentMutation = useMutation({
      mutationFn: AppointmentServices.delete,
      onSuccess: () => {
         router.push('/compromissos?deleted=true');
      },
      onError: () => {
         errorToast('Não foi possível atualizar o compromisso');
      }
   });
   return AppointmentViewModel.deleteView(
      isOpen,
      setIsOpen,
      deleteAppointmentMutation,
      appointment
   );
}
