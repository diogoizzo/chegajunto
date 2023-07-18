import Menu from '../../components/parts/Menu';
import PageHeader from '../../components/parts/PageHeader';
import DocumentsList from '../../components/sections/DocumentsList';

export default function Documentos<NextPage>() {
   return (
      <Menu>
         <PageHeader
            title="Documentos"
            subtitle="Veja todos os documentos cadastrados no sistema."
            btnHref="/"
         />
         <DocumentsList />
      </Menu>
   );
}

Documentos.auth = true;
