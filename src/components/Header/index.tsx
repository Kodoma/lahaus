import React, { ReactElement } from 'react';
import Link from 'next/link'
import Image from 'next/image'

// Assets
import BarsMenu from '../../assets/images/bars.svg';
import logoDesktop from '../../assets/images/logo-desktop.svg';
import logoMobile from '../../assets/images/logo-mobile.svg';
import NotificationBar from "../NotificationBar";
import Navbar from "../Navbar";

const Header = (): ReactElement => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="flex flex-row justify-between items-center md:px-20 w-full h-14 | border-b border-green-100">
      <div className="flex flex-row items-end">
        <button type="button" className="relative md:hidden px-4" onClick={() => setIsOpen(!isOpen)}>
          <Image className="hidden md:block text-green-800" src={BarsMenu} alt="La Haus" title="La Haus Logo" />
          <div className="absolute top-0 right-2">
            <NotificationBar />
          </div>
        </button>
          <div className="md:hidden text-green-800">
              <Link href="/">
                <Image src={logoMobile} alt="La Haus" title="La Haus Logo" />
              </Link>
          </div>
          <div className="hidden md:block text-green-800" >
              <Link href="/">
                <Image src={logoDesktop} alt="La Haus" title="La Haus Logo" />
              </Link>
          </div>
      </div>
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="md:hidden absolute w-full top-14 z-50">{isOpen && <Navbar />}</div>
    </header>
  );
};

export default Header;
