export default function PageHeaderJustTitle({ title }: { title: string }) {
   return (
      <div className="px-8 pt-8 ">
         <div className="md:pb-4 border-b border-cool-gray-900">
            <div className="flex flex-wrap items-center justify-between -mx-4">
               <div className="w-full md:w-1/2 lg:w-auto px-4 mb-3 md:mb-0">
                  <h4 className="text-3xl font-bold text-cool-gray-200 tracking-wide leading-6 mb-2">
                     {title}
                  </h4>
               </div>
            </div>
         </div>
      </div>
   );
}
