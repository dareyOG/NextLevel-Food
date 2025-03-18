'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import style from './nav-link.module.css';

function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link href={href} className={`${style.link} ${path.startsWith(href) ? style.active : ''}`}>
      {children}
    </Link>
  );
}

export default NavLink;
