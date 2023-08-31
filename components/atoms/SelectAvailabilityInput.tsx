import IAvailability from '../../interfaces/IAvailability';
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue
} from '../ui/select';

interface SelectInputProps {
   title: string;
   options: IAvailability[] | undefined;
   placeholder: string;
   state?: IAvailability | null;
   setState?: Function;
}

function SelectAvailabilityInput({
   title,
   options,
   placeholder,
   setState
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
               {options?.length && options?.length > 0 ? (
                  <Select onValueChange={(e) => setState && setState(e)}>
                     <SelectTrigger className="w-full text-cool-gray-200 border py-6 hover:border-cool-gray-900  border-raisin-black-lighter">
                        <SelectValue placeholder={placeholder} />
                     </SelectTrigger>
                     <SelectContent>
                        {options?.map((availability) => (
                           <SelectItem
                              key={availability.id}
                              value={availability.id || ''}
                           >
                              {`${availability.dayOfWeek} às ${availability.time}`}
                           </SelectItem>
                        ))}
                     </SelectContent>
                  </Select>
               ) : (
                  <span className="text-red-200">
                     Esse usuário não possui nenhuma disponibilidade cadastrada.
                  </span>
               )}
            </div>
         </div>
      </div>
   );
}
export default SelectAvailabilityInput;
