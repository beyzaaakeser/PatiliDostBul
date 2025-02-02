import React from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';

const NavLinks = [
  {
    LinkText: 'Anasayfa',
    LinkTo: '/',
  },
  {
    LinkText: 'Hakkımızda',
    LinkTo: '/',
  },
  {
    LinkText: 'Evcil Hayvanlar',
    LinkTo: '/',
  },
  {
    LinkText: 'Blogs',
    LinkTo: '/',
  },
  {
    LinkText: 'İletişim',
    LinkTo: '/',
  },
];

const Navbar: React.FC = () => {
  return (
    <>
      <nav className={styles.NavbarMain}>
        <Link href={'/'}>
          <img src="/assets/logo4N.png" alt="Logo" />
        </Link>

        <div className={styles.Navbar}>
          {NavLinks.map(({ LinkText, LinkTo }, index) => (
            <div className={styles.NavLink} key={index}>
              <Link href={LinkTo}>{LinkText}</Link>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
