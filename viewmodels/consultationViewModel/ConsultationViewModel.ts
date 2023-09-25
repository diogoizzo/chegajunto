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
import ConsultationEditViewModel from './ConsultationEditViewModel';
import dayjs from 'dayjs';

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
      const orderedConsultations = consultations.sort((a, b) =>
         dayjs(b.createdAt).diff(dayjs(a.createdAt))
      );
      return new AppointmentListViewModel(
         urlQuery,
         search,
         setSearch,
         consultationQuery,
         orderedConsultations
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
      isOpen: boolean,
      setIsOpen: Dispatch<SetStateAction<boolean>>,
      createConsultationMutation: UseMutationResult<
         any,
         unknown,
         IAppointmentForm,
         unknown
      >,
      updateConsultationMutation: UseMutationResult<any, unknown, any, unknown>,
      deleteConsultationMutation: UseMutationResult<
         any,
         unknown,
         string | undefined,
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
         isOpen,
         setIsOpen,
         createConsultationMutation,
         updateConsultationMutation,
         deleteConsultationMutation,
         users,
         patients
      );
   }
   static editView(query: UseQueryResult<any, unknown>) {
      const consultation =
         query.data && Consultation.createFromObject(query.data);
      return new ConsultationEditViewModel(query, consultation);
   }
}
