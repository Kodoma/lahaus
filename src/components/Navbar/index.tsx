import React, { ReactElement } from 'react';
import Link from 'next/link'
import Image from "next/image";
import NotificationBar from "../NotificationBar";

import chevron from '../../assets/images/chevron-down.svg';
import menuItems from "./menu-config";


const Navbar = (): ReactElement => {
  return (
    <nav className="md:top-0 z-20 | w-full md:w-auto | bg-green-300 md:bg-white">
      <ul className="flex md:flex flex-col md:flex-row | md:space-x-6 text-white md:text-primary">
        {menuItems.map(({ id, name, url }) => (
          <li key={id} className="text-gray-400 px-4 py-2 md:p-0 | border-b md:border-0">
            <Link href={url}>{name}</Link>
          </li>
        ))}
        <li className="px-4 py-2 md:p-0">
          <span className="pr-2 text-gray-500">Perfil</span>
          <div className="absolute hidden md:block top-1 ml-10">
            <NotificationBar />
            <Link href="/">
              <Image className="hidden md:block text-green-800" src={chevron} alt="perfil" title="perfil" />
            </Link>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
