import IAvailability from '../../interfaces/IAvailability';

function AvailabilityForm({
   availabilities
}: {
   availabilities: IAvailability[];
}) {
   async function handleDelete(e: Event) {
      //todo fazer funcionalidade para deletar uma disponiblidade
   }
   return (
      <div className="p-10 bg-raisin-black rounded-lg mt-4">
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
                        {`${availabilitiy.dayOfWeek} às ${
                           availabilitiy.time.split(':')[0]
                        } horas`}
                     </p>
                  </div>
                  <button className="w-full sm:w-auto px-4 mb-6 sm:mb-0">
                     <svg
                        className="font-medium text-md cursor-pointer  text-cool-gray-500 hover:text-cool-gray-200 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        id="trash-alt"
                     >
                        <path
                           fill="currentcolor"
                           d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
                        ></path>
                     </svg>
                  </button>
               </div>
            ))
         ) : (
            <span className="font-medium text-md  text-cool-gray-500">
               Nenhuma disponibilidade cadastrada
            </span>
         )}
      </div>
   );
}
export default AvailabilityForm;
