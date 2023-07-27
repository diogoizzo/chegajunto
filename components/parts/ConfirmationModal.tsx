import { Dialog, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import PrimaryBtn from '../atoms/PrimaryBtn';
import SecundaryBtn from '../atoms/SecundaryBtn';

interface ConfirmationModalProps {
   text: string;
   isOpen: boolean;
   closeModal: () => void;
   deleteAction: () => void;
}

function ConfirmationModal({
   text,
   isOpen,
   closeModal,
   deleteAction
}: ConfirmationModalProps) {
   return (
      <Transition show={isOpen} as={Fragment}>
         <Dialog as="div" className="relative z-20" onClose={closeModal}>
            <Transition.Child
               as={Fragment}
               enter="ease-out duration-200"
               enterFrom="opacity-0"
               enterTo="opacity-100"
               leave="ease-in duration-200"
               leaveFrom="opacity-100"
               leaveTo="opacity-0"
            >
               <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
               <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                     as={Fragment}
                     enter="ease-out duration-200"
                     enterFrom="opacity-0 scale-95"
                     enterTo="opacity-100 scale-100"
                     leave="ease-in duration-200"
                     leaveFrom="opacity-100 scale-100"
                     leaveTo="opacity-0 scale-95"
                  >
                     <Dialog.Panel className="w-full max-w-lg text-center transform overflow-hidden rounded-2xl bg-raisin-black-light border-raisin-black-lighter border p-8  align-middle shadow-xl transition-all">
                        <Dialog.Title
                           as="h3"
                           className="text-xl font-medium leading-6 text-cool-gray-200 "
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="#ef4444"
                              className=" h-14 mx-auto mb-3 shadow-sm"
                           >
                              <path
                                 fillRule="evenodd"
                                 d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                                 clipRule="evenodd"
                              />
                           </svg>
                           {text}
                        </Dialog.Title>
                        <div className="mt-4">
                           <p className="text-sm text-gray-500">
                              Essa é uma ação irreversível, de modo que uma vez
                              realizada, não poderá ser revertida.
                           </p>
                        </div>

                        <div className="mt-6 space-x-5">
                           <PrimaryBtn
                              text={'Sim'}
                              clickHandle={deleteAction}
                           />
                           <SecundaryBtn
                              text={'Não'}
                              clickHandle={closeModal}
                           />
                        </div>
                     </Dialog.Panel>
                  </Transition.Child>
               </div>
            </div>
         </Dialog>
      </Transition>
   );
}

export default ConfirmationModal;
