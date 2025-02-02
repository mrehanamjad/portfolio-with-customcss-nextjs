"use client"
import { useState } from 'react';
import styles from '@/styles/ProjectsPage.module.css';
import Link from 'next/link';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

const projects:Project[] = [
    {
      title: "Furniture E-Commerce Platform",
      description: "This furniture website provides users with a seamless shopping experience to browse and purchase furniture items. It combines a responsive frontend with dynamic backend capabilities powered by Sanity CMS to ensure efficient content management and order processing.",
      image: "/projects/furniture-eccomerce.png",
      technologies: ["Next.js", "TypeScript","Tailwind CSS","Sanity"],
      category: "Full-Stack",
      liveUrl: "https://giaic-hackathon3-ecommerce-website.vercel.app/",
      githubUrl: "https://github.com/mrehanamjad/GIAIC-Hackathon3-EcommerceWebsite",
      featured: true
    },
    {
      title: "Social Blogging Website",
      description: "A full-stack social blogging platform where users can read posts/blogs written by others and also write their own. The platform includes features like user authentication, categories, and the ability to add, edit, or delete blogs/posts. Built using React for the frontend and Appwrite as the backend.",
      image: "/projects/social-blogging.png",
      technologies: ["React", "Appwrite", "TailwindCss"],
      category: "Full-Stack",
      liveUrl: "https://social-bloging-website.vercel.app/",
      githubUrl: "https://github.com/mrehanamjad/social-bloging-website"
    },
    {
      title: "Art School Website",
      description: "This is an Art School website built with Next.js and TypeScript, using the Accenterity UI library for the frontend. The website is designed to provide information about courses, instructors, and upcoming webinars. It is deployed on Vercel for fast and efficient hosting.",
      image: "/projects/act-school.png",
      technologies: ["NextJs", "TypeScript", "TailwindCss","Accenterity UI"],
      category: "FrontEnd",
      liveUrl: "https://art-school-site.vercel.app/",
      githubUrl: "https://github.com/mrehanamjad/social-bloging-website"
    },
    {
      title: "Online learning platform Website",
      description: "A Multipage Online learning platform website with custom css",
      image: "/projects/learning-web.png",
      technologies: ["NextJs","Css","TypeScript"],
      category: "FrontEnd",
      liveUrl: "https://nextjs-multipage-website-with-customcss.vercel.app/",
      githubUrl: "https://github.com/mrehanamjad/nextjs-multipage-website-with-customcss"
    },
    {
      title: "React Notes App",
      description: "A simple and functional notes app built with React that allows users to add, delete, search, and categorize notes. The app also features customizable background colors for notes and uses local storage to persist data.",
      image: "/projects/notes-app.png",
      technologies: ["ReactJs","TailwindCss",],
      category: "FrontEnd",
      liveUrl: "https://r-notes-app.netlify.app/",
      githubUrl: "https://github.com/mrehanamjad/notes-app-react"
    },
    {
      title: "Quran40 - audio player",
      description: "Quran40:Listen and Read the Holy Quran with Translation in 40+ languages.---This project offers a user-friendly platform to engage with the Holy Quran through an interactive audio player and comprehensive multilingual support.",
      image: "/projects/quran40.png",
      technologies: ["HTML","TailwindCss","Typescript","Apis"],
      category: "FrontEnd",
      liveUrl: "https://quran40.netlify.app/",
      githubUrl: "https://github.com/mrehanamjad/Quran40"
    },
    {
      title: "Coding Quiz Site",
      description: "This is a web-based coding quiz platform built using HTML, Tailwind CSS, and TypeScript. It offers a variety of coding challenges to test your knowledge and skills in different programming languages and concepts.",
      image: "/projects/coding-quiz-app.png",
      technologies: ["HTML","TailwindCss","Typescript","Apis"],
      category: "FrontEnd",
      liveUrl: "https://mrehanamjad.github.io/coding-quiz-app/",
      githubUrl: "https://github.com/mrehanamjad/coding-quiz-app"
    },
    

]

const ProjectsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className={styles.projectsSection} id="projects">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{"My Projects"}</h2>
          <p className={styles.subtitle}>{"Some of my recent work"}</p>
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

        <div className={styles.projectsGrid}>
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`${styles.projectCard} ${
                project.featured ? styles.featured : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className={styles.imageContainer}>
                <Image 
                  src={project.image} 
                  alt={project.title}
                  width={1000}
                  height={1000}
                  className={styles.projectImage}
                />
                <div className={`${styles.overlay} ${
                  hoveredProject === project.title ? styles.showOverlay : ''
                }`}>
                  <div className={styles.links}>
                    {project.liveUrl && (
                      <Link 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        <FaGlobe />{" "}View Live 
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                      >
                        <FaGithub />{" "}View Code
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              <div className={styles.projectContent}>
                {project.featured && (
                  <span className={styles.featuredBadge}>Featured</span>
                )}
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.technologies}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className={styles.tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;