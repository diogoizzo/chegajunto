import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';

export default async function readFile(
   req: NextApiRequest
): Promise<{ fields: formidable.Fields; files: formidable.Files }> {
   const form = formidable({
      maxFileSize: 1024 * 1024 * 50
   });
   return new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
         if (err) reject(err);
         resolve({ fields, files });
      });
   });
}
