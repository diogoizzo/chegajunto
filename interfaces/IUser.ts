export default interface IUser {
   name: string;
   email: string;
   phone: string;
   address: string;
   cpf: string;
   type: 'Psicólogo' | 'Estagiário';
   institution?: string;
   period?: number;
   crp?: string;
   id?: string;
   userLink: string;
}
