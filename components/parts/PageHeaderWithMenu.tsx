import Link from 'next/link';
import IDocument from '../../interfaces/IDocument';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger
} from '../ui/dropdown-menu';

interface PageHeaderProps {
   title?: string;
   subtitle?: string;
   data: IDocument;
   openConfirmatioModal: (e: any) => void;
}

export default function PageHeaderWithMenu({
   title,
   subtitle,
   data,
   openConfirmatioModal
}: PageHeaderProps) {
   return (
      <div className="px-8 pt-8 pb-2">
         <div className="pb-6 border-b border-cool-gray-900">
            <div className="flex flex-wrap items-center justify-between -mx-4">
               <div className="w-full md:w-1/2 lg:w-auto px-4 mb-6 md:mb-0">
                  <h4 className="text-4xl font-bold text-cool-gray-200 tracking-wide leading-6 mb-1">
                     {title}
                  </h4>
                  <p className="text-md mt-3 leading-5 text-cool-gray-500">
                     {subtitle}
                  </p>
               </div>
               <div className="w-full md:w-1/2 lg:w-auto px-4">
                  <div className="md:flex items-center">
                     <DropdownMenu>
                        <DropdownMenuTrigger className="inline-flex py-2 px-10  items-center text-center shadow-sm shadow-black/40 border-2 border-yinmn-blue-900 text-lg font-bold text-cool-gray-200 bg-yinmn-blue-500 hover:bg-yinmn-blue-200 transition duration-200 rounded-lg">
                           <svg
                              className="h-4 "
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentcolor"
                              id="bars"
                           >
                              <path d="M3,8H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,8Zm18,8H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z"></path>
                           </svg>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-raisin-black-light w-40 p-3 border border-raisin-black-lighter">
                           <DropdownMenuItem className="text-cool-gray-500 hover:bg-raisin-black-lighter relative">
                              <Link
                                 className="flex w-full h-full"
                                 href={data?.documentEditLink || '/'}
                              >
                                 <svg
                                    className="h-4 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    id="edit"
                                 >
                                    <path
                                       fill="currentcolor"
                                       d="M21,12a1,1,0,0,0-1,1v6a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4h6a1,1,0,0,0,0-2H5A3,3,0,0,0,2,5V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM6,12.76V17a1,1,0,0,0,1,1h4.24a1,1,0,0,0,.71-.29l6.92-6.93h0L21.71,8a1,1,0,0,0,0-1.42L17.47,2.29a1,1,0,0,0-1.42,0L13.23,5.12h0L6.29,12.05A1,1,0,0,0,6,12.76ZM16.76,4.41l2.83,2.83L18.17,8.66,15.34,5.83ZM8,13.17l5.93-5.93,2.83,2.83L10.83,16H8Z"
                                    ></path>
                                 </svg>
                                 Editar
                              </Link>
                           </DropdownMenuItem>
                           <DropdownMenuItem className="text-cool-gray-500 relative">
                              <a
                                 className="flex w-full h-full"
                                 href={data?.viewLink}
                                 target="_blank"
                                 rel="noopener noreferrer"
                              >
                                 <svg
                                    className="h-4 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    data-name="Layer 1"
                                    viewBox="0 0 24 24"
                                    id="folder-open"
                                 >
                                    <path
                                       fill="currentcolor"
                                       d="M22.78 10.37A1 1 0 0 0 22 10h-2V9a3 3 0 0 0-3-3h-6.28l-.32-1a3 3 0 0 0-2.84-2H4a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14.4a3 3 0 0 0 2.92-2.35L23 11.22a1 1 0 0 0-.22-.85ZM5.37 18.22a1 1 0 0 1-1 .78H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h3.56a1 1 0 0 1 1 .68l.54 1.64A1 1 0 0 0 10 8h7a1 1 0 0 1 1 1v1H8a1 1 0 0 0-1 .78Zm14 0a1 1 0 0 1-1 .78H7.21a1.42 1.42 0 0 0 .11-.35L8.8 12h12Z"
                                    ></path>
                                 </svg>
                                 Abrir
                              </a>
                           </DropdownMenuItem>
                           <DropdownMenuItem className="text-cool-gray-500 relative">
                              <a
                                 className="flex w-full h-full"
                                 href={data?.downloadLink}
                              >
                                 <svg
                                    className="h-4 mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    id="import"
                                 >
                                    <path
                                       fill="currentcolor"
                                       d="M21,14a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V15A1,1,0,0,0,21,14Zm-9.71,1.71a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4a1,1,0,0,0-1.42-1.42L13,12.59V3a1,1,0,0,0-2,0v9.59l-2.29-2.3a1,1,0,1,0-1.42,1.42Z"
                                    ></path>
                                 </svg>
                                 Download
                              </a>
                           </DropdownMenuItem>
                           <DropdownMenuItem
                              className="text-red-300"
                              onClick={openConfirmatioModal}
                           >
                              <svg
                                 className="h-4 mr-2"
                                 xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 24 24"
                                 id="trash-alt"
                              >
                                 <path
                                    fill="currentcolor"
                                    d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18ZM20,6H16V5a3,3,0,0,0-3-3H11A3,3,0,0,0,8,5V6H4A1,1,0,0,0,4,8H5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8h1a1,1,0,0,0,0-2ZM10,5a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1V6H10Zm7,14a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17Zm-3-1a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z"
                                 ></path>
                              </svg>
                              Apagar
                           </DropdownMenuItem>
                        </DropdownMenuContent>
                     </DropdownMenu>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
