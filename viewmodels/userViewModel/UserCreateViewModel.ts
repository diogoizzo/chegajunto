import { NextRouter } from 'next/router';
import User from '../../entities/User';
import { UseMutationResult } from 'react-query';
import { UserFromData } from '../../components/sections/UserForm';
import { Dispatch, SetStateAction } from 'react';
import UserServices from '../../services/UserServices';
import { flushSync } from 'react-dom';

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
      public errorToast: (msg: string) => void,
      public router: NextRouter,
      public user?: User
   ) {}

   async register(e: any) {
      e.preventDefault();
      if (!this?.user) {
         if (!this.form.name) {
            this.errorToast('É preciso informar ao menos o nome do paciente');
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
      } else {
         delete this.form?.password;
         delete this.form?.confirmPassword;
         this.userUpdateMutation.mutate(this.form);
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
