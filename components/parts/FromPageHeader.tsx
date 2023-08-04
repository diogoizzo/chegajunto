interface FormPageHeaderProps {
   title?: string;
   subtitle?: string;
}

export default function FormPageHeader({
   title,
   subtitle
}: FormPageHeaderProps) {
   return (
      <div className="px-8 pt-8 pb-2">
         <div className="pb-6 border-b border-cool-gray-900">
            <div className="flex flex-wrap items-center justify-between -mx-4">
               <div className="w-full md:w-1/2 lg:w-auto px-4 mb-6 md:mb-0">
                  <h4 className="text-3xl font-bold text-cool-gray-200 tracking-wide leading-6 mb-2">
                     {title}
                  </h4>
                  <p className="text-md leading-5 text-cool-gray-500">
                     {subtitle}
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}
