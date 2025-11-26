import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  type: 'work' | 'education' | 'freelance';
  projects?: string[];
}

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Freelance Web Developer",
      company: "Independent Projects",
      period: "2025 - Present",
      type: "freelance",
      description: [
        "Developing custom web solutions for diverse client requirements",
        "Building responsive and scalable web applications from concept to deployment",
        "Collaborating with clients to transform ideas into functional digital products",
        "Providing ongoing maintenance and feature enhancements",
        "Working with modern technologies to deliver cutting-edge solutions"
      ],
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS", "TypeScript"],
      projects: ["Various Client Projects", "Web Applications", "Business Websites"]
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Mite Solutions",
      period: "2025",
      type: "work",
      description: [
        "Developing booking platforms with features similar to BookMyShow",
        "Creating responsive user interfaces for event management systems",
        "Implementing interactive seat selection and booking flows",
        "Building admin dashboards for event organizers",
        "Optimizing frontend performance and user experience"
      ],
      technologies: ["React", "JavaScript", "CSS3", "HTML5", "Redux", "Material-UI"],
      projects: ["Event Booking Platform", "Ticket Management System"]
    },
    {
      id: 3,
      title: "Full Stack Developer",
      company: "APTA Innovation",
      period: "2024 - 2025",
      type: "work",
      description: [
        "Developed Vyzo - a comprehensive doctor-patient token tracking application",
        "Implemented real-time token management for hospital workflows",
        "Built responsive interfaces for doctors, patients, and administrators",
        "Integrated real-time notifications and appointment scheduling system",
        "Optimized application performance for healthcare environments"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Socket.IO", "Express.js", "Tailwind CSS"],
      projects: ["Vyzo - Doctor Patient Token Tracking System"]
    },
    {
      id: 4,
      title: "Full Stack Developer Trainee",
      company: "Bridgeon Solutions",
      period: "2023 - 2024",
      type: "work",
      description: [
        "Completed comprehensive full-stack development training program",
        "Learned modern web development technologies and best practices",
        "Worked on real-world projects under expert mentorship",
        "Gained hands-on experience with MERN stack development",
        "Developed foundational skills in software architecture and design patterns"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript", "CSS3"],
      projects: ["Training Projects", "Learning Applications"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work': return 'from-blue-500 to-cyan-500';
      case 'education': return 'from-purple-500 to-pink-500';
      case 'freelance': return 'from-green-500 to-teal-500';
      default: return 'from-gray-500 to-gray-700';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'work':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        );
      case 'education':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v6l9-5-9-5-9 5 9 5z" />
          </svg>
        );
      case 'freelance':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen  py-12  ">
      {/* Enhanced Header */}
      <div className='w-[90%] md:w-[80%] mx-auto'>
      <div className="text-center mb-16 relative ">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold relative z-10 mb-6">
          <span className="text-white">PROFESSIONAL</span>
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-500 bg-clip-text text-transparent">
            {" "}
            JOURNEY
          </span>
        </h1>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto relative z-10">
          From trainee to professional developer - My growth story
        </p>

        {/* Animated underline */}
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto mt-6 rounded-full relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
        </div>
      </div>

      {/* Timeline */}
      <div ref={ref} className="max-w-4xl mx-auto relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-transparent transform -translate-x-1/2 hidden md:block"></div>

        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`relative flex flex-col md:flex-row ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            } mb-12 group`}
          >
            {/* Timeline dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transform -translate-x-1/2 z-10 hidden md:flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>

            {/* Content Card */}
            <div className={`ml-0 md:ml-6 md:w-1/2 ${index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'}`}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/10"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${getTypeColor(experience.type)}`}>
                        {getTypeIcon(experience.type)}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{experience.title}</h3>
                        <p className="text-cyan-300 font-medium">{experience.company}</p>
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                    {experience.period}
                  </span>
                </div>

                {/* Description */}
                <ul className="space-y-2 mb-4">
                  {experience.description.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-300 text-sm">
                      <span className="text-purple-400 mr-2">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Key Projects */}
                {experience.projects && (
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-300 mb-2">
                      {experience.type === 'freelance' ? 'Project Types:' : 'Key Projects:'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.projects.map((project, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/30"
                        >
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-gray-700/50 text-cyan-200 rounded-full border border-gray-600/50 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stats Section */}
      <div className="max-w-4xl mx-auto mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { number: '4', label: 'Professional Roles' },
          { number: '2+', label: 'Years Experience' },
          { number: '15+', label: 'Technologies' },
          { number: '10+', label: 'Projects Completed' }
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center p-6 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300"
          >
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              {stat.number}
            </div>
            <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Progress Bar Showing Career Growth */}
      <div className="max-w-4xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-6 border border-gray-700/50"
        >
          <h3 className="text-xl font-bold text-white text-center mb-6">Career Progression</h3>
          <div className="flex items-center justify-between relative">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 transform -translate-y-1/2 z-0"></div>
            
            {/* Progress Steps */}
            {experiences.map((exp, index) => (
              <div key={exp.id} className="flex flex-col items-center relative z-10">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  index === 0 
                    ? 'bg-gradient-to-r from-green-500 to-teal-500' 
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                }`}>
                  <span className="text-white text-xs font-bold">{index + 1}</span>
                </div>
                <div className="text-center mt-2">
                  <p className="text-xs text-gray-300 font-medium">{exp.company.split(' ')[0]}</p>
                  <p className="text-xs text-gray-500">{exp.period.split(' - ')[0]}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            From Learning to Leading - Ready for New Challenges
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            My journey from a trainee to a professional developer has equipped me with diverse skills 
            across healthcare, e-commerce, booking platforms, and freelance projects. I'm ready to bring 
            this experience to your next project.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Build Together
          </motion.button>
        </motion.div>
      </div>
      </div>
    </div>
  );
};

export default Experience;