import { useRouter } from 'next/router';
import useErrorToast from './useErrorToast';
import { useState } from 'react';
import { IConsultationForm } from '../components/sections/ConsultationForm';
import UserServices from '../services/UserServices';
import { useMutation, useQuery } from 'react-query';
import PatientServices from '../services/PatientServices';
import ConsultationServices from '../services/ConsultationServices';
import ConsultationViewModel from '../viewModels/consultationViewModel/ConsultationViewModel';
import Consultation from '../entities/Consultation';

export default function useConsultationCreateViewModel(
   consultation?: Consultation
) {
   const router = useRouter();

   const errorToast = useErrorToast();

   const [form, setForm] = useState<IConsultationForm>({
      patientAbsent: consultation?.patientAbsent || false,
      observation: consultation?.observation || '',
      professionalUserId: consultation?.professionalUserId || undefined,
      patientId: consultation?.patientId || undefined
   });
   const userQuery = useQuery(['user'], () => UserServices.getAll());

   const patientQuery = useQuery(['patients'], () => PatientServices.getAll());

   const [isOpen, setIsOpen] = useState(false);

   const createConsultationMutation = useMutation({
      mutationFn: ConsultationServices.create,
      onError: () => {
         errorToast('Não foi possível criar o atendimento');
      },
      onSuccess: () => {
         router.push('/atendimentos?saved=true');
      }
   });
   const updateConsultationMutation = useMutation({
      mutationFn: ConsultationServices.update,
      onError: () => {
         errorToast('Não foi possível atualizar o atendimento');
      },
      onSuccess: () => {
         router.push('/atendimentos?updated=true');
      }
   });
   const deleteConsultationMutation = useMutation({
      mutationFn: ConsultationServices.delete,
      onError: () => {
         errorToast('Não foi possível apagar o atendimento');
      },
      onSuccess: () => {
         router.push('/atendimentos?deleted=true');
      }
   });
   return ConsultationViewModel.createView(
      form,
      setForm,
      userQuery,
      patientQuery,
      isOpen,
      setIsOpen,
      createConsultationMutation,
      updateConsultationMutation,
      deleteConsultationMutation
   );
}
