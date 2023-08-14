import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';
import formidable from 'formidable';
import GoogleDriveServices from '../../../../services/GoogleDriveServices';

export const config = {
   api: {
      bodyParser: false
   }
};

async function readFile(
   req: NextApiRequest
): Promise<{ fields: formidable.Fields; files: formidable.Files }> {
   const form = formidable();
   return new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
         if (err) reject(err);
         resolve({ fields, files });
      });
   });
}

export default async function handler(
   req: NextApiRequest,
   res: NextApiResponse
) {
   if (req.method === 'POST') {
      const token = await getToken({ req });
      if (token) {
         //  const { files } = await readFile(req);
         //  const resposta = await GoogleDriveServices.uploadFile(files.image[0]);
         //  const files = await GoogleDriveServices.readAll();
         //  await GoogleDriveServices.deleteAll(files);
         res.status(200).send('ok');
      } else {
         res.status(401).send({ message: 'Acesso negado' });
      }
   } else {
      return res
         .status(405)
         .json({ error: 'Esse tipo de requisição não é suportada nesta rota' });
   }
}
