import FormPageHeader from '../../components/parts/FromPageHeader';
import UserForm from '../../components/sections/UserForm';
import Menu from '../../components/parts/Menu';
import useUserProfileEditViewModel from '../../hooks/useUserProfileEditViewModel';
import LoadingWithTitle from '../../components/sections/LoadingWithTitle';

export default function ProfileEditView() {
   const viewModel = useUserProfileEditViewModel();
   return (
      <Menu>
         <FormPageHeader
            title="Perfil"
            subtitle="Edit as informações do seu perfil de usuário"
         />
         {viewModel.activeUserQuery.isLoading ? null : (
            <UserForm activeUser={viewModel?.activeUser} />
         )}
      </Menu>
   );
}
ProfileEditView.auth = true;
