'use client'
import { useState } from 'react';
import styles from '@/styles/ContactPage.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: <FaGithub size={24} />,
    url: "https://github.com/mrehanamjad"
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={24} />,
    url: "https://linkedin.com/in/mrehanamjad"
  }
];

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Get in Touch</h2>
          <p className={styles.subtitle}>Have a question or want to work together?</p>
        </div>

        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.infoCard}>
              <FaEnvelope size={24} />
              <h3>Email Me At</h3>
              <p>rehaamajd520@gmail.com</p>
            </div>

            <div className={styles.socialLinks}>
              <h3>Connect With Me</h3>
              <div className={styles.socialIcons}>
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialIcon}
                    aria-label={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form className={styles.contactForm} >
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={5}
              />
            </div>
            <button 
              type="submit" 
              className={styles.submitButton}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;