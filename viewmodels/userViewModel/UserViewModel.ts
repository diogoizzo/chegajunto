import { Dispatch, SetStateAction } from 'react';
import IUser from '../../interfaces/IUser';
import { ParsedUrlQuery } from 'querystring';
import { UseMutationResult, UseQueryResult } from 'react-query';
import User from '../../entities/User';
import { UserFromData } from '../../components/sections/UserForm';
import { NextRouter } from 'next/router';
import UserListViewModel from './UserListViewModel';
import UserDisplayViewModel from './UserDisplayViewModel';
import UserCreateViewModel from './UserCreateViewModel';
import IAvailability from '../../interfaces/IAvailability';
import { IAvailabilityForm } from '../../components/sections/AvailabilityForm';
import UserAvailabilityViewModel from './UserAvailabilityViewModel';

export default class UserViewModel {
   static listView(
      search: IUser[] | null,
      setSearch: Dispatch<SetStateAction<IUser[] | null>>,
      urlQuery: ParsedUrlQuery,
      usersQuery: UseQueryResult<User[] | undefined, unknown>
   ) {
      const users = (usersQuery.data && User.createMany(usersQuery.data)) || [];
      return new UserListViewModel(
         search,
         setSearch,
         urlQuery,
         usersQuery,
         users
      );
   }
   static displayView(query: UseQueryResult<any, unknown>) {
      const user = query.data && User.createFormObject(query.data);
      return new UserDisplayViewModel(query, user);
   }
   static createAndEditView(
      isOpen: boolean,
      setIsOpen: Dispatch<SetStateAction<boolean>>,
      form: UserFromData,
      setForm: Dispatch<SetStateAction<UserFromData>>,
      userUpdateMutation: UseMutationResult<
         any,
         unknown,
         UserFromData,
         unknown
      >,
      userDeleteMutation: UseMutationResult<
         any,
         unknown,
         string | undefined,
         unknown
      >,

      errorToast: (msg: string) => void,
      router: NextRouter,
      user?: User
   ) {
      return new UserCreateViewModel(
         isOpen,
         setIsOpen,
         form,
         setForm,
         userUpdateMutation,
         userDeleteMutation,
         errorToast,
         router,
         user
      );
   }
   static userAvailablityView(
      availabilities: IAvailability[],
      form: IAvailabilityForm,
      setForm: Dispatch<SetStateAction<IAvailabilityForm>>,
      createAvailabilitiyMutation: UseMutationResult<
         any,
         unknown,
         any,
         unknown
      >,
      deleteAvailabilitiyMutation: UseMutationResult<
         any,
         unknown,
         {
            userId: string;
            availabilityId: string;
         },
         unknown
      >,
      errorToast: (msg: string) => void,
      userId?: string
   ) {
      return new UserAvailabilityViewModel(
         availabilities,
         form,
         setForm,
         createAvailabilitiyMutation,
         deleteAvailabilitiyMutation,
         errorToast,
         userId
      );
   }
}
