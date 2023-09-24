import { UseQueryResult } from 'react-query';
import User from '../../entities/User';

export default class UserDisplayViewModel {
   constructor(public query: UseQueryResult<any, unknown>, public user: User) {}
}
