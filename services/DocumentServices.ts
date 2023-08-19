import axios from 'axios';
import IDocument from '../interfaces/IDocument';

interface createFromFromArgs {
   form: IDocument;
   selectedFile: File;
}

export default class DocumentServices {
   static async create(form: FormData) {
      const res = await axios.post('/api/documentos/', form);
      return res;
   }
   static async createFromForm({ form, selectedFile }: createFromFromArgs) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      delete form.uploadedBy;
      delete form.belongsTo;
      for (let [key, value] of Object.entries(form))
         formData.append(key, value);
      const res = await DocumentServices.create(formData);
      return res.data;
   }

   static async getAll() {
      try {
         const res = await axios.get('/api/documentos');
         return res.data;
      } catch (e) {
         console.log(e);
      }
   }
   static async getById(id: string) {
      try {
         const res = await axios.get(`/api/documentos/${id}`);
         return res.data;
      } catch (e) {
         console.log(e);
      }
   }
}
