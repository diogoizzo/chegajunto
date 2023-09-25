import { NextApiRequest, NextApiResponse } from 'next';
import withAutentication from '../pages/api/auth/withAutentication';
import PatientRepository from '../repository/PatientRepository';

export default class PatientController {
   static async getAll(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const patients = await PatientRepository.getAll();
      if (patients) {
         return res.status(200).json(patients);
      } else {
         return res.status(404).json({ error: 'Pacientes não encontrados' });
      }
   }
   static async create(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const birth = req.body.birthday ? new Date(req.body.birthday) : null;
      delete req.body.getLink;
      delete req.body.id;
      delete req.body.patientEditLink;
      delete req.body.status;
      const patient = await PatientRepository.create(
         req.body,
         birth,
         String(req.body.email)
      );
      if (patient) {
         return res.status(200).json(patient);
      } else {
         return res.status(500).send({
            message: 'Não foi possível criar o novo paciente'
         });
      }
   }
   static async findById(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const id = String(req.query.id);
      const patient = await PatientRepository.findById(id);
      if (patient) {
         return res.status(200).json(patient);
      } else {
         return res.status(404).json({ error: 'Paciente não encontrado' });
      }
   }
   static async update(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const id = String(req.query.id);
      const interviewedByUserId = String(req.body.interviewedByUserId);
      const underResponsibilityOfUserId = String(
         req.body.underResponsibilityOfUserId
      );
      delete req.body.getLink;
      delete req.body.id;
      delete req.body.patientEditLink;
      delete req.body.underResponsibilityOfUserId;
      delete req.body.underResponsibilityOf;
      delete req.body.interviewedBy;
      delete req.body.interviewedByUserId;
      delete req.body.status;
      const birth = req.body.birthday ? new Date(req.body.birthday) : null;
      delete req.body.birthday;
      const patient = await PatientRepository.update(
         id,
         birth,
         interviewedByUserId,
         underResponsibilityOfUserId,
         req.body
      );
      if (patient) {
         return res.status(200).json(patient);
      } else {
         return res.status(404).json({ error: 'Usuário não encontrado' });
      }
   }
   static async archivePatient(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const id = String(req.query.id);
      const updatedPatient = await PatientRepository.archivePatient(id);
      if (updatedPatient) {
         return res.status(200).json(updatedPatient);
      } else {
         return res.status(404).json({ error: 'Paciente não encontrado' });
      }
   }
}
