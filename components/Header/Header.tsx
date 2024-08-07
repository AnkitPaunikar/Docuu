import Image from "next/image";
import Link from "next/link";
import React, { Children } from "react";

const Header = ({ children }: HeaderProps) => {
  return (
    <div className='header'>
      <Link href='/' className='md:flex-1'>
        <Image
          src='/assets/icons/docuu.png'
          alt='Docuu'
          width={100}
          height={20}
          className='hidden md:block'
        />
        <Image
          src='/assets/icons/docuu.png'
          alt='Docuu'
          width={32}
          height={32}
          className='mr-2 md:hidden'
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
