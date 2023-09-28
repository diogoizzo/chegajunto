import { useRouter } from 'next/router';
import IPatient from '../interfaces/IPatient';
import useErrorToast from './useErrorToast';
import { useState } from 'react';
import UserServices from '../services/UserServices';
import { useMutation, useQuery } from 'react-query';
import PatientServices from '../services/PatientServices';
import PatientViewModel from '../viewmodels/patientViewModel/PatientViewModel';

export default function usePatientCreateAndEditViewModel(patient?: IPatient) {
   const router = useRouter();

   const errorToast = useErrorToast();

   const [isOpen, setIsOpen] = useState(false);

   const [form, setForm] = useState<IPatient>({
      id: patient?.id || '',
      name: patient?.name || '',
      email: patient?.email || '',
      phone: patient?.phone || '',
      address: patient?.address || '',
      cpf: patient?.cpf || '',
      status: patient?.status || '',
      birthday: patient?.birthday || undefined,
      birthplace: patient?.birthplace || '',
      education: patient?.education || '',
      school: patient?.school || '',
      scholarship: patient?.scholarship || undefined,
      isMedicated: patient?.isMedicated || undefined,
      medication: patient?.medication || undefined,
      interviewedBy: patient?.interviewedBy || undefined,
      interviewedByUserId: patient?.interviewedByUserId || undefined,
      complaint: patient?.complaint || undefined,
      observation: patient?.observation || undefined,
      underResponsibilityOf: patient?.underResponsibilityOf || undefined,
      underResponsibilityOfUserId:
         patient?.underResponsibilityOfUserId || undefined,
      getLink: patient?.getLink || '',
      patientEditLink: patient?.patientEditLink || ''
   });

   const query = useQuery(['user'], () => UserServices.getAll());

   const patientUpdateMutation = useMutation({
      mutationFn: PatientServices.updateById,
      onSuccess: () => {
         router.push(`/pacientes?updated=true`);
      },
      onError: () => {
         errorToast('Não foi possível atualizar o paciente.');
      }
   });

   const patientDeleteMutation = useMutation({
      mutationFn: PatientServices.delete,
      onSuccess: () => {
         router.push('/pacientes?deleted=true');
      },
      onError: () => {
         errorToast('Não foi possível arquivar o paciente,');
      }
   });
   const patientCreateMutation = useMutation({
      mutationFn: PatientServices.create,
      onSuccess: (data) => {
         router.push(`/pacientes/${data.id}?saved=true`);
      },
      onError: () => {
         errorToast('Não foi possível criar o novo paciente.');
      }
   });
   return PatientViewModel.createAndEdit(
      isOpen,
      setIsOpen,
      form,
      setForm,
      query,
      patientUpdateMutation,
      patientDeleteMutation,
      patientCreateMutation,
      errorToast,
      patient
   );
}
