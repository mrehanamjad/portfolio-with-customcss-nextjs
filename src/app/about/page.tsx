import styles from '@/styles/AboutPage.module.css';
import { FaDownload, FaCode, FaServer, FaMobile, FaDatabase } from 'react-icons/fa';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <FaCode size={24} />,
    title: "Frontend Development",
    description: "Building responsive and interactive web applications using modern frameworks like React and Next.js"
  },
  {
    icon: <FaServer size={24} />,
    title: "Backend Development",
    description: "Creating robust server-side solutions and RESTful APIs to power web applications"
  },
  {
    icon: <FaMobile size={24} />,
    title: "Responsive Design",
    description: "Developing mobile-first websites that work seamlessly across all devices"
  },
  {
    icon: <FaDatabase size={24} />,
    title: "Database Design",
    description: "Designing and implementing efficient database structures for optimal data management"
  }
];

const AboutPage = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>About Me</h2>
          <p className={styles.subtitle}>Get to know me better</p>
        </div>

        <div className={styles.content}>
          <div className={styles.profileSection}>
            <div className={styles.imageWrapper}>
              <img 
                src="/image.png" 
                alt="Rehan Amjad" 
                className={styles.profileImage}
              />
            </div>
            <div className={styles.profileInfo}>
              <h3>Rehan Amjad</h3>
              <h4>Full Stack Developer</h4>
              <p>
                I am a passionate Full Stack Developer with expertise in modern web technologies.
                With a strong foundation in both frontend and backend development, I create
                efficient, scalable, and user-friendly applications that solve real-world problems.
              </p>
              <p>
                My journey in web development started with a curiosity about how things work on
                the internet, and it has evolved into a professional career where I continuously
                learn and adapt to new technologies and best practices.
              </p>
              <div className={styles.quickInfo}>
                <div>
                  <strong>Experience:</strong>
                  <span>3+ Years</span>
                </div>
                <div>
                  <strong>Location:</strong>
                  <span>Pakistan</span>
                </div>
                <div>
                  <strong>Email:</strong>
                  <span>rehaamajd520@gmail.com</span>
                </div>
              </div>
              <a 
                download={'/Resume_M Rehan Amjad .pdf'} 
                href={""}
                className={styles.downloadButton}
              >
                <FaDownload /> Download Resume
              </a>
            </div>
          </div>

          <div className={styles.servicesSection}>
            <h3 className={styles.sectionTitle}>What I Do</h3>
            <div className={styles.servicesGrid}>
              {services.map((service, index) => (
                <div key={index} className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>
                    {service.icon}
                  </div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;