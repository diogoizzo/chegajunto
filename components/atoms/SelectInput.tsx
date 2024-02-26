import IPatient from '../../interfaces/IPatient';
import IUser from '../../interfaces/IUser';
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue
} from '../ui/select';

interface SelectInputProps {
   title: string;
   options: IUser[] | IPatient[] | undefined;
   name: string;
   placeholder: string;
   state?: string;
   setState?: Function;
}

function SelectInput({
   title,
   options,
   state,
   placeholder,
   setState,
   name
}: SelectInputProps) {
   return (
      <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-cool-gray-900 border-opacity-10">
         <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
            <span className="text-md font-medium text-cool-gray-500">
               {title}
            </span>
         </div>
         <div className="w-full sm:w-2/3 px-4">
            <div className="max-w-xl">
               <Select
                  name={name}
                  value={state}
                  onValueChange={(e) =>
                     setState &&
                     setState((prev: any) => ({
                        ...prev,
                        [name]: e
                     }))
                  }
               >
                  <SelectTrigger className="w-full text-cool-gray-200 border py-6 hover:border-cool-gray-900  border-raisin-black-lighter">
                     <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                     <SelectGroup>
                        {options &&
                           options
                              .sort((a, b) => a.name.localeCompare(b.name))
                              .map((user) => (
                                 <SelectItem
                                    key={user.id}
                                    value={user.id || ''}
                                 >
                                    {user.name}
                                 </SelectItem>
                              ))}
                     </SelectGroup>
                  </SelectContent>
               </Select>
            </div>
         </div>
      </div>
   );
}
export default SelectInput;
