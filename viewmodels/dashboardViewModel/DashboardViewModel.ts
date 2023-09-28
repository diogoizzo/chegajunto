import { UseQueryResult } from 'react-query';
import Patient from '../../entities/Patient';
import Appointment from '../../entities/Appointment';
import Consultation from '../../entities/Consultation';
import Document from '../../entities/Document';
import DashboardListViewModel from './DashboardListViewModel';

export default class DashboardViewModel {
   static patientsAndAppointmentsList(
      activeUserId: string,
      dashboardQuery: UseQueryResult<any, unknown>
   ) {
      const userPatients =
         dashboardQuery.data &&
         Patient?.createMany(dashboardQuery.data.userPatients);
      const userAppointments =
         dashboardQuery.data &&
         Appointment?.createMany(dashboardQuery.data.userAppointments);
      const patientsCreatedThisMonth =
         dashboardQuery.data &&
         Patient?.createMany(dashboardQuery.data.patientsCreatedThisMonth);
      const patientsArchivedThisMonth =
         dashboardQuery.data &&
         Patient?.createMany(dashboardQuery.data.patientsArchivedThisMonth);
      const consultationsThisMonth =
         dashboardQuery.data &&
         Consultation?.createMany(dashboardQuery.data.consultationsThisMonth);
      const absentsThisMonth =
         dashboardQuery.data &&
         Consultation?.createMany(dashboardQuery.data.absentsThisMonth);
      const newDocumentsThisMonth =
         dashboardQuery.data &&
         Document?.createMany(dashboardQuery.data.newDocumentsThisMonth);

      return new DashboardListViewModel(
         activeUserId,
         dashboardQuery,
         userPatients,
         userAppointments,
         patientsCreatedThisMonth,
         patientsArchivedThisMonth,
         consultationsThisMonth,
         absentsThisMonth,
         newDocumentsThisMonth
      );
   }
}
