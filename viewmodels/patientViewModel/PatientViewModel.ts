import { IAvailabilityForm } from '../../components/sections/UserAvailabilityForm';
import { UseMutationResult, UseQueryResult } from 'react-query';
import IPatient from '../../interfaces/IPatient';
import { Dispatch, SetStateAction } from 'react';
import Patient from '../../entities/Patient';
import User from '../../entities/User';
import IAvailability from '../../interfaces/IAvailability';
import dayjs from 'dayjs';
import PatientDisplayModel from './PatientDisplayModel';
import PatientCreateAndEditViewModel from './PatientCreateAndEditViewModel';
import PatientAvailabilityViewModel from './PatientAvailabilityViewModel';
import PatientEditViewModel from './PatientEditViewModel';
import PatientWaitingListViewModel from './PatientWaitingListViewModel';
import PatientArchiveViewModel from './PatientArchiveViewModel';
import PatientListViewModel from './PatientListViewModel';

export default class PatientViewModel {
   static listView(
      query: UseQueryResult<any, unknown>,
      search: IPatient[] | null,
      setSearch: Dispatch<SetStateAction<IPatient[] | null>>,
      userType: string,
      activeUserId: string
   ) {
      const allPatients = query.data && Patient.createMany(query.data);

      const activePatients = allPatients?.filter(
         (patient: IPatient) =>
            patient.status === 'Ativo' || patient.status === 'Espera'
      );
      let permissionPatients;
      if (userType === 'Psicólogo') {
         permissionPatients = activePatients;
      } else {
         permissionPatients = activePatients?.filter(
            (patient: Patient) =>
               patient.underResponsibilityOfUserId === activeUserId ||
               patient.interviewedByUserId === activeUserId
         );
      }
      return new PatientListViewModel(
         query,
         search,
         setSearch,
         permissionPatients
      );
   }
   static displayView(query: UseQueryResult<any, unknown>) {
      const patient = query.data && Patient.createFromObject(query.data);
      return new PatientDisplayModel(query, patient);
   }
   static createAndEdit(
      isOpen: boolean,
      setIsOpen: Dispatch<SetStateAction<boolean>>,
      form: IPatient,
      setForm: Dispatch<SetStateAction<IPatient>>,
      query: UseQueryResult<User[] | undefined, unknown>,
      patientUpdateMutation: UseMutationResult<any, unknown, any, unknown>,
      patientDeleteMutation: UseMutationResult<
         any,
         unknown,
         string | undefined,
         unknown
      >,
      patientCreateMutation: UseMutationResult<any, unknown, IPatient, unknown>,
      errorToast: (msg: string) => void,
      patient?: IPatient
   ) {
      const users = (query.data && User.createMany(query.data)) || [];
      return new PatientCreateAndEditViewModel(
         isOpen,
         setIsOpen,
         form,
         setForm,
         query,
         patientUpdateMutation,
         patientDeleteMutation,
         patientCreateMutation,
         users,
         errorToast,
         patient
      );
   }
   static patientAvailabilities(
      availabilities: IAvailability[],
      form: IAvailabilityForm,
      setForm: Dispatch<SetStateAction<IAvailabilityForm>>,
      createAvailabilitiyMutation: UseMutationResult<
         any,
         unknown,
         any,
         unknown
      >,
      deleteAvailabilitiyMutation: UseMutationResult<
         any,
         unknown,
         {
            patientId: string;
            availabilityId: string;
         },
         unknown
      >,
      errorToast: (msg: string) => void,
      patientId?: string
   ) {
      return new PatientAvailabilityViewModel(
         availabilities,
         form,
         setForm,
         createAvailabilitiyMutation,
         deleteAvailabilitiyMutation,
         errorToast,
         patientId
      );
   }
   static edit(query: UseQueryResult<any, unknown>) {
      const patient = query.data && Patient.createFromObject(query.data);
      return new PatientEditViewModel(query, patient);
   }
   static waitingList(
      query: UseQueryResult<any, unknown>,
      search: Patient[] | null,
      setSearch: Dispatch<SetStateAction<Patient[] | null>>,
      userType: string,
      activeUserId: string
   ) {
      const allPatients = query.data && Patient.createMany(query.data);

      const waitingPatients = allPatients
         ?.filter((patient: IPatient) => patient.status === 'Espera')
         .sort((a: IPatient, b: IPatient) =>
            dayjs(a.createdAt).diff(dayjs(b.createdAt))
         );
      //todo ordenar por data de criação (createdAt)
      let permissionPatients;
      if (userType === 'Psicólogo') {
         permissionPatients = waitingPatients;
      } else {
         permissionPatients = waitingPatients?.filter(
            (patient: Patient) =>
               patient.underResponsibilityOfUserId === activeUserId ||
               patient.interviewedByUserId === activeUserId
         );
      }
      return new PatientWaitingListViewModel(
         permissionPatients,
         query,
         search,
         setSearch
      );
   }
   static archiveView(
      query: UseQueryResult<any, unknown>,
      search: Patient[] | null,
      setSearch: Dispatch<SetStateAction<Patient[] | null>>,
      userType: string,
      activeUserId: string
   ) {
      const allPatients = query.data && Patient.createMany(query.data);
      const archivedPatients = allPatients?.filter(
         (patient: IPatient) => patient.status === 'Arquivado'
      );
      let permissionPatients;
      if (userType === 'Psicólogo') {
         permissionPatients = archivedPatients;
      } else {
         permissionPatients = archivedPatients?.filter(
            (patient: Patient) =>
               patient.underResponsibilityOfUserId === activeUserId ||
               patient.interviewedByUserId === activeUserId
         );
      }
      return new PatientArchiveViewModel(
         query,
         search,
         setSearch,
         userType,
         activeUserId,
         permissionPatients
      );
   }
}
