import React from 'react';
import Link from 'next/link';

const Nav = () => (
  <nav className='text-center'>
    <ul className='flex justify-between'>
      <li className='flex'>
        <Link href="http://localhost:3000">
          Detail Path
        </Link>
        <Link href="http://localhost:3001">
          Route dev
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;