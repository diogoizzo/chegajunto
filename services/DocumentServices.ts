import axios from 'axios';

export default class ImageServices {
   static async getAll() {
      const { data } = await axios.get(`/api/documentos/`);
      return data;
   }
   static async getById(id: string) {
      if (id) {
         const { data } = await axios.get(`/api/documentos/${id}`);
         return data;
      }
   }
   static async create({ form, src, awsFileName }: any) {
      const sendForm = {
         ...form,
         src,
         awsFileName
      };
      const { data } = await axios.post('/api/documentos', sendForm);
      return data;
   }
   static async delete(doc: any) {
      if (doc) {
         const { data } = await axios.delete(
            `/api/documentos/${doc.id}/${doc.awsFileName}`
         );
         return data;
      }
   }
   static async update({ doc, form }: any) {
      if (doc && form) {
         console.log('entrei no service de update');
         console.log(form);
         console.log(doc);
         const res = await axios.put(
            `/api/documentos/${doc.id}/${doc.awsFileName}`,
            form
         );
         return res.data;
      }
   }
}
