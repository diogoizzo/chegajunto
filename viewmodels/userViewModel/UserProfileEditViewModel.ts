import { UseQueryResult } from 'react-query';
import User from '../../entities/User';

export default class UserProfileEditViewModel {
   constructor(
      public activeUserQuery: UseQueryResult<any, unknown>,
      public activeUser: User
   ) {}
}
