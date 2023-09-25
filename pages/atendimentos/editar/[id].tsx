import dayjs from 'dayjs';
import FormPageHeader from '../../../components/parts/FromPageHeader';
import Menu from '../../../components/parts/Menu';
import ConsultationForm from '../../../components/sections/ConsultationForm';
import useConsultationEditViewModel from '../../../hooks/useConsultationEditViewModel';

export default function ConsultationEditView() {
   const viewModel = useConsultationEditViewModel();
   console.log(viewModel.consultation);
   return (
      <Menu>
         <FormPageHeader
            title={`${dayjs(viewModel.consultation?.createdAt).format(
               'DD/MM/YYYY'
            )} - ${viewModel?.consultation?.patient?.name}`}
            subtitle="Edite as informações do atendimento acima."
         />
         {viewModel.consultation ? (
            <ConsultationForm consultation={viewModel.consultation} />
         ) : null}
      </Menu>
   );
}

ConsultationEditView.auth = true;
