import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
   const [count, setCount] = useState(0);

   //Probaremos si funciona el contador para el carrito de compras
   console.log('count: ', count);

   return (
      <ShoppingCartContext.Provider value={{ count, setCount }}>
         {children}
      </ShoppingCartContext.Provider>
   );
};

ShoppingCartProvider.propTypes = {
   children: PropTypes.node.isRequired,
};
