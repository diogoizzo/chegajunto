import IUser from '../../interfaces/IUser';

export default function userExportFormatter(users: IUser[]) {
   return users.map((user) => {
      return {
         Nome: user.name,
         Email: user.email,
         CPF: user.cpf,
         Telefone: user.phone,
         Endereço: user.address,
         'Tipo de Usuário': user.type,
         'Instituição de Ensino':
            user.type === 'Estagiário' ? user.institution : 'Não se aplica',
         'Período de Faculdade':
            user.type === 'Estagiário' ? user.period : 'Não se aplica',
         CRP: user.type === 'Psicólogo' ? user.crp : 'Não se aplica',
         Disponibilidades: user.availabilities
            ?.map(
               (availability) =>
                  `${availability.dayOfWeek} às ${availability.time}`
            )
            .join(' - ')
      };
   });
}
