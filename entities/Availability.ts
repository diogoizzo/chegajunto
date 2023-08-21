import Patient from './Patient';
import User from './User';

export default class Availabiliy {
   constructor(
      public id: string,
      public name: string,
      public professionals: User[],
      public patients: Patient[]
   ) {}
}
