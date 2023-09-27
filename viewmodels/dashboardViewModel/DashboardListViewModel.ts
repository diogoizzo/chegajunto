import { UseQueryResult } from 'react-query';
import IPatient from '../../interfaces/IPatient';
import IAppointment from '../../interfaces/IAppointment';
import IConsultation from '../../interfaces/IConsultation';
import IDocument from '../../interfaces/IDocument';

export default class DashboardListViewModel {
   constructor(
      public activeUserId: string,
      public dashboardQuery: UseQueryResult<any, unknown>,
      public userPatients: IPatient[],
      public userAppointments: IAppointment[],
      public patientsCreatedThisMonth: IPatient[],
      public patientsArchivedThisMonth: IPatient[],
      public consultationsThisMonth: IConsultation[],
      public absentsThisMonth: IConsultation[],
      public newDocumentsThisMonth: IDocument[]
   ) {}
}
