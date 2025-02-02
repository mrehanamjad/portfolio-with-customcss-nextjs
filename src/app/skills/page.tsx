"use client"
import { useState } from 'react';
import styles from '@/styles/SkillsPage.module.css';
import SkillCard from '@/components/SkillCard';
import { FaCss3Alt, FaHtml5, FaJava, FaReact } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiJavascript, SiPython, SiTypescript, SiTailwindcss, SiGit } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';

interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  category: string;
  description?: string;
}


const skills:Skill[] = [
    {
      name: "React",
      icon: <FaReact />,
      level: 90,
      category: "Frontend",
    },
    {
      name: "NextJs",
      icon:  <RiNextjsFill />,
      level: 85,
      category: "Frontend, Backend",
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      level: 88,
      category: "Languages",
    
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
      level: 80,
      category: "Languages",
    
    },
    {
      name: "Python",
      icon: <SiPython />,
      level: 60,
      category: "Languages",
     
    },
    {
      name: "C++",
      icon: <TbBrandCpp />,
      level: 45,
      category: "Languages",
     
    },
    {
        name:"Java",
        icon: <FaJava />,
        level: 40,
        category: "Languages",
    },
    {
        name: "Html",
        icon: <FaHtml5 />,
        level: 90,
        category: "Frontend",
    },
    {
        name: "CSS",
        icon: <FaCss3Alt />,
        level: 75,
        category: "Frontend",
    },
    {
        name:"TailwindCss",
        icon: <SiTailwindcss />,
        level: 80,
        category: "Frameworks",
    },
    {
        name: "Git & Github",
        icon: <SiGit />,
        level: 75,
        category: "Tools",
    }
    
  ];
  const categories = ['All','Frontend','Backend','Languages','Frameworks',"Tools"];

const SkillsPage= () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category.toLowerCase().includes(selectedCategory.toLowerCase()));


  return (
    <section className={styles.skillsSection} id="skills">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{"My Skills"}</h2>
          <p className={styles.subtitle}>{"Technologies I work with and love"}</p>
        </div>

        <div className={styles.categories}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.categoryButton} ${
                selectedCategory === category ? styles.active : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.skillsGrid}>
          {filteredSkills.map((skill, index) => (
           <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;