import { ParsedUrlQuery } from 'querystring';
import IConsultation from '../../interfaces/IConsultation';
import { Dispatch, SetStateAction } from 'react';
import { UseMutationResult, UseQueryResult } from 'react-query';
import Consultation from '../../entities/Consultation';
import { IConsultationForm } from '../../components/sections/ConsultationForm';
import User from '../../entities/User';
import { IAppointmentForm } from '../../components/sections/AppointmentForm';
import Patient from '../../entities/Patient';
import AppointmentListViewModel from './ConsultationListViewModel';
import ConsultationDisplayViewModel from './ConsultationDisplayViewModel';
import ConsultationCreateViewModel from './ConsultationCreateViewModel';

export default class ConsultationViewModel {
   static listView(
      urlQuery: ParsedUrlQuery,
      search: IConsultation[] | null,
      setSearch: Dispatch<SetStateAction<IConsultation[] | null>>,
      consultationQuery: UseQueryResult<IConsultation[], unknown>
   ) {
      const consultations =
         (consultationQuery.data &&
            Consultation.createMany(consultationQuery.data)) ||
         [];
      return new AppointmentListViewModel(
         urlQuery,
         search,
         setSearch,
         consultationQuery,
         consultations
      );
   }
   static displayView(
      consultationId: string,
      consultationQuery: UseQueryResult<any, unknown>
   ) {
      const consultation: IConsultation =
         consultationQuery.data &&
         Consultation.createFromObject(consultationQuery.data);
      return new ConsultationDisplayViewModel(
         consultationId,
         consultationQuery,
         consultation
      );
   }
   static createView(
      form: IConsultationForm,
      setForm: Dispatch<SetStateAction<IConsultationForm>>,
      userQuery: UseQueryResult<User[] | undefined, unknown>,
      patientQuery: UseQueryResult<any, unknown>,
      createConsultationMutation: UseMutationResult<
         any,
         unknown,
         IAppointmentForm,
         unknown
      >
   ) {
      const users = (userQuery.data && User.createMany(userQuery.data)) || [];
      const patients =
         (patientQuery.data && Patient.createMany(patientQuery.data)) || [];
      return new ConsultationCreateViewModel(
         form,
         setForm,
         userQuery,
         patientQuery,
         createConsultationMutation,
         users,
         patients
      );
   }
}
