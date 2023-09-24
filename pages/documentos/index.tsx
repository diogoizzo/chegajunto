import { useRouter } from 'next/router';
import Menu from '../../components/parts/Menu';
import DocumentsList from '../../components/sections/DocumentsList';
import { useEffect, useState } from 'react';
import { useToast } from '../../components/ui/use-toast';
import { useQuery } from 'react-query';
import Document from '../../entities/Document';
import SuccessMsg from '../../components/parts/SuccessMsg';
import DocumentServices from '../../services/DocumentServices';
import LoadingWithTitle from '../../components/sections/LoadingWithTitle';
import DocumentPageHeader from '../../components/parts/DocumentPageHeader';
import IDocument from '../../interfaces/IDocument';
import useDocumentListViewModel from '../../hooks/useDocumentListViewModel';

export default function Documentos<NextPage>() {
   const viewModel = useDocumentListViewModel();
   return (
      <Menu>
         <DocumentPageHeader
            title="Documentos"
            subtitle="Veja todos os documentos cadastrados no sistema."
            btnHref="/documentos/novo"
            data={viewModel.allDocuments}
            setData={viewModel.setSearch}
         />
         {viewModel.queryDocument.isLoading ? (
            <LoadingWithTitle title="Carregando todos os documentos..." />
         ) : null}
         {viewModel.queryDocument.isFetched ? (
            viewModel.allDocuments.length > 0 ? (
               <DocumentsList
                  documents={viewModel.search ?? viewModel.allDocuments}
               />
            ) : (
               <div className="flex w-full justify-center mt-20">
                  <h2 className="text-4xl text-slate-700">
                     Nenhum documento encontrado
                  </h2>
               </div>
            )
         ) : null}
      </Menu>
   );
}

Documentos.auth = true;
