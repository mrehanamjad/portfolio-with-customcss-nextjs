import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <div>
       <HeroSection
      name="M.Rehan Amjad"
      title="Full Stack Developer"
      description="I'm a passionate developer specializing in creating beautiful, functional, and user-friendly websites and applications. With expertise in modern web technologies, I turn ideas into reality."
      resumeUrl="/path-to-resume.pdf"
      socialLinks={{
        github: "https://github.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        twitter: "https://twitter.com/yourusername"
      }}
    />
     
    </div>
  );
}
