import { useState, useEffect } from 'react';

import { Layout } from '../../Components/Layout';
import { Card } from '../../Components/Card';

export const Home = () => {
   const apiKey = 'c005fa8f8352216109827070c4d2505e';

   //Estados
   const [items, setItems] = useState([]);

   //Consumir API
   useEffect(() => {
      fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`)
         .then((response) => response.json())
         .then((data) => {
            setItems(data.results);
            console.log(data.results);
         });

      // fetch('https://api.escuelajs.co/api/v1/products')
      //    .then((response) => response.json())
      //    .then((data) => {
      //       setItems(data);
      //       console.log(data);
      //    });
   }, []);

   return (
      <Layout>
         Home
         <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
            {/* {items?.map((item) => (
               <Card key={item.id} data={item} />
            ))} */}

            {Array.isArray(items) ? (
               items.map((item) => <Card key={item.id} data={item} />)
            ) : (
               <p>No hay datos disponibles</p>
            )}
         </div>
      </Layout>
   );
};
