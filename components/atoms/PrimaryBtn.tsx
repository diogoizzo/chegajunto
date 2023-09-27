import React from 'react';

interface PrimaryBtnProps {
   type?: 'button' | 'submit' | 'reset' | undefined;
   text: string;
   clickHandle?: (e: any) => void;
}

function PrimaryBtn({ type, text, clickHandle }: PrimaryBtnProps) {
   return (
      <button
         type={type ? type : 'button'}
         className="inline-flex py-2 px-10 w-full md:w-auto  items-center justify-center shadow-sm shadow-black/40 border-2 border-yinmn-blue-900 text-lg font-bold text-cool-gray-200 bg-yinmn-blue-500 hover:bg-yinmn-blue-200 transition duration-200 rounded-lg"
         onClick={clickHandle}
      >
         {text}
      </button>
   );
}

export default PrimaryBtn;
