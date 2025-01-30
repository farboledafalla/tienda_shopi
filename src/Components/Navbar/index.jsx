import { NavLink } from 'react-router-dom';

export const Navbar = () => {
   //Variable para ruta activa
   const activeStyle = 'underline';

   return (
      <nav className='flex justify-between fixed z-10 w-full py-5 px-3 text-sm font-light'>
         <ul className='bg-red-100 flex items-center gap-3'>
            <li className='font-semibold text-lg'>
               <NavLink to='/'>Shopi</NavLink>
            </li>
            <li>
               <NavLink
                  to='/'
                  className={({ isActive }) =>
                     isActive ? activeStyle : undefined
                  }
               >
                  All
               </NavLink>
            </li>
            <li>
               <NavLink
                  to='/clothes'
                  className={({ isActive }) =>
                     isActive ? activeStyle : undefined
                  }
               >
                  Clothes
               </NavLink>
            </li>
            <li>
               <NavLink
                  to='/electronics'
                  className={({ isActive }) =>
                     isActive ? activeStyle : undefined
                  }
               >
                  Electronics
               </NavLink>
            </li>
            <li>
               <NavLink
                  to='/furnitures'
                  className={({ isActive }) =>
                     isActive ? activeStyle : undefined
                  }
               >
                  Furnitures
               </NavLink>
            </li>
            <li>
               <NavLink
                  to='/toys'
                  className={({ isActive }) =>
                     isActive ? activeStyle : undefined
                  }
               >
                  Toys
               </NavLink>
            </li>
            <li>
               <NavLink
                  to='/others'
                  className={({ isActive }) =>
                     isActive ? activeStyle : undefined
                  }
               >
                  Others
               </NavLink>
            </li>
         </ul>
         <ul className='bg-orange-100 flex items-center gap-3'>
            <li className='text-black/50'>franklim.arboleda@gmail.com</li>
            <li>
               <NavLink
                  to='/my-orders'
                  className={({ isActive }) =>
                     isActive ? activeStyle : undefined
                  }
               >
                  My Orders
               </NavLink>
            </li>
            <li>
               <NavLink
                  to='/my-account'
                  className={({ isActive }) =>
                     isActive ? activeStyle : undefined
                  }
               >
                  My Account
               </NavLink>
            </li>
            <li>
               <NavLink
                  to='/sign-in'
                  className={({ isActive }) =>
                     isActive ? activeStyle : undefined
                  }
               >
                  Sign In
               </NavLink>
            </li>
            <li>🛒 0</li>
         </ul>
      </nav>
   );
};
