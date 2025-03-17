import Link from 'next/link';

import logoImg from '@/assets/logo.png';
import style from './main-header.module.css';

function MainHeader() {
  return (
    <header className={style.header}>
      <Link href={'/'} className={style.logo}>
        <img src={logoImg.src} alt="A plate with food on it" />
        NextLevel Food
      </Link>

      <nav className={style.nav}>
        <ul>
          <li>
            <Link href={'/meals'}>Browse Meals</Link>
          </li>
          <li>
            <Link href={'/community'}>Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
