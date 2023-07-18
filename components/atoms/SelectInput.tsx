interface SelectInputProps {
   title: string;
   options: string[];
   name: string;
   state?: string;
   setState?: Function;
}

function SelectInput({
   title,
   options,
   state,
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
               <div className="relative block px-3 w-full text-sm text-cool-gray-200 placeholder-cool-gray-200 font-medium border border-raisin-black-lighter hover:border-cool-gray-900 focus-within:border-carolina-blue rounded-lg">
                  <span className="absolute top-1/2 right-0 mr-5 transform -translate-y-1/2">
                     <svg
                        width="12"
                        height="8"
                        viewBox="0 0 12 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M10.9999 1.16994C10.8126 0.983692 10.5591 0.87915 10.2949 0.87915C10.0308 0.87915 9.77731 0.983692 9.58995 1.16994L5.99995 4.70994L2.45995 1.16994C2.27259 0.983692 2.01913 0.87915 1.75495 0.87915C1.49076 0.87915 1.23731 0.983692 1.04995 1.16994C0.95622 1.26291 0.881826 1.37351 0.831057 1.49537C0.780288 1.61723 0.75415 1.74793 0.75415 1.87994C0.75415 2.01195 0.780288 2.14266 0.831057 2.26452C0.881826 2.38638 0.95622 2.49698 1.04995 2.58994L5.28995 6.82994C5.38291 6.92367 5.49351 6.99807 5.61537 7.04883C5.73723 7.0996 5.86794 7.12574 5.99995 7.12574C6.13196 7.12574 6.26267 7.0996 6.38453 7.04883C6.50638 6.99807 6.61699 6.92367 6.70995 6.82994L10.9999 2.58994C11.0937 2.49698 11.1681 2.38638 11.2188 2.26452C11.2696 2.14266 11.2957 2.01195 11.2957 1.87994C11.2957 1.74793 11.2696 1.61723 11.2188 1.49537C11.1681 1.37351 11.0937 1.26291 10.9999 1.16994Z"
                           fill="#3D485B"
                        ></path>
                     </svg>
                  </span>
                  <select
                     className="w-full py-4 appearance-none bg-transparent outline-none text-cool-gray-200"
                     name={name}
                     id={name}
                     value={state}
                     onChange={(e) =>
                        setState &&
                        setState((prev: any) => ({
                           ...prev,
                           [name]: e.target.value
                        }))
                     }
                  >
                     {options?.map((item) => (
                        <option
                           key={item}
                           className="bg-raisin-black-light text-cool-gray-200"
                           value={item}
                        >
                           {item}
                        </option>
                     ))}
                  </select>
               </div>
            </div>
         </div>
      </div>
   );
}
export default SelectInput;
