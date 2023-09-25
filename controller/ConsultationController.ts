import { NextApiRequest, NextApiResponse } from 'next';
import withAutentication from '../pages/api/auth/withAutentication';
import ConsultationRepository from '../repository/ConsultationRepository';

export default class ConsultationController {
   static async getAll(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const consultations = await ConsultationRepository.getAll();
      if (consultations) {
         return res.status(200).json(consultations);
      } else {
         return res
            .status(404)
            .json({ error: 'Nenhum atendimento encontrado' });
      }
   }
   static async create(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const consultation = await ConsultationRepository.create(req.body);
      if (consultation) {
         return res.status(200).json(consultation);
      } else {
         return res.status(500).json({
            error: 'Não foi possível criar o atendimento'
         });
      }
   }
   static async findById(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const id = String(req.query.id);
      const consultation = await ConsultationRepository.findById(id);
      if (consultation) {
         return res.status(200).json(consultation);
      } else {
         return res.status(404).json({
            error: 'Não foi possível localizar o atendimento'
         });
      }
   }
   static async update(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const id = String(req.query.id);
      const updatedConsultation = await ConsultationRepository.update(
         id,
         req.body
      );
      if (updatedConsultation) {
         return res.status(200).json(updatedConsultation);
      } else {
         return res.status(404).json({
            error: 'Não foi possível atualizar o atendimento.'
         });
      }
   }
   static async delete(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const id = String(req.query.id);
      const deletedConsultation = await ConsultationRepository.delete(id);
      if (deletedConsultation) {
         return res.status(200).json(deletedConsultation);
      } else {
         return res.status(404).json({
            error: 'Não foi possível apagar o atendimento.'
         });
      }
   }
}
