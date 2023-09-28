import React from 'react';
import Menu from '../parts/Menu';
import ReactLoading from 'react-loading';

function LoadingWithTitle({ title }: { title: string }) {
   return (
      <Menu>
         <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-raisin-black-light ">
            <div className="relative  flex flex-col items-center justify-center">
               <ReactLoading
                  type={'spinningBubbles'}
                  color={'#334155'}
                  height={160}
                  width={160}
               />
               <h2 className="mt-16 text-4xl font-semibold text-slate-700">
                  {title}
               </h2>
            </div>
         </div>
      </Menu>
   );
}

export default LoadingWithTitle;
