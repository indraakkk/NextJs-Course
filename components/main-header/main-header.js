import Image from 'next/image';
import Link from 'next/link';

import MainHeaderBackground from './main-header-background';
import NavLink from './nav-link';

import logoImg from '@/assets/logo.png';
import classes from './main-header.module.css';

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image
            src={logoImg.src}
            alt="A plate food on it"
            width={100}
            height={100}
            priority
          />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals" className={classes.active}>
                Browse meals
              </NavLink>

              {/* <Link
                href="/meals"
                className={
                  path.startsWith('/meals') ? classes.active : undefined
                }
              >
                Browse Meals
              </Link> */}
            </li>
            <li>
              <NavLink href="/community" className={classes.active}>
                Foodies Community
              </NavLink>
              {/* <Link
                href="/community"
                className={
                  path.startsWith('/community') ? classes.active : undefined
                }
              >
                Foodies Community
              </Link> */}
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
