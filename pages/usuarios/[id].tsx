import Menu from '../../components/parts/Menu';
import PageHeader from '../../components/parts/PageHeader';
import UserDisplay from '../../components/sections/UserDisplay';

import useUserDisplayViewModel from '../../hooks/useUserDisplayViewModel';

export default function UserDisplayView<NextPage>() {
   const viewModel = useUserDisplayViewModel();

   return (
      <Menu>
         <PageHeader
            title={viewModel.user?.name}
            subtitle="Veja as informações do usuário acima."
            btnText="Editar"
            search={false}
            btnHref={viewModel.user?.userEditLink || '/'}
         />
         <UserDisplay user={viewModel.user} />
      </Menu>
   );
}

UserDisplayView.auth = true;
