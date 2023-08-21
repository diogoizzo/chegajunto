import DisplayLine from '../atoms/DisplayLine';
import Document from '../../entities/Document';
import Image from 'next/image';

interface DocumentDisplayProps {
   document?: Document;
}

function DocumentDisplay({ document }: DocumentDisplayProps) {
   return (
      <section className="py-3 ">
         <div className="container px-4 mx-auto">
            <div className="p-10 bg-raisin-black rounded-lg">
               <DisplayLine label="Nome" content={document?.name} />
               <DisplayLine label="Tipo" content={document?.type} />
               <DisplayLine
                  label="Responsável pelo Upload"
                  content={document?.uploadedBy?.name}
               />
               <DisplayLine
                  label="A Quem Pertence"
                  content={document?.belongsTo?.name}
               />
               <DisplayLine
                  label="Descrição"
                  content={document?.belongsTo?.name}
               />
               <DisplayLine
                  label="Formato do Arquivo"
                  content={document?.mimeType?.split('/')[1]}
               />
            </div>
         </div>
      </section>
   );
}
export default DocumentDisplay;
