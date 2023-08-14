const google = require('googleapis');

const auth = new google.auth.GoogleAuth({
   keyFile: './googledrive.json',
   scopes: ['https://www.googleapis.com/auth/drive']
});
const drive = google.drive({
   version: 'v3',
   auth: auth
});

async function listAll() {
   const files: any = [];
   try {
      const res = await drive.files.list({
         q: "mimeType='image/jpeg'",
         fields: 'nextPageToken, files(id, name)',
         spaces: 'drive'
      });
      return res.data.files;
   } catch (err) {
      // TODO(developer) - Handle error
      throw err;
   }
}
