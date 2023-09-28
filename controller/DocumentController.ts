import { NextApiRequest, NextApiResponse } from 'next';
import withAutentication from '../pages/api/auth/withAutentication';
import DocumentRepository from '../repository/DocumentRepository';

import isEmptyObject from '../lib/isEmptyObject';
import { randomUUID } from 'crypto';
import AwsServices from '../services/AwsServices';
export default class DocumentController {
   static async getAll(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const documents = await DocumentRepository.getAll();
      if (documents) {
         return res.status(200).json(documents);
      } else {
         return res.status(404).json({
            error: 'Não foi encontrado nenhum documento'
         });
      }
   }
   static async create(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const data = req.body;
      delete data.id;
      const createdDocument = await DocumentRepository.create(data);
      if (createdDocument) {
         return res.status(200).json(createdDocument);
      } else {
         return res
            .status(200)
            .send('Não foi possível salvar o novo documento');
      }
   }
   static async getSignedUrl(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const awsFileName = randomUUID();
      const url = await AwsServices.generateUrl(awsFileName);
      if (url) {
         return res.status(200).json({
            url,
            awsFileName
         });
      } else {
         return res.status(503).json({
            error: 'Não foi possível criar a url'
         });
      }
   }
   static async findById(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const id = String(req.query.id);
      const document = await DocumentRepository.findById(id);
      if (document) {
         return res.status(200).json(document);
      } else {
         return res.status(404).json({ error: 'Usuário não encontrado' });
      }
   }
   static async delete(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const { id, awsFileName } = req.query;
      const deleted = await AwsServices.delete(String(awsFileName));
      if (deleted) {
         const deletedPhoto = await DocumentRepository.delete(String(id));
         if (deletedPhoto) {
            return res.status(200).json(deletedPhoto);
         } else {
            return res.status(400).send('Não foi possível apagar a foto');
         }
      } else {
         res.status(500).send('Não foi possível apagar a foto na AWS');
      }
   }
   static async update(req: NextApiRequest, res: NextApiResponse) {
      await withAutentication(req, res);
      const { id, awsFileName } = req.query;
      if (req.body.updatedFile) {
         const deleted = await AwsServices.delete(String(awsFileName));
         delete req.body.uploadedBy;
         delete req.body.belongsTo;
         delete req.body.updatedFile;
         if (deleted) {
            const updatedDocument = await DocumentRepository.update(
               String(id),
               req.body
            );
            if (updatedDocument) {
               res.status(200).json(updatedDocument);
            } else {
               res.status(400).send(
                  'Não foi possível apagar o arquivo do banco de dados'
               );
            }
         } else {
            res.status(500).send('Não foi possível apagar o documento na AWS');
         }
      } else {
         delete req.body.uploadedBy;
         delete req.body.belongsTo;
         const updatedDocument = await DocumentRepository.update(
            String(id),
            req.body
         );
         if (updatedDocument) {
            res.status(200).json(updatedDocument);
         } else {
            res.status(400).send(
               'Não foi possível apagar o arquivo do banco de dados'
            );
         }
      }
   }
}
