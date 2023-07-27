import React from 'react';

interface DangerBtnProps {
   text: string;
   openConfirmation: (e: any) => void;
}

function DangerBtn({ text, openConfirmation }: DangerBtnProps) {
   return (
      <button
         onClick={openConfirmation}
         className="inline-flex py-2 px-10  items-center text-center shadow-sm shadow-black/40 border-2 border-red-900 text-lg font-bold text-cool-gray-200  bg-red-800 hover:bg-red-700 transition duration-200 rounded-lg"
      >
         {text}
      </button>
   );
}

export default DangerBtn;
