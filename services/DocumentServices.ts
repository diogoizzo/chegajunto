import axios from 'axios';
import IDocument from '../interfaces/IDocument';

interface createFromFromArgs {
   form: IDocument;
   selectedFile: File;
}
interface updateFromFromArgs {
   form: IDocument;
   selectedFile?: File;
}

export default class DocumentServices {
   static async create(form: FormData, file: File) {
      console.log('Arquivo para upload: ', file);
      const res = await axios.post('/api/documentos/', form, {
         headers: {
            'content-type': 'multipart/form-data'
         }
      });
      return res;
   }

   static createFormData({ form, selectedFile }: updateFromFromArgs): FormData {
      const formData = new FormData();
      selectedFile && formData.append('file', selectedFile);
      delete form.uploadedBy;
      delete form.belongsTo;
      for (let [key, value] of Object.entries(form))
         formData.append(key, value);
      return formData;
   }

   static async createFromForm({ form, selectedFile }: createFromFromArgs) {
      const formData = DocumentServices.createFormData({ form, selectedFile });
      const res = await DocumentServices.create(formData, selectedFile);
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
   static async update({
      form,
      selectedFile
   }: updateFromFromArgs): Promise<IDocument> {
      const formData = DocumentServices.createFormData({ form, selectedFile });
      const res = await axios.patch(
         `/api/documentos/update/${form.id}`,
         formData,
         {
            headers: {
               'content-type': 'multipart/form-data'
            }
         }
      );
      return res.data;
   }
   static async delete(id?: string): Promise<void> {
      if (id) {
         const rest = await axios.delete(`/api/documentos/${id}`);
         return rest.data;
      }
   }
}
