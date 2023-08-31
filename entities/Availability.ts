import IAvailability from '../interfaces/IAvailability';
import Patient from './Patient';
import User from './User';

export default class Availabiliy implements IAvailability {
   constructor(
      public id: string,
      public dayOfWeek: string,
      public time: string,
      public professionals: User[],
      public patients: Patient[]
   ) {}
}
