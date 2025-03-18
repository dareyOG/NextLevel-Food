import Link from 'next/link';
import Image from 'next/image';

import logoImg from '@/assets/logo.png';

import MainHeaderBackground from './main-header-background';
import style from './main-header.module.css';

import NavLink from '../nav-link/nav-link';

function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={style.header}>
        <Link href={'/'} className={style.logo}>
          {/* <img src={logoImg.src} alt="A plate with food on it" /> */}
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={style.nav}>
          <ul>
            <li>
              <NavLink href={'/meals'}>Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href={'/community'}>Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainHeader;
