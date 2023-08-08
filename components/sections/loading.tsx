import ReactLoading from 'react-loading';
import Menu from '../parts/Menu';

export default function Loading() {
   return (
      <Menu>
         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-raisin-black-light ">
            <ReactLoading
               type={'spinningBubbles'}
               color={'#16161F'}
               height={160}
               width={160}
            />
         </div>
      </Menu>
   );
}
