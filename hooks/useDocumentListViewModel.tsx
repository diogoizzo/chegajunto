import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import IDocument from '../interfaces/IDocument';
import { useToast } from '../components/ui/use-toast';
import { useQuery } from 'react-query';
import DocumentServices from '../services/DocumentServices';
import SuccessMsg from '../components/parts/SuccessMsg';
import DocumentViewModel from '../viewmodels/documentViewModel/DocumentViewModel';
import { useSession } from 'next-auth/react';

export default function useDocumentListViewModel() {
   const router = useRouter();

   const urlQuery = router.query;

   const [search, setSearch] = useState<IDocument[] | null>(null);

   const { toast } = useToast();

   const { data: session } = useSession();
   //@ts-ignore
   const userType = String(session?.type);
   //@ts-ignore
   const activeUserId = String(session?.id);

   const queryDocument = useQuery(['documents'], () =>
      DocumentServices.getAll()
   );

   useEffect(() => {
      if (urlQuery.saved) {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Novo Documento Criado" />,
            description: (
               <p className="text-cool-gray-500">
                  O novo documento foi salvo no banco de dados com sucesso.
               </p>
            )
         });
      } else if (urlQuery.deleted) {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Documento Apagado" />,
            description: (
               <p className="text-cool-gray-500">
                  O documento foi apagado com sucesso.
               </p>
            )
         });
      } else if (urlQuery.updated) {
         toast({
            // @ts-expect-error
            title: <SuccessMsg msg="Documento Atualizado" />,
            description: (
               <p className="text-cool-gray-500">
                  O documento foi atualizado com sucesso.
               </p>
            )
         });
      } else if (urlQuery.updateError) {
         toast({
            // @ts-expect-error
            title: (
               <div className="flex w-full space-x-3  justify-start items-center">
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 24 24"
                     fill="#ef4444"
                     className=" h-6 shadow-sm"
                  >
                     <path
                        fillRule="evenodd"
                        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        clipRule="evenodd"
                     />
                  </svg>
                  <h2 className=" text-cool-gray-200">Ocorreu um Erro!</h2>
               </div>
            ),
            description: (
               <p className="text-cool-gray-500">
                  Não foi possível atualizar o documento.
               </p>
            )
         });
      }
   }, [toast, urlQuery]);
   return DocumentViewModel.listView(
      search,
      setSearch,
      queryDocument,
      userType,
      activeUserId
   );
}
