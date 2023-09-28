import { useRouter } from 'next/router';
import useErrorToast from './useErrorToast';
import { useMutation, useQuery } from 'react-query';
import { useEffect, useState } from 'react';
import UserServices from '../services/UserServices';
import IPatient from '../interfaces/IPatient';
import IUser from '../interfaces/IUser';
import IAvailability from '../interfaces/IAvailability';
import { IAppointmentForm } from '../components/sections/AppointmentForm';
import AppointmentServices from '../services/AppointmentServices';
import AvailabilityServices from '../services/AvailabilityServices';
import AppointmentViewModel from '../viewmodels/appointmentViewModel/AppointmentsViewModel';

export default function useAppointmentCreateViewModel() {
   const router = useRouter();

   const errorToast = useErrorToast();

   const usersQuery = useQuery(['users'], () => UserServices.getAll());

   const [compatiblePatients, setCompatiblePatients] = useState<
      IPatient[] | []
   >([]);

   const [patientsLoading, setPatientsLoading] = useState(false);

   const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

   const [selectedUserAvailability, setSelectedUserAvailability] =
      useState<IAvailability | null>(null);

   const [form, setForm] = useState<IAppointmentForm>({});

   const createAppointmentMutation = useMutation({
      mutationFn: AppointmentServices.create,
      onSuccess: () => {
         router.push('/compromissos?saved=true');
      },
      onError: () => {
         errorToast('Não foi possível criar o novo compromisso');
      }
   });

   const viewModel = AppointmentViewModel.createView(
      usersQuery,
      compatiblePatients,
      setCompatiblePatients,
      patientsLoading,
      selectedUser,
      setSelectedUser,
      selectedUserAvailability,
      setSelectedUserAvailability,
      form,
      setForm,
      createAppointmentMutation
   );

   function save() {
      const activeAvailability = selectedUser?.availabilities?.filter(
         (availability) => availability.id === String(selectedUserAvailability)
      )[0];
      const finalForm = {
         ...form,
         dayOfWeek: activeAvailability?.dayOfWeek,
         time: activeAvailability?.time
      };
      createAppointmentMutation.mutate(finalForm);
   }

   useEffect(() => {
      const selectedProfessional = viewModel.users?.filter(
         (user) => user.id === form.professionalUserId
      )[0];
      if (selectedProfessional?.id !== selectedUser?.id) {
         setSelectedUser(selectedProfessional ? selectedProfessional : null);
      }
   }, [form.professionalUserId, selectedUser, viewModel.users]);

   useEffect(() => {
      setPatientsLoading(true);
      const activeAvailability = selectedUser?.availabilities?.filter(
         (availability) => availability.id === String(selectedUserAvailability)
      )[0];
      AvailabilityServices.getCompatibleAvailabilities(
         String(activeAvailability?.dayOfWeek),
         String(activeAvailability?.time)
      ).then((res: IAvailability) => {
         res?.patients && setCompatiblePatients(res.patients);
         setPatientsLoading(false);
      });
   }, [selectedUserAvailability, selectedUser?.availabilities]);

   return viewModel;
}
