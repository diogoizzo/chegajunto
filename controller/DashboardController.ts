import { NextApiRequest, NextApiResponse } from 'next';
import withAutentication from '../pages/api/auth/withAutentication';
import PatientRepository from '../repository/PatientRepository';
import AppointmentRepository from '../repository/AppointmentRepository';
import dayjs from 'dayjs';
import ConsultationRepository from '../repository/ConsultationRepository';
import DocumentRepository from '../repository/DocumentRepository';

export default class DashboardController {
   static async getUserInfo(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const id = String(req.query.id);
      //@ts-ignore
      const initialDate = dayjs().startOf('M').$d;
      //@ts-ignore
      const endDate = dayjs().endOf('M').$d;

      const [
         userPatients,
         userAppointments,
         patientsCreatedThisMonth,
         patientsArchivedThisMonth,
         consultationsThisMonth,
         absentsThisMonth,
         newDocumentsThisMonth
      ] = await Promise.all([
         PatientRepository.getByUserID(id),
         AppointmentRepository.getByUserID(id),
         PatientRepository.createdInRange(initialDate, endDate),
         PatientRepository.patientsArchivedThisMonth(initialDate, endDate),
         ConsultationRepository.consultationsThisMonth(initialDate, endDate),
         ConsultationRepository.absentsThisMonth(initialDate, endDate),
         DocumentRepository.newThisMonth(initialDate, endDate)
      ]);
      if (userPatients && userAppointments) {
         return res.status(200).json({
            userPatients,
            userAppointments,
            patientsCreatedThisMonth,
            patientsArchivedThisMonth,
            consultationsThisMonth,
            absentsThisMonth,
            newDocumentsThisMonth
         });
      } else {
         return res.status(500).send({
            message:
               'Não foi possível localizar os pacientes e compromissos do usuário'
         });
      }
   }
}
