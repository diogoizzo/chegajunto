interface DocumentsListProps {
   small?: boolean;
}

function DocumentsList({ small }: DocumentsListProps) {
   console.log(small);
   return (
      <section className="py-3">
         <div className="container px-4 mx-auto">
            <div className="p-6 bg-raisin-black rounded-xl">
               {small ? (
                  <div className="flex flex-wrap mb-4 items-center justify-between">
                     <div className="w-full sm:w-auto">
                        <h4 className="text-xl leading-normal font-semibold text-cool-gray-200">
                           Documentos
                        </h4>
                     </div>
                     <div className="w-full sm:w-auto">
                        <a
                           className="inline-block py-2 px-4 mr-4 text-xs leading-5 font-semibold text-carolina-blue bg-raisin-black-light hover:bg-raisin-black-lighter rounded-lg"
                           href="#"
                        >
                           Adicionar
                        </a>
                        <a
                           className="inline-block py-2 px-4 text-xs leading-5 font-semibold text-carolina-blue bg-raisin-black-light hover:bg-raisin-black-lighter rounded-lg"
                           href="#"
                        >
                           Ver Todos
                        </a>
                     </div>
                  </div>
               ) : null}
               <a
                  className="group flex py-5 pl-4 pr-6 items-center justify-between bg-raisin-black-light hover:bg-raisin-black-lighter rounded-md transition duration-200"
                  href="#"
               >
                  <div className="flex max-w-5xl pr-10">
                     <div className="flex-shrink-0 flex w-10 h-10 mr-3 items-center justify-center text-yinmn-blue-200 rounded-md bg-raisin-black">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth={1.5}
                           stroke="currentColor"
                           className="w-6 h-6"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                           />
                        </svg>
                     </div>
                     <div>
                        <h5 className="text-lg leading-5 font-semibold text-cool-gray-200">
                           Nome do documento cadastrado
                        </h5>
                        <span className="text-xs block  text-yinmn-blue-200 font-medium">
                           Nome do paciente desse documento
                        </span>
                        <span className="text-sm leading-3  text-cool-gray-500 font-medium">
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit. Nulla nec quam et nibh sodales molestie. Lorem
                           ipsum dolor sit amet consectetur adipisicing elit.
                           Aliquid, non sed! Molestias, ut veritatis corporis
                           voluptatem fugiat, corrupti nihil dicta ad tenetur
                           libero sunt praesentium perferendis deleniti omnis!
                           Recusandae, optio?
                        </span>
                     </div>
                  </div>
                  <span className="text-cool-gray-500 group-hover:text-cool-gray-200">
                     <svg
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M6.83 5.28995L2.59 1.04995C2.49704 0.95622 2.38644 0.881826 2.26458 0.831057C2.14272 0.780288 2.01202 0.75415 1.88 0.75415C1.74799 0.75415 1.61729 0.780288 1.49543 0.831057C1.37357 0.881826 1.26297 0.95622 1.17 1.04995C0.983753 1.23731 0.879211 1.49076 0.879211 1.75495C0.879211 2.01913 0.983753 2.27259 1.17 2.45995L4.71 5.99995L1.17 9.53995C0.983753 9.72731 0.879211 9.98076 0.879211 10.2449C0.879211 10.5091 0.983753 10.7626 1.17 10.9499C1.26344 11.0426 1.37426 11.116 1.4961 11.1657C1.61794 11.2155 1.7484 11.2407 1.88 11.2399C2.01161 11.2407 2.14207 11.2155 2.26391 11.1657C2.38575 11.116 2.49656 11.0426 2.59 10.9499L6.83 6.70995C6.92373 6.61699 6.99813 6.50638 7.04889 6.38453C7.09966 6.26267 7.1258 6.13196 7.1258 5.99995C7.1258 5.86794 7.09966 5.73723 7.04889 5.61537C6.99813 5.49351 6.92373 5.38291 6.83 5.28995Z"
                           fill="currentColor"
                        ></path>
                     </svg>
                  </span>
               </a>
               <a
                  className="group flex py-5 pl-4 pr-6 items-center justify-between hover:bg-raisin-black-lighter rounded-md transition duration-200"
                  href="#"
               >
                  <div className="flex max-w-5xl pr-10">
                     <div className="flex-shrink-0 flex w-10 h-10 mr-3 items-center justify-center text-yinmn-blue-200 rounded-md bg-raisin-black-light">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth={1.5}
                           stroke="currentColor"
                           className="w-6 h-6"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                           />
                        </svg>
                     </div>
                     <div>
                        <h5 className="text-lg leading-5 font-semibold text-cool-gray-200">
                           Nome do documento cadastrado
                        </h5>
                        <span className="text-xs block  text-yinmn-blue-200 font-medium">
                           Nome do paciente desse documento
                        </span>
                        <span className="text-sm leading-3  text-cool-gray-500 font-medium">
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit. Nulla nec quam et nibh sodales molestie. Lorem
                           ipsum dolor sit amet consectetur adipisicing elit.
                           Aliquid, non sed! Molestias.
                        </span>
                     </div>
                  </div>
                  <span className="text-cool-gray-500 group-hover:text-cool-gray-200">
                     <svg
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M6.83 5.28995L2.59 1.04995C2.49704 0.95622 2.38644 0.881826 2.26458 0.831057C2.14272 0.780288 2.01202 0.75415 1.88 0.75415C1.74799 0.75415 1.61729 0.780288 1.49543 0.831057C1.37357 0.881826 1.26297 0.95622 1.17 1.04995C0.983753 1.23731 0.879211 1.49076 0.879211 1.75495C0.879211 2.01913 0.983753 2.27259 1.17 2.45995L4.71 5.99995L1.17 9.53995C0.983753 9.72731 0.879211 9.98076 0.879211 10.2449C0.879211 10.5091 0.983753 10.7626 1.17 10.9499C1.26344 11.0426 1.37426 11.116 1.4961 11.1657C1.61794 11.2155 1.7484 11.2407 1.88 11.2399C2.01161 11.2407 2.14207 11.2155 2.26391 11.1657C2.38575 11.116 2.49656 11.0426 2.59 10.9499L6.83 6.70995C6.92373 6.61699 6.99813 6.50638 7.04889 6.38453C7.09966 6.26267 7.1258 6.13196 7.1258 5.99995C7.1258 5.86794 7.09966 5.73723 7.04889 5.61537C6.99813 5.49351 6.92373 5.38291 6.83 5.28995Z"
                           fill="currentColor"
                        ></path>
                     </svg>
                  </span>
               </a>
               <a
                  className="group flex py-5 pl-4 pr-6 items-center justify-between bg-raisin-black-light hover:bg-raisin-black-lighter  rounded-md transition duration-200"
                  href="#"
               >
                  <div className="flex max-w-5xl pr-10">
                     <div className="flex-shrink-0 flex w-10 h-10 mr-3 items-center justify-center text-yinmn-blue-200 rounded-md bg-raisin-black">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           fill="none"
                           viewBox="0 0 24 24"
                           strokeWidth={1.5}
                           stroke="currentColor"
                           className="w-6 h-6"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                           />
                        </svg>
                     </div>
                     <div>
                        <h5 className="text-lg leading-5 font-semibold text-cool-gray-200">
                           Nome do documento cadastrado
                        </h5>
                        <span className="text-xs block  text-yinmn-blue-200 font-medium">
                           Nome do paciente desse documento
                        </span>
                        <span className="text-sm leading-3  text-cool-gray-500 font-medium">
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit. Nulla nec quam et nibh sodales molestie. Lorem
                           ipsum dolor sit amet consectetur adipisicing elit.
                           Aliquid, non sed! Molestias, ut veritatis corporis
                           voluptatem fugiat, corrupti nihil dicta ad tenetur
                           libero sunt praesentium perferendis deleniti omnis!
                           Recusandae, optio?
                        </span>
                     </div>
                  </div>
                  <span className="text-gray-400 group-hover:text-gray-300">
                     <svg
                        width="8"
                        height="12"
                        viewBox="0 0 8 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M6.83 5.28995L2.59 1.04995C2.49704 0.95622 2.38644 0.881826 2.26458 0.831057C2.14272 0.780288 2.01202 0.75415 1.88 0.75415C1.74799 0.75415 1.61729 0.780288 1.49543 0.831057C1.37357 0.881826 1.26297 0.95622 1.17 1.04995C0.983753 1.23731 0.879211 1.49076 0.879211 1.75495C0.879211 2.01913 0.983753 2.27259 1.17 2.45995L4.71 5.99995L1.17 9.53995C0.983753 9.72731 0.879211 9.98076 0.879211 10.2449C0.879211 10.5091 0.983753 10.7626 1.17 10.9499C1.26344 11.0426 1.37426 11.116 1.4961 11.1657C1.61794 11.2155 1.7484 11.2407 1.88 11.2399C2.01161 11.2407 2.14207 11.2155 2.26391 11.1657C2.38575 11.116 2.49656 11.0426 2.59 10.9499L6.83 6.70995C6.92373 6.61699 6.99813 6.50638 7.04889 6.38453C7.09966 6.26267 7.1258 6.13196 7.1258 5.99995C7.1258 5.86794 7.09966 5.73723 7.04889 5.61537C6.99813 5.49351 6.92373 5.38291 6.83 5.28995Z"
                           fill="currentColor"
                        ></path>
                     </svg>
                  </span>
               </a>
            </div>
         </div>
      </section>
   );
}
export default DocumentsList;
