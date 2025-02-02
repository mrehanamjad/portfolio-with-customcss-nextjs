import styles from '@/styles/Footer.module.css';
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.mainContent}>
            <div className={styles.brand}>
              <h3>Rehan Amjad</h3>
              <p>Full Stack Developer</p>
            </div>
            
            <div className={styles.navigation}>
              <h4>Quick Links</h4>
              <nav>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/skills">Skills</Link>
                <Link href="/contact">Contact</Link>
              </nav>
            </div>

            <div className={styles.contact}>
              <h4>Contact Info</h4>
              <p>Email: rehaamajd520@gmail.com</p>
              <p>Location: Pakistan</p>
              <div className={styles.social}>
                <a 
                  href="https://github.com/mrehanamjad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>
                <a 
                  href="https://linkedin.com/in/mrehanamjad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            Made with <FaHeart className={styles.heart} /> by Rehan Amjad © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;