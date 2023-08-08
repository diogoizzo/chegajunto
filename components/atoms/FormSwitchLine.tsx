import { Switch } from '../ui/switch';
interface FormInputLineProps {
   label: string;
   name: string;
   state?: boolean | null;
   setState?: Function;
}

export default function FormSwitchLine({
   label,
   name,
   state,
   setState
}: FormInputLineProps) {
   return (
      <div className="flex flex-wrap items-center -mx-4 pb-8 mb-8 border-b border-cool-gray-900 border-opacity-10">
         <div className="w-full sm:w-1/3 px-4 mb-4 sm:mb-0">
            <span className="text-md font-medium text-cool-gray-500">
               {label}
            </span>
         </div>
         <div className="w-full sm:w-2/3 px-4">
            <div className="max-w-xl">
               <div className="flex flex-wrap items-center -mx-3">
                  <div className="w-full px-3 mb-3 sm:mb-0">
                     <Switch
                        className=" bg-raisin-black-lighter checked:bg-yinmn-blue-200"
                        checked={Boolean(state)}
                        name={name}
                        onCheckedChange={(value) =>
                           setState &&
                           setState((prev: any) => ({
                              ...prev,
                              [name]: value
                           }))
                        }
                     />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
