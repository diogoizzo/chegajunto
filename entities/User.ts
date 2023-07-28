import IUser from '../interfaces/IUser';

export default class User implements IUser {
   constructor(
      public name: string,
      public email: string,
      public phone: string,
      public address: string,
      public cpf: string,
      public type: 'Pscicólogo' | 'Estagiário',
      public institution?: string,
      public period?: number,
      public crp?: string,
      public id?: string
   ) {}
   static createMany(users: IUser[]): User[] {
      return users.map((user: any) => {
         const {
            id,
            name,
            email,
            phone,
            address,
            cpf,
            type,
            crp,
            institution,
            period
         } = user;
         return new User(
            name,
            email,
            phone,
            address,
            cpf,
            type,
            institution,
            period,
            crp,
            id
         );
      });
   }
   static createFormObject({
      id,
      name,
      email,
      phone,
      address,
      cpf,
      type,
      crp,
      institution,
      period
   }: IUser): User {
      return new User(
         name,
         email,
         phone,
         address,
         cpf,
         type,
         institution,
         period,
         crp,
         id
      );
   }

   get userLink() {
      return `/usuarios/${this.id}`;
   }
   get userEditLink() {
      return `/usuarios/editar/${this.id}`;
   }
}
