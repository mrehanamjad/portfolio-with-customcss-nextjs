"use client"
import { useState } from 'react';
import styles from '@/styles/Header.module.css';
import Link from 'next/link';

interface NavItem {
  label: string;
  href: string;
}


const navItems:NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Skills', href: '/skills' },
  { label: 'Contact', href: '/contact' }
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
            <span className={styles.logoText}>{"M.Rehan Amjad"}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={styles.navItem}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`${styles.mobileMenuButton} ${isMobileMenuOpen ? styles.open : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Mobile Navigation */}
        <nav className={`${styles.mobileNav} ${isMobileMenuOpen ? styles.open : ''}`}>
          {navItems.map((item) => (
            <Link
            key={item.href}
              href={item.href}
              className={styles.mobileNavItem}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;