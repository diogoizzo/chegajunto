interface DisplayLineProps {
   label: string;
   content?: string;
}

export default function DisplayLine({ label, content }: DisplayLineProps) {
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
                     <p className="text-md text-cool-gray-200  font-medium ">
                        {content}
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
