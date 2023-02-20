import { Fragment, useCallback, useState } from "react";
import clsx from "clsx";

import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

interface TNavigationRoute {
   name: string;
   icon: JSX.Element;
}

const navRoutes: TNavigationRoute[] = [
   { name: "Orders", icon: <TbTruckDelivery size={25} className="mr-4" /> },
   { name: "Favorites", icon: <MdFavorite size={25} className="mr-4" /> },
   { name: "Wallet", icon: <FaWallet size={25} className="mr-4" /> },
   { name: "Help", icon: <MdHelp size={25} className="mr-4" /> },
   { name: "Promotions", icon: <AiFillTag size={25} className="mr-4" /> },
   { name: "Best Ones", icon: <BsFillSaveFill size={25} className="mr-4" /> },
   { name: "Invite Friends", icon: <FaUserFriends size={25} className="mr-4" /> },
];

const Navbar = (): JSX.Element => {
   const [nav, setNav] = useState<boolean>(false);

   const toggleSideDrawerMenu = useCallback((): void => {
      setNav((prevState) => !prevState);
   }, [nav]);

   const sideDrawerMenuClasses = clsx(
      "fixed top-0 w-[18.75rem] h-screen bg-white z-10 duration-300",
      {
         ["left-0"]: nav,
         ["-left-full"]: !nav,
      }
   );

   return (
      <header className="mx-auto flex justify-between items-center p-4 max-w-2xl-extend">
         <div className="flex items-center">
            <div className="cursor-pointer" onClick={toggleSideDrawerMenu}>
               <AiOutlineMenu size={30} />
            </div>
            <h1 className="px-2 text-2xl sm:text-3xl lg:text-4xl">
               Best <span className="font-bold">Easts</span>
            </h1>
            <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] -left-f">
               <p className="p-2 text-white bg-black rounded-full">Delivery</p>
               <p className="p-2">Pickup</p>
            </div>
         </div>

         <form action="">
            <div className="bg-gray-200 rounded-full flex items-center px-2 w-[12.5rem] sm:w-[25rem] lg:[31.25rem]">
               <AiOutlineSearch size={25} />
               <input
                  type="text"
                  className="w-full p-2 bg-transparent focus:outline-none"
                  placeholder="Search Food"
               />
            </div>
         </form>
         <button className="items-center hidden py-2 text-white bg-black rounded-full md:flex">
            <BsFillCartFill size={20} className="mr-2" />
         </button>

         <Fragment>
            {nav ? (
               <div className="fixed top-0 left-0 z-10 w-full h-screen bg-black/80"></div>
            ) : null}
         </Fragment>
         <div className={sideDrawerMenuClasses}>
            <AiOutlineClose
               onClick={toggleSideDrawerMenu}
               size={30}
               className="right-4 top-4 absolute cursor-pointer"
            />
            <h2 className="p-4 text-2xl">
               Best <span className="font-bold">Easts</span>
            </h2>
            <nav>
               <ul className="flex flex-col p-4 text-gray-800">
                  {navRoutes.map((route) => (
                     <li key={route.name} className="flex py-4 text-xl">
                        {route.icon} {route.name}
                     </li>
                  ))}
               </ul>
            </nav>
         </div>
      </header>
   );
};

export default Navbar;
