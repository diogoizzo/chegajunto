import React from 'react';

interface PrimaryBtnProps {
   type?: 'button' | 'submit' | 'reset' | undefined;
   text: string;
   clickHandle?: ((e: any) => Promise<void>) | (() => void);
}

function SecundaryBtn({ type, text, clickHandle }: PrimaryBtnProps) {
   return (
      <button
         type={type ? type : 'button'}
         className="inline-flex py-2 px-10 w-full md:w-auto  items-center justify-center shadow-sm shadow-black/40 border-2 border-raisin-black-lighter text-lg font-bold text-raisin-black-lighter bg-cool-gray-900 hover:bg-cool-gray-500 transition duration-200 rounded-lg"
         onClick={clickHandle}
      >
         {text}
      </button>
   );
}

export default SecundaryBtn;
