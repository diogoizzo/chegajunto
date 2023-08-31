import Link from 'next/link';
import IPatient from '../../interfaces/IPatient';

interface MissingDocumentAlertProps {
   patient?: IPatient;
}

export default function MissingDocumentAlert({
   patient
}: MissingDocumentAlertProps) {
   return (
      <div className="w-full bg-red-200  rounded-md shadow-md  p-4  mb-6">
         <div className="flex items-end ">
            <svg
               className="h-8 text-red-950 mr-3"
               xmlns="http://www.w3.org/2000/svg"
               viewBox="0 0 24 24"
               id="exclamation-triangle"
            >
               <path
                  fill="currentcolor"
                  d="M12,16a1,1,0,1,0,1,1A1,1,0,0,0,12,16Zm10.67,1.47-8.05-14a3,3,0,0,0-5.24,0l-8,14A3,3,0,0,0,3.94,22H20.06a3,3,0,0,0,2.61-4.53Zm-1.73,2a1,1,0,0,1-.88.51H3.94a1,1,0,0,1-.88-.51,1,1,0,0,1,0-1l8-14a1,1,0,0,1,1.78,0l8.05,14A1,1,0,0,1,20.94,19.49ZM12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8Z"
               ></path>
            </svg>
            <h2 className="text-red-950 text-xl font-semibold">
               Faltam Documentos do Paciente
            </h2>
         </div>
         <div className="mt-1">
            <p className="text-red-950/80">
               Ainda estão faltando os seguintes documentos do paciente acima:
            </p>
            <ul className="list-disc list-inside mt-1 font-medium text-red-950/80">
               {patient?.hasAutorization ? null : (
                  <Link
                     as="/documentos/novo"
                     href={patient?.uploadAutorizationLink || '/'}
                  >
                     <li>Autorização</li>
                  </Link>
               )}
               {patient?.hasSorting ? null : (
                  <Link
                     as="/documentos/novo"
                     href={patient?.uploadSortingLink || '/'}
                  >
                     <li>Triagem</li>
                  </Link>
               )}
            </ul>
         </div>
      </div>
   );
}
