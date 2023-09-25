import { IAvailabilityForm } from './../../components/sections/UserAvailabilityForm';
import { UseMutationResult, UseQueryResult } from 'react-query';
import IPatient from '../../interfaces/IPatient';
import { Dispatch, SetStateAction } from 'react';
import Patient from '../../entities/Patient';
import PatientListViewModel from './PatientListViewModel';
import PatientDisplayModel from './PatientDisplayModel';
import User from '../../entities/User';
import PatientCreateAndEditViewModel from './PatientCreateAndEditViewModel';
import IAvailability from '../../interfaces/IAvailability';
import PatientAvailabilityViewModel from './PatientAvailabilityViewModel';
import PatientEditViewModel from './PatientEditViewModel';

export default class PatientViewModel {
   static listView(
      query: UseQueryResult<any, unknown>,
      search: IPatient[] | null,
      setSearch: Dispatch<SetStateAction<IPatient[] | null>>
   ) {
      const allPatients = query.data && Patient.createMany(query.data);

      const activePatients = allPatients?.filter(
         (patient: IPatient) =>
            patient.status === 'Ativo' || patient.status === 'Espera'
      );
      return new PatientListViewModel(query, search, setSearch, activePatients);
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
}
