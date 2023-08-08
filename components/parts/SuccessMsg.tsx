import React from 'react';

interface SuccessMsgProps {
   msg: string;
}

function SuccessMsg({ msg }: SuccessMsgProps) {
   return (
      <div className="flex w-full -ml-1 space-x-3  justify-start items-center">
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 text-yinmn-blue-200"
         >
            <path
               fillRule="evenodd"
               d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
               clipRule="evenodd"
            />
         </svg>
         <h2 className=" text-cool-gray-200">{msg}</h2>
      </div>
   );
}

export default SuccessMsg;
