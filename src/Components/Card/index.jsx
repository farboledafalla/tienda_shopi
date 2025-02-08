import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context/';

export const Card = (data) => {
   const context = useContext(ShoppingCartContext);

   const imageUrl = `https://image.tmdb.org/t/p/w300/${data.data.backdrop_path}`;

   return (
      <div className='w-56 h-60 rounded-lg cursor-pointer'>
         <figure className='relative mb-2 w-full h-4/5 rounded-lg bg-amber-200'>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
               {data.data.title || 'Sin Título'}
            </span>
            <img
               className='w-full h-full object-cover rounded-lg'
               src={imageUrl}
               alt={data.data.title}
            />
            <div
               className='absolute top-0 right-0 bg-white w-6 h-6 flex justify-center items-center rounded-full m-2 p-1'
               onClick={() => context.setCount(context.count + 1)}
            >
               +
            </div>
         </figure>
         <p className='flex justify-between'>
            <span className='text-sm font-light mt-1.5'>
               {data.data.release_date || 'Estreno'}
            </span>
            <span className='text-lg font-medium'>{data.data.media_type}</span>
         </p>
      </div>
   );
};
