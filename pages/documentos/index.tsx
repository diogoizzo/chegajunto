import { useRouter } from 'next/router';
import Menu from '../../components/parts/Menu';
import PageHeader from '../../components/parts/PageHeader';
import DocumentsList from '../../components/sections/DocumentsList';
import { useEffect, useState } from 'react';
import { useToast } from '../../components/ui/use-toast';
import { useQuery } from 'react-query';
import Document from '../../entities/Document';
import SuccessMsg from '../../components/parts/SuccessMsg';
import DocumentServices from '../../services/DocumentServices';
import LoadingWithTitle from '../../components/sections/LoadingWithTitle';

export default function Documentos<NextPage>() {
   const router = useRouter();

   const urlQuery = router.query;

   const [search, setSearch] = useState(null);

   const { toast } = useToast();

   const queryDocument = useQuery(['documents'], () =>
      DocumentServices.getAll()
   );

   const allDocuments =
      queryDocument.data && Document.createMany(queryDocument.data);

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
      }
   }, [toast, urlQuery]);
   console.log(allDocuments);
   return (
      <Menu>
         <PageHeader
            title="Documentos"
            subtitle="Veja todos os documentos cadastrados no sistema."
            btnHref="/documentos/novo"
            data={allDocuments}
            setData={setSearch}
         />
         {queryDocument.isLoading ? (
            <LoadingWithTitle title="Carregando todos os documentos..." />
         ) : null}
         {queryDocument.isFetched ? (
            allDocuments.length > 0 ? (
               <DocumentsList documents={search ?? allDocuments} />
            ) : (
               <div className="flex w-full justify-center mt-20">
                  <h2 className="text-4xl text-slate-800">
                     Nenhum documento encontrado
                  </h2>
               </div>
            )
         ) : null}
      </Menu>
   );
}

Documentos.auth = true;
