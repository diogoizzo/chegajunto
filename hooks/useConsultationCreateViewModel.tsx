import { useRouter } from 'next/router';
import useErrorToast from './useErrorToast';
import { useState } from 'react';
import { IConsultationForm } from '../components/sections/ConsultationForm';
import UserServices from '../services/UserServices';
import { useMutation, useQuery } from 'react-query';
import PatientServices from '../services/PatientServices';
import ConsultationServices from '../services/ConsultationServices';
import ConsultationViewModel from '../viewModels/consultationViewModel/ConsultationViewModel';

export default function useConsultationCreateViewModel() {
   const router = useRouter();

   const errorToast = useErrorToast();

   const [form, setForm] = useState<IConsultationForm>({
      patientAbsent: false,
      observation: '',
      professionalUserId: undefined,
      patientId: undefined
   });
   const userQuery = useQuery(['user'], () => UserServices.getAll());

   const patientQuery = useQuery(['patients'], () => PatientServices.getAll());

   const createConsultationMutation = useMutation({
      mutationFn: ConsultationServices.create,
      onError: () => {
         errorToast('Não foi possível criar o compromisso');
      },
      onSuccess: () => {
         router.push('/atendimentos?saved=true');
      }
   });
   return ConsultationViewModel.createView(
      form,
      setForm,
      userQuery,
      patientQuery,
      createConsultationMutation
   );
}
