import dayjs from 'dayjs';
import Document from '../../entities/Document';

export default function documentExportFormatter(docs: Document[]) {
   return docs.map((doc) => {
      return {
         Nome: doc.name,
         Tipo: doc.type,
         Formato: doc.type?.split('/')[1],
         'Responsável pelo Upload': doc.uploadedBy?.name,
         'Pertence ao Paciente': doc.belongsTo?.name,
         Descrição: doc.description,
         'Data do Upload': dayjs(doc.createdAt).format('DD/MM/YYYY')
      };
   });
}
