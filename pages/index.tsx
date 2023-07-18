import Menu from '../components/parts/Menu';
import PageHeader from '../components/parts/PageHeader';

export default function Dashboard<NextPage>() {
   return (
      <Menu>
         <PageHeader
            title="Dashboard"
            subtitle="Veja o resumo das suas informações no sistema"
            btnHref="/"
         />
      </Menu>
   );
}

Dashboard.auth = true;
