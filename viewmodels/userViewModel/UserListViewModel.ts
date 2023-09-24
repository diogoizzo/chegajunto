import { Dispatch, SetStateAction } from 'react';
import IUser from '../../interfaces/IUser';
import { ParsedUrlQuery } from 'querystring';
import { UseQueryResult } from 'react-query';
import User from '../../entities/User';

export default class UserListViewModel {
   constructor(
      public search: IUser[] | null,
      public setSearch: Dispatch<SetStateAction<IUser[] | null>>,
      public urlQuery: ParsedUrlQuery,
      public usersQuery: UseQueryResult<User[] | undefined, unknown>,
      public users: User[]
   ) {}
}
