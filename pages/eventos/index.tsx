import Menu from '../../components/parts/Menu';
import LoadingWithTitle from '../../components/sections/LoadingWithTitle';

export default function Eventos<NextPage>() {
   return (
      <Menu>
         <LoadingWithTitle title="Carregando documento..." />
      </Menu>
   );
}

Eventos.auth = true;
