import { useState } from 'react';
import Menu from '../../components/parts/Menu';
import axios from 'axios';

export default function Compromissos<NextPage>() {
   const [selectedFile, setSelectedFile] = useState<File>();

   async function handleUpload() {
      try {
         if (!selectedFile) return;
         const formData = new FormData();
         formData.append('image', selectedFile);
         const { data } = await axios.post('/api/documentos/upload', formData);
         console.log(data);
      } catch (error: any) {
         console.log(error.response?.data);
      }
   }
   return (
      <Menu>
         <div className="w-full h-full flex items-center justify-center">
            <label>
               <input
                  type="file"
                  name=""
                  id=""
                  onChange={({ target }) => {
                     if (target.files) {
                        setSelectedFile(target.files[0]);
                     }
                  }}
               />
            </label>
            <button className="px-4 py-2 bg-slate-500" onClick={handleUpload}>
               Enviar
            </button>
         </div>
      </Menu>
   );
}

Compromissos.auth = true;
