import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';

import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./App.css";

const socialLinks = [
  { href: "https://github.com/Voyager-Nik", icon: <FaGithub size={30} /> },
  { href: "https://linkedin.com", icon: <FaLinkedin size={30} /> }
];

const skills = [
  "HTML, CSS, JavaScript",
  "React.js",
  "Responsive Design",
  "Git & GitHub"
];

const projects = [
  { title: "Project 1", description: "Short description about the project." },
  { title: "Project 2", description: "Short description about the project." }
];

const TypingText = ({ text = "", speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (!text) return;
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <h1 className="typing-text">{displayedText}<span className="blinking-cursor">|</span></h1>;
};

const Hero = () => (
  <section className="hero">
    <TypingText text="Hii, I'm Nikhil Rathore" />
    <p className="subtitle">Frontend Developer | React Enthusiast</p>
    <div className="social-links">
      {socialLinks.map((link, index) => (
        <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
          {link.icon}
        </a>
      ))}
    </div>
  </section>
);

const About = () => (
  <section className="section">
    <h2>About Me</h2>
    <p>
    Hi, I'm Nikhil Rathore — a passionate Frontend Developer with a creative edge and a love for clean, responsive, and user-friendly designs. With a strong foundation in ReactJS, JavaScript , HTML , CSS I love building web experiences that not only function flawlessly but also look visually appealing.
    I believe in continuous learning and always stay curious about the latest trends in web development. Whether it's crafting a sleek UI or optimizing performance, I enjoy turning ideas into reality through code. When I’m not coding, you’ll probably find me exploring new tech tools, contributing to GitHub, or binge-watching tech YouTubers    </p>
  </section>
);

const Skills = () => (
  <section className="section">
    <h2>Skills</h2>
    <ul className="skills-list">
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </section>
);

const Projects = () => (
  <section className="section">
    <h2>Projects</h2>
    <div className="projects">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  </section>
);

const Resume = () => (
  <section className="section center">
    <a href="/resume.pdf" download className="btn">
      Download Resume
    </a>
  </section>
);


const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'nik@1234',
      'template_juglu7c',
      e.target,
      'IT512PTyf5BMhYMDp' // (ye public key hoti hai)
    ).then(
      (result) => {
        alert("Message sent successfully!");
      },
      (error) => {
        alert("Failed to send message. Please try again.");
      }
    );

    e.target.reset();
  };

  return (
    <section className="section">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="4" required />
        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
};


const Footer = () => (
  <footer className="footer">
    © 2025 Nikhil Rathore. All rights reserved.
  </footer>
);

export default function Portfolio() {
  return (
    <div className="container">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}
