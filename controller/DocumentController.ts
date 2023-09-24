import { NextApiRequest, NextApiResponse } from 'next';
import withAutentication from '../pages/api/auth/withAutentication';
import DocumentRepository from '../repository/DocumentRepository';
import readFile from '../lib/readFile';
import GoogleDriveServices from '../services/GoogleDriveServices';
import isEmptyObject from '../lib/isEmptyObject';
export default class DocumentController {
   static async getAll(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const documents = await DocumentRepository.getAll();
      if (documents) {
         res.status(200).json(documents);
      } else {
         res.status(404).json({
            error: 'Não foi encontrado nenhum documento'
         });
      }
   }
   static async upload(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const { fields, files } = await readFile(req);
      const googleId = await GoogleDriveServices.uploadFile(files.file[0]);
      const name = String(fields.name[0]);
      const type = String(fields.type[0]);
      const description = String(fields.description[0]);
      const uploadedByUserId = String(fields.uploadedByUserId[0]);
      const belongsToPatientId = String(fields.belongsToPatientId[0]);
      const mimeType = String(files.file[0].mimetype);
      if (googleId) {
         const doc = await DocumentRepository.create(
            name,
            type,
            description,
            uploadedByUserId,
            belongsToPatientId,
            googleId,
            mimeType
         );
         if (doc) {
            res.status(200).json(doc);
         } else {
            res.status(500).send({
               message: 'Não foi possível salvar o documento no banco de dados'
            });
         }
      } else {
         res.status(503).send({
            message: 'Não foi possível salvar o documento no google drive'
         });
      }
   }
   static async findById(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const id = String(req.query.id);
      const document = await DocumentRepository.findById(id);
      if (document) {
         res.status(200).json(document);
      } else {
         res.status(404).json({ error: 'Usuário não encontrado' });
      }
   }
   static async delete(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const id = String(req.query.id);
      const deletedDocument = await DocumentRepository.delete(id);
      if (deletedDocument) {
         await GoogleDriveServices.deleteById(deletedDocument.googleDriveId);

         res.status(200).json(deletedDocument);
      } else {
         res.status(404).json({ error: 'Documento não encontrado' });
      }
   }
   static async update(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const id = String(req.query.id);
      const { fields, files } = await readFile(req);
      const name = String(fields.name[0]);
      const type = String(fields.type[0]);
      const description = String(fields.description[0]);
      const uploadedByUserId = String(fields.uploadedByUserId[0]);
      const belongsToPatientId = String(fields.belongsToPatientId[0]);
      const mimeType = String(files.file[0].mimetype);
      if (isEmptyObject(files)) {
         const doc = await DocumentRepository.updateWithoutFile(
            id,
            name,
            type,
            description,
            uploadedByUserId,
            belongsToPatientId,
            mimeType
         );
         if (doc) {
            res.status(200).json(doc);
         } else {
            res.status(503).send('Não foi possível atualizar o documento');
         }
      } else {
         const googleFile = await prisma.document.findFirst({
            where: { id: id }
         });
         googleFile &&
            (await GoogleDriveServices.deleteById(googleFile.googleDriveId));
         const newFileGoogleId = await GoogleDriveServices.uploadFile(
            files.file[0]
         );
         if (newFileGoogleId) {
            try {
               const doc = await DocumentRepository.updateWithFile(
                  id,
                  name,
                  type,
                  description,
                  uploadedByUserId,
                  belongsToPatientId,
                  mimeType,
                  newFileGoogleId
               );
               res.status(200).json(doc);
            } catch (error) {
               res.status(503).json(error);
            }
         } else {
            res.status(503).send({
               message: 'Não foi possível atualizar o documento no google drive'
            });
         }
      }
   }
}
