import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import readFile from '../../../../lib/readFile';
import GoogleDriveServices from '../../../../services/GoogleDriveServices';
import isEmptyObject from '../../../../lib/isEmptyObject';

export const config = {
   api: {
      bodyParser: false,
      externalResolver: true
   }
};

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'PATCH') {
      const token = await getToken({ req });
      const id = String(req.query.id);
      if (token) {
         const { fields, files } = await readFile(req);
         if (isEmptyObject(files)) {
            const doc = await prisma.document.update({
               where: {
                  id: id
               },
               data: {
                  name: fields.name[0],
                  type: fields.type[0],
                  description: fields.description[0],
                  uploadedBy: {
                     connect: { id: fields.uploadedByUserId[0] }
                  },
                  belongsTo: {
                     connect: {
                        id: fields.belongsToPatientId[0]
                     }
                  }
               }
            });
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
                  const doc = await prisma.document.update({
                     where: {
                        id: id
                     },
                     data: {
                        name: fields.name[0],
                        type: fields.type[0],
                        description: fields.description[0],
                        uploadedBy: {
                           connect: { id: fields.uploadedByUserId[0] }
                        },
                        belongsTo: {
                           connect: {
                              id: fields.belongsToPatientId[0]
                           }
                        },
                        googleDriveId: newFileGoogleId,
                        mimeType: String(files.file[0].mimetype)
                     }
                  });
                  res.status(200).json(doc);
               } catch (error) {
                  res.status(503).json(error);
               }
            } else {
               res.status(503).send({
                  message:
                     'Não foi possível atualziar o documento no google drive'
               });
            }
         }
      } else {
         res.status(401).send({ message: 'Acesso negado' });
      }
      // const files = await GoogleDriveServices.readAll();
      // console.log(files);
      // const deletedFiles = await GoogleDriveServices.deleteAll(files);
   } else {
      return res
         .status(405)
         .json({ error: 'Esse tipo de requisição não é suportada nesta rota' });
   }
}
