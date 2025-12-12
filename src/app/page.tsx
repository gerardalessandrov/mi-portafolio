'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, GraduationCap, Download, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'TypeScript',
    'Vite', 'Python', 'C#', 'MySQL', 'Git', 'GitHub', 'Jira', 'Trello'
  ];

  const projects = [
    {
      title: 'TMoney Landing Page',
      description: 'Internship project for TMoney. Developed responsive web interfaces with focus on usability and modern design using HTML, CSS, and JavaScript.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      image: '✏️',
      link: '#',
      github: 'https://github.com/gerardalessandrov'
    },
    {
      title: 'International Collaborative Projects',
      description: 'Group projects developed with international students from the U.S. at BYU-Idaho. Focus on responsive and dynamic websites with modern technologies.',
      tech: ['React', 'Tailwind', 'TypeScript', 'Vite', 'Git'],
      image: '🌎',
      link: '#',
      github: 'https://github.com/gerardalessandrov'
    },
    {
      title: 'Database-Driven Web Applications',
      description: 'Full-stack projects integrating frontend interfaces with MySQL databases. Practical experience in backend development with Python and C#.',
      tech: ['React', 'MySQL', 'Python', 'C#', 'Git'],
      image: '💾',
      link: '#',
      github: 'https://github.com/gerardalessandrov'
    }
  ];

  const experience = [
    {
      role: 'Junior Frontend Developer Intern',
      company: 'TMoney',
      period: 'January - March 2023',
      description: 'Developed web interfaces with focus on usability and responsive design. Applied best practices in HTML, CSS, and JavaScript for real projects. Improved technical skills in version control with Git and development tools.'
    },
    {
      role: 'Software Development Student',
      company: 'Brigham Young University-Idaho',
      period: 'September 2023 - Present',
      description: 'Currently pursuing Software Developer degree with intensive English curriculum. Working on international group projects with U.S. students. Gaining hands-on experience in frontend and backend technologies including React, Python, C#, and MySQL.'
    }
  ];

  const education = [
    {
      degree: 'Software Developer',
      institution: 'Brigham Young University-Idaho',
      period: 'September 2023 - Present',
      description: 'Technologies: HTML, CSS, JavaScript, React, Tailwind, TypeScript, Vite, C#, Python, MySQL. Development of international group projects with U.S. students. Experience with Jira, Trello, and Git version control.'
    },
    {
      degree: 'Intensive English Course for Call Center - B2 Level',
      institution: 'Language Institute',
      period: '2023 (160 hours, 4 months)',
      description: 'Intermediate English: listening and reading comprehension. Practice with native teachers and students from Central America. Achieved B2 level proficiency.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-md z-50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Gerard Vigo Rodrigues
            </motion.h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6">
              {['Home', 'About Me', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="hover:text-purple-400 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 flex flex-col gap-4"
            >
              {['Home', 'About Me', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="hover:text-purple-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </motion.div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-6">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-6xl mb-6 shadow-2xl shadow-purple-500/50"
              >
                👨‍💻
              </motion.div>
            </div>
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Aspiring <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Full Stack Developer</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Frontend Developer in training with practical experience in HTML, CSS, JavaScript, React, and databases. 
              Strong adaptability, multicultural teamwork, and focus on continuous learning.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-shadow"
              >
                <Mail size={20} />
                Contact Me
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/assets/Gerard-Vigo-RodriguesCV.pdf"
                download="Gerard-Vigo-Rodrigues-CV.pdf"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold flex items-center justify-center gap-2 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <Download size={20} />
                Download CV
              </motion.a>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-6 justify-center"
            >
              <motion.a 
                whileHover={{ scale: 1.2 }}
                href="https://github.com/gerardalessandrov" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                <Github size={28} />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.2 }}
                href="https://www.linkedin.com/in/gerard-vigo-rodrigues-5328b3268/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition-colors"
              >
                <Linkedin size={28} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:vigogerard2025@gmail.com"
                className="hover:text-purple-400 transition-colors"
              >
                <Mail size={28} />
              </motion.a>
              <motion.div className="text-sm text-gray-400">
                <p>+51 973 474 568</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-me" className="py-20 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">About Me</h3>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I am a Frontend Developer in training with practical experience from my internship at TMoney and 
                ongoing studies at Brigham Young University-Idaho. I have a strong capacity for adaptation, 
                multicultural teamwork, and a focus on continuous learning.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                I am committed to writing clean, responsive, and functional code, with experience developing 
                international collaborative projects with students from the United States. I work with modern 
                technologies including React, TypeScript, and MySQL, and I'm familiar with task-tracking tools 
                like Jira, Trello, and Git version control.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                I am actively seeking paid internship opportunities where I can apply my technical knowledge, 
                contribute to a dynamic team, and continue growing professionally in real-world application development.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <Code2 className="text-purple-400" />
              Technical Skills
            </h4>
            <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto mb-16">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm font-semibold"
                >
                  {skill}
                </motion.div>
              ))}
            </div>

            {/* Soft Skills */}
            <h4 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <GraduationCap className="text-purple-400" />
              Soft Skills
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                'Autonomous & Continuous Learning',
                'Multicultural Adaptability',
                'Effective Communication & Leadership',
                'Organization & Task Prioritization',
                'Teamwork & Empathy',
                'Spanish (Native) & English (B2)'
              ].map((softSkill, index) => (
                <motion.div
                  key={softSkill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="px-4 py-3 bg-white/5 rounded-lg border border-purple-500/20 text-center"
                >
                  {softSkill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <Briefcase className="text-purple-400" />
            Featured Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all shadow-xl"
              >
                <div className="text-6xl mb-4">{project.image}</div>
                <h4 className="text-2xl font-bold mb-3">{project.title}</h4>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-purple-500/20 rounded-full text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a 
                    href={project.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink size={18} /> Demo
                  </a>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Github size={18} /> Code
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-black/20">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3">
            <GraduationCap className="text-purple-400" />
            Experience & Education
          </h3>
          
          {/* Experience */}
          <div className="mb-16">
            <h4 className="text-2xl font-bold mb-8 text-purple-400">Professional Experience</h4>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all"
                >
                  <h5 className="text-xl font-bold text-purple-400 mb-2">{exp.role}</h5>
                  <p className="text-lg text-gray-300 mb-1">{exp.company}</p>
                  <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
                  <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h4 className="text-2xl font-bold mb-8 text-purple-400">Education</h4>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-purple-500/50 transition-all"
                >
                  <h5 className="text-xl font-bold text-purple-400 mb-2">{edu.degree}</h5>
                  <p className="text-lg text-gray-300 mb-1">{edu.institution}</p>
                  <p className="text-sm text-gray-400 mb-4">{edu.period}</p>
                  <p className="text-gray-300 leading-relaxed">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Let's Work Together</h3>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm available for internship opportunities, freelance projects, and collaborations. 
              Feel free to reach out!
            </p>
            
            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigator.clipboard.writeText('vigogerard2025@gmail.com');
                  alert('✅ Email copied to clipboard!\n\nvigogerard2025@gmail.com\n\nYou can now paste it in your email client.');
                }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold text-lg shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-shadow cursor-pointer"
              >
                <Mail size={24} />
                Copy Email
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/gerard-vigo-rodrigues-5328b3268/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-colors"
              >
                <Linkedin size={24} />
                LinkedIn
              </motion.a>
              
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/gerardalessandrov"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-colors"
              >
                <Github size={24} />
                GitHub
              </motion.a>
            </div>
            
            {/* Email Display with Copy Button */}
            <div className="mt-8 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-purple-500/30 max-w-md mx-auto">
              <p className="text-sm text-gray-400 mb-2">Or copy my email:</p>
              <div className="flex items-center justify-center gap-3">
                <code className="text-purple-400 font-mono text-lg">vigogerard2025@gmail.com</code>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => {
                    navigator.clipboard.writeText('vigogerard2025@gmail.com');
                    alert('Email copied to clipboard!');
                  }}
                  className="px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg transition-colors text-sm"
                >
                  Copy
                </motion.button>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="mt-12 flex flex-col gap-4 text-gray-300">
              <p className="text-sm text-gray-400">Connect with me:</p>
              <div className="flex gap-6 justify-center">
                <motion.a 
                  whileHover={{ scale: 1.2 }}
                  href="mailto:vigogerard2025@gmail.com" 
                  className="flex flex-col items-center gap-2 hover:text-purple-400 transition-colors"
                >
                  <Mail size={32} className="text-purple-400" />
                  <span className="text-xs">Email</span>
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.2 }}
                  href="https://github.com/gerardalessandrov" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 hover:text-purple-400 transition-colors"
                >
                  <Github size={32} className="text-purple-400" />
                  <span className="text-xs">GitHub</span>
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.2 }}
                  href="https://www.linkedin.com/in/gerard-vigo-rodrigues-5328b3268/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 hover:text-purple-400 transition-colors"
                >
                  <Linkedin size={32} className="text-purple-400" />
                  <span className="text-xs">LinkedIn</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-black/30 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p className="mb-4">Built with ❤️ using Next.js, React and Tailwind CSS</p>
          <p>© 2024 Gerard Vigo Rodrigues. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}