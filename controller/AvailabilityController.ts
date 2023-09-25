import { NextApiRequest, NextApiResponse } from 'next';
import withAutentication from '../pages/api/auth/withAutentication';
import AvailabilityRepository from '../repository/AvailabilityRepository';

export default class AvailabilityController {
   static async createUserAvailability(
      req: NextApiRequest,
      res: NextApiResponse
   ) {
      await withAutentication(req, res);
      const userId = String(req.query.userId);
      const dayOfWeek = String(req.body.dayOfWeek);
      const time = String(req.body.time);
      try {
         const newAvailabiliy =
            await AvailabilityRepository.createUserAvailability(
               userId,
               dayOfWeek,
               time
            );
         return res.status(200).json(newAvailabiliy);
      } catch (error) {
         return res.status(500).json({
            message: 'Não foi possível criar a nova disponibilidade',
            error: error
         });
      }
   }
   static async deleteUserAvailability(
      req: NextApiRequest,
      res: NextApiResponse
   ) {
      await withAutentication(req, res);
      const userId = String(req.query.userId);
      const availabilityId = String(req.query.availabilityId);
      try {
         const deletedAvailability =
            await AvailabilityRepository.deleteUserAvailability(
               userId,
               availabilityId
            );
         return res.status(200).json(deletedAvailability);
      } catch (error) {
         return res.status(500).json({
            message: 'Não foi possível apagar a disponibilidade',
            error: error
         });
      }
   }
   static async createPatientAvailability(
      req: NextApiRequest,
      res: NextApiResponse
   ) {
      await withAutentication(req, res);
      const patientId = String(req.query.patientId);
      const dayOfWeek = String(req.body.dayOfWeek);
      const time = String(req.body.time);
      try {
         const newAvailabiliy =
            await AvailabilityRepository.createPatientAvailability(
               patientId,
               dayOfWeek,
               time
            );
         return res.status(200).json(newAvailabiliy);
      } catch (error) {
         return res.status(500).json({
            message: 'Não foi possível criar a nova disponibilidade',
            error: error
         });
      }
   }
   static async deletePatientAvailability(
      req: NextApiRequest,
      res: NextApiResponse
   ) {
      await withAutentication(req, res);
      const patientId = String(req.query.patientId);
      const availabilityId = String(req.query.availabilityId);
      try {
         const deletedAvailability =
            await AvailabilityRepository.deletePatientAvailability(
               patientId,
               availabilityId
            );
         return res.status(200).json(deletedAvailability);
      } catch (error) {
         return res.status(500).json({
            message: 'Não foi possível apagar a disponibilidade',
            error: error
         });
      }
   }
   static async findCompatibility(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const dayOfWeek = String(req.query.dayOfWeek);
      const time = String(req.query.time);
      try {
         const availability = await AvailabilityRepository.findCompatibility(
            dayOfWeek,
            time
         );
         return res.status(200).json(availability);
      } catch (error) {
         return res.status(500).json({
            message:
               'Não foi localizar nenhuma disponibilidade disponibilidade',
            error: error
         });
      }
   }
}
