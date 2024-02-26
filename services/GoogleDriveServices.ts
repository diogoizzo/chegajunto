import formidable from 'formidable';
import fs from 'fs';
import {
   GoogleAuth,
   JSONClient
} from 'google-auth-library/build/src/auth/googleauth';
import { drive_v3, google } from 'googleapis';

class GoogleDriveServices {
   auth: GoogleAuth<JSONClient>;

   drive: drive_v3.Drive;

   fileId: string = '';

   constructor() {
      this.auth = new google.auth.GoogleAuth({
         keyFile: './googledrive.json',
         scopes: ['https://www.googleapis.com/auth/drive']
      });
      this.drive = google.drive({
         version: 'v3',
         auth: this.auth
      });
   }

   async createPublicPermission() {
      try {
         const fileId = this.fileId;
         await this.drive.permissions.create({
            fileId,
            requestBody: {
               role: 'reader',
               type: 'anyone'
            }
         });
         let result = await this.drive.files.get({
            fileId,
            fields: 'id, webContentLink, webViewLink'
         });
         return result.data.id;
      } catch (error) {
         console.log(error);
      }
   }
   static async uploadFile(file?: formidable.File) {
      if (!file) return;
      const googleService = new GoogleDriveServices();
      try {
         const requestBody = {
            name: file.originalFilename,
            filds: 'id'
         };

         const media = {
            mimeType: file.mimetype || '',
            body: fs.createReadStream(file.filepath)
         };

         const response = await googleService.drive.files.create({
            requestBody,
            media: media
         });
         googleService.fileId = response.data.id || '';
         return googleService.createPublicPermission();
      } catch (err) {
         console.log(err);
      }
   }
   static async deleteById(id: string) {
      const googleService = new GoogleDriveServices();
      try {
         const res = await googleService.drive.files.delete({
            fileId: id
         });
         return res;
      } catch (error) {
         console.log(error);
      }
   }
   static async deleteAll(files: any) {
      const googleService = new GoogleDriveServices();
      try {
         for (const file of files) {
            if (file.name != 'documentos') {
               const res = await googleService.drive.files.delete({
                  fileId: file.id
               });
            }
         }
         return;
      } catch (err) {
         // TODO(developer) - Handle error
         throw err;
      }
   }

   static async readAll() {
      const googleService = new GoogleDriveServices();
      try {
         const res = await googleService.drive.files.list({
            q: '',
            fields: 'nextPageToken, files(id, name)',
            spaces: 'drive'
         });
         return res.data.files;
      } catch (err) {
         // TODO(developer) - Handle error
         throw err;
      }
   }
}

export default GoogleDriveServices;
