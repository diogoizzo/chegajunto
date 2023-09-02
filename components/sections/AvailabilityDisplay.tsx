import IAvailability from '../../interfaces/IAvailability';

function AvailabilityDisplay({
   availabilities
}: {
   availabilities: IAvailability[];
}) {
   return (
      <div className="p-10 bg-raisin-black rounded-lg mt-4 border border-raisin-black-lighter">
         <div className="flex flex-wrap items-center justify-between -mx-4  pb-6 border-b border-gray-400 border-opacity-20">
            <div className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
               <h4 className="text-2xl font-bold tracking-wide text-cool-gray-200 mb-1">
                  Disponibilidades
               </h4>
            </div>
         </div>
         {availabilities?.length > 0 ? (
            availabilities?.map((availabilitiy) => (
               <div
                  key={availabilitiy.id}
                  className="flex flex-wrap items-center justify-between -mx-4 last:border-none  pb-3 mt-5 border-b border-cool-gray-900 border-opacity-10"
               >
                  <div className="w-full sm:w-auto px-4  sm:mb-0">
                     <p className="font-medium text-md  text-cool-gray-500 mb-1">
                        {`${availabilitiy.dayOfWeek} às ${availabilitiy.time}`}
                     </p>
                  </div>
               </div>
            ))
         ) : (
            <span className="font-medium text-md mt-6 inline-block  text-cool-gray-500">
               Nenhuma disponibilidade cadastrada
            </span>
         )}
      </div>
   );
}
export default AvailabilityDisplay;
