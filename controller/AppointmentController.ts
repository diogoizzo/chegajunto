import { NextApiRequest, NextApiResponse } from 'next';
import withAutentication from '../pages/api/auth/withAutentication';
import AppointmentRepository from '../repository/AppointmentRepository';
import AvailabilityRepository from '../repository/AvailabilityRepository';
import PatientRepository from '../repository/PatientRepository';

export default class AppointmentController {
   static async getAll(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const appointments = await AppointmentRepository.getAll();
      if (appointments) {
         return res.status(200).json(appointments);
      } else {
         return res.status(404).json({
            error: 'Não foi possível localizar nenhum compromisso'
         });
      }
   }
   static async create(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const dayOfWeek = String(req.body.dayOfWeek);
      console.log('Entrei no controller de criação');
      console.log(req.body);
      const time = String(req.body.time);
      const professionalUserId = String(req.body.professionalUserId);
      const patientId = String(req.body.patientId);
      const appointment = await AppointmentRepository.create(req.body);
      const availability =
         await AvailabilityRepository.moveUserAvailabilityToAppointment(
            dayOfWeek,
            time,
            professionalUserId
         );
      const patient = await PatientRepository.updateToActive(
         patientId,
         professionalUserId
      );
      if (appointment && patient && availability) {
         return res.status(200).json(appointment);
      } else {
         return res.status(404).json({
            error: 'Não foi possível criar o novo compromisso'
         });
      }
   }
   static async findById(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const id = String(req.query.id);
      const appointment = await AppointmentRepository.findById(id);
      if (appointment) {
         return res.status(200).json(appointment);
      } else {
         return res.status(404).json({
            error: 'Não foi possível localizar o compromisso'
         });
      }
   }
   static async delete(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const id = String(req.query.id);
      const deletedAppointment = await AppointmentRepository.delete(id);
      if (deletedAppointment) {
         const recreatedUserAvailability =
            await AvailabilityRepository.recreateUserAvailability(
               deletedAppointment
            );
         const patientId = deletedAppointment.patient.id;
         const updatePatientStatus = await PatientRepository.changeStatusToWait(
            patientId
         );
         return res.status(200).json({
            deletedAppointment,
            recreatedUserAvailability
         });
      } else {
         return res.status(404).json({
            error: 'Não foi possível apagar o compromisso.'
         });
      }
   }
}
