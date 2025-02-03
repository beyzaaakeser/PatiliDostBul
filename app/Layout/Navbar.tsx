'use client';
import React, { useEffect, useState } from 'react';
import styles from './Navbar.module.css';
import Link from 'next/link';
import { FaRegUser, FaSearch } from 'react-icons/fa';

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
    LinkText: 'Blog',
    LinkTo: '/',
  },
  {
    LinkText: 'İletişim',
    LinkTo: '/',
  },
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsScrolled(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      if(window) {
        window.removeEventListener('scroll', handleScroll);
      }
    }
  }, []);

  return (
    <>
      <nav className={`${styles.NavbarMain} ${isScrolled ? styles.NavbarScrolled : ''}`}>
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

        <div className={styles.Navbar_Icons}>
          <Link href={'/'}>
            <FaRegUser />
          </Link>
          <Link href={'/'}>
            <FaSearch />
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
