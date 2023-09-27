import React from 'react';

interface DangerBtnProps {
   text: string;
   openConfirmation: any;
}

function DangerBtn({ text, openConfirmation }: DangerBtnProps) {
   return (
      <button
         onClick={openConfirmation}
         className="inline-flex py-3 md:py-2 px-6 w-full md:w-auto md:px-10   items-center justify-center shadow-sm shadow-black/40 border-2 border-red-900 text-base md:text-lg font-bold text-cool-gray-200  bg-red-800 hover:bg-red-700 transition duration-200 rounded-lg"
      >
         {text}
      </button>
   );
}

export default DangerBtn;
