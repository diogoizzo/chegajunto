import { NextRouter } from 'next/router';
import User from '../../entities/User';
import { UseMutationResult } from 'react-query';
import { UserFromData } from '../../components/sections/UserForm';
import { Dispatch, SetStateAction } from 'react';
import UserServices from '../../services/UserServices';

export default class UserCreateViewModel {
   constructor(
      public isOpen: boolean,
      public setIsOpen: Dispatch<SetStateAction<boolean>>,
      public form: UserFromData,
      public setForm: Dispatch<SetStateAction<UserFromData>>,
      public userUpdateMutation: UseMutationResult<
         any,
         unknown,
         UserFromData,
         unknown
      >,
      public userDeleteMutation: UseMutationResult<
         any,
         unknown,
         string | undefined,
         unknown
      >,
      public userProfileUpdate: UseMutationResult<any, unknown, any, unknown>,
      public errorToast: (msg: string) => void,
      public router: NextRouter,
      public user?: User
   ) {}

   async register(e: any, user?: User, activeUser?: User) {
      e.preventDefault();
      if (user) {
         delete this.form?.password;
         delete this.form?.confirmPassword;
         this.userUpdateMutation.mutate(this.form);
      } else if (activeUser) {
         if (!this.form.name) {
            this.errorToast('É preciso informar ao menos o nome do usuário');
         } else if (!this.form.email) {
            this.errorToast(
               'É necessário informar o email para login do usuário'
            );
         } else if (!this.form.password) {
            this.errorToast('É necessário informar uma senha');
         } else if (this.form.password !== this.form.confirmPassword) {
            this.errorToast('As senhas precisam ser iguais');
         } else {
            this.userProfileUpdate.mutate(this.form);
         }
      } else {
         console.log('Entrei na criação de usuário');
         if (!this.form.name) {
            this.errorToast('É preciso informar ao menos o nome do usuário');
         } else if (!this.form.email) {
            this.errorToast(
               'É necessário informar o email para login do usuário'
            );
         } else if (!this.form.password) {
            this.errorToast('É necessário informar uma senha');
         } else if (this.form.password !== this.form.confirmPassword) {
            this.errorToast('As senhas precisam ser iguais');
         } else {
            const isRegistred = await UserServices.register(this.form);
            if (isRegistred) {
               this.router.push('/usuarios?saved=true');
            }
         }
      }
   }
   deleteAction(setIsOpen: Dispatch<SetStateAction<boolean>>) {
      setIsOpen(false);
      this.userDeleteMutation.mutate(this.user?.id);
   }

   closeModal(setIsOpen: Dispatch<SetStateAction<boolean>>) {
      setIsOpen(false);
   }

   openConfirmationModal(e: any, setIsOpen: Dispatch<SetStateAction<boolean>>) {
      e.preventDefault();
      setIsOpen(true);
   }
}
