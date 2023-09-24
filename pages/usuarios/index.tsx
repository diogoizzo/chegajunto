import Menu from '../../components/parts/Menu';
import PageHeader from '../../components/parts/PageHeader';
import UserTable from '../../components/sections/UserTable';
import Loading from '../../components/sections/loading';
import useUserListViewModel from '../../hooks/useUserListViewModel';

export default function UserListView<NextPage>() {
   const viewModel = useUserListViewModel();

   return (
      <Menu>
         <PageHeader
            title="Usuários"
            subtitle="Veja todos os usuários cadastrados no sistema."
            btnHref="/auth/signup"
            data={viewModel.users}
            setData={viewModel.setSearch}
         />
         {viewModel.usersQuery.isLoading ? (
            <Loading />
         ) : (
            <UserTable data={viewModel.search ?? viewModel.users} />
         )}
      </Menu>
   );
}

UserListView.auth = true;
