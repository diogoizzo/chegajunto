interface FormInputLineProps {
   label: string;
   name: string;
   type: string;
   placeHolder?: string;
   state?: string | null;
   setState?: Function;
}

export default function FormInputLine({
   label,
   type,
   placeHolder,
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
                     <input
                        value={state ?? ''}
                        name={name}
                        className="block text-md placeholder:text-gray-700 py-4 px-3 w-full text-sm text-cool-gray-200 placeholder-cool-gray-200 font-medium outline-none bg-transparent border border-raisin-black-lighter hover:border-cool-gray-900 focus-within:border-carolina-blue rounded-lg"
                        type={type}
                        placeholder={placeHolder}
                        onChange={(e) =>
                           setState &&
                           setState((prev: any) => ({
                              ...prev,
                              [name]: e.target.value
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
