import { useState } from 'react';
import { IAvailabilityForm } from '../components/sections/AvailabilityForm';
import IAvailability from '../interfaces/IAvailability';
import useErrorToast from './useErrorToast';
import { useMutation, useQueryClient } from 'react-query';
import AvailabilityServices from '../services/AvailabilityServices';
import PatientViewModel from '../viewmodels/patientViewModel/PatientViewModel';

export default function usePatientAvailablityViewModel(
   availabilities: IAvailability[],
   patientId?: string
) {
   const [form, setForm] = useState<IAvailabilityForm>({
      dayOfWeek: undefined,
      time: ''
   });

   const errorToast = useErrorToast();

   const queryClient = useQueryClient();

   const createAvailabilitiyMutation = useMutation({
      mutationFn: AvailabilityServices.createPatientAvailability,
      onSuccess: () => {
         queryClient.invalidateQueries(['patient', patientId]);
      },
      onError: () => {
         errorToast('Não foi possível criar a disponibilidade');
      }
   });
   const deleteAvailabilitiyMutation = useMutation({
      mutationFn: AvailabilityServices.deletePatientAvailability,
      onSuccess: () => {
         queryClient.invalidateQueries(['patient', patientId]);
      },
      onError: () => {
         errorToast('Não foi possível apagar a disponibilidade');
      }
   });

   return PatientViewModel.patientAvailabilities(
      availabilities,
      form,
      setForm,
      createAvailabilitiyMutation,
      deleteAvailabilitiyMutation,
      errorToast,
      patientId
   );
}
