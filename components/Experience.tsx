import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  BriefcaseIcon,
  AcademicCapIcon,
  CodeBracketIcon,
} from "@heroicons/react/20/solid";

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      id: 1,
      title: "Full Stack Developer Trainee",
      company: "Bridgeon Solutions",
      period: "2023 - 2024",
      type: "work",
      description: [
        "Completed comprehensive full-stack development training program",
        "Learned modern web development technologies and best practices",
        "Gained hands-on experience with MERN stack development",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "JavaScript"],
    },

    {
      id: 2,
      title: "Full Stack Developer",
      company: "APTA Innovation",
      period: "2024 - 2025",
      type: "work",
      description: [
        "Developed Vyzo - a comprehensive doctor-patient token tracking application",
        "Implemented real-time token management for hospital workflows",
        "Built responsive interfaces for doctors, patients, and administrators",
      ],
      technologies: ["React", "Node.js", "MongoDB", "Socket.IO", "Express.js"],
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "Mite Solutions",
      period: "2025",
      type: "work",
      description: [
        "Developed booking platforms with features similar to BookMyShow",
        "Created responsive user interfaces for event management systems",
        "Implemented interactive seat selection and booking flows",
      ],
      technologies: ["React", "JavaScript", "Redux", "Material-UI", "CSS3"],
    },
    {
      id: 4,
      title: "Freelance Web Developer",
      company: "Independent Projects",
      period: "2025 - Present",
      type: "freelance",
      description: [
        "Developing custom web solutions for diverse client requirements",
        "Building responsive and scalable web applications from concept to deployment",
        "Collaborating with clients to transform ideas into functional digital products",
      ],
      technologies: ["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "work":
        return <BriefcaseIcon className="w-5 h-5 text-teal-400" />;
      case "freelance":
        return <CodeBracketIcon className="w-5 h-5 text-teal-400" />;
      default:
        return <AcademicCapIcon className="w-5 h-5 text-teal-400" />;
    }
  };
  const handleEmailClick = () => {
    window.location.href =
      "mailto:evjahfarali@gmail.com?subject=Job%20Opportunity%20for%20Jahfar%20Ali&body=Hi%20Jahfar,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20potential%20opportunity...";
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/jahfarali", "_blank");
  };
  return (
    <div className=" py-16 md:py-24">
      <div className="w-[90%] md:w-[80%] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            MY{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              JOURNEY
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto rounded-full"></div>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            From trainee to professional developer - My growth story
          </p>
        </div>

        {/* Experience Timeline */}
        <div ref={ref} className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-teal-500/50 to-cyan-500/50 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } gap-6 md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 hidden md:flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>

                {/* Content */}
                <div
                  className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-teal-500/30 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-teal-500/20 to-cyan-500/20">
                          {getTypeIcon(experience.type)}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {experience.title}
                          </h3>
                          <p className="text-teal-400 font-medium">
                            {experience.company}
                          </p>
                        </div>
                      </div>
                      <span className="px-3 py-1 text-sm bg-teal-500/20 text-teal-300 rounded-full border border-teal-500/30 whitespace-nowrap ml-2">
                        {experience.period}
                      </span>
                    </div>

                    {/* Description */}
                    <ul className="space-y-2 mb-4">
                      {experience.description.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-slate-300 text-sm"
                        >
                          <span className="text-teal-400 mr-2">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-white/10 text-slate-300 rounded-md border border-white/10 hover:border-teal-500/50 transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Simple Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">
          {[
            { number: "4", label: "Professional Roles" },
            { number: "2+", label: "Years Experience" },
            { number: "15+", label: "Technologies" },
            { number: "10+", label: "Projects" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-4 md:p-6 bg-white/5 rounded-xl border border-white/10 hover:border-teal-500/30 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-slate-400 text-xs md:text-sm mt-2">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Simple Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="inline-block bg-white/5 rounded-xl p-6 md:p-8 border border-white/10">
            <p className="text-slate-300 mb-4">
              💼 <span className="text-white font-semibold">Open to work</span>{" "}
              | Looking for Full Stack Developer opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() =>
                  (window.location.href = "mailto:evjahfarali@gmail.com")
                }
                className="px-6 py-2.5 bg-gradient-to-r from-teal-400 to-cyan-500 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-teal-500/50 transition-all duration-300"
              >
                📧 Contact Me
              </button>
              <button
                onClick={() =>
                  window.open("https://www.linkedin.com/in/jahfarali", "_blank")
                }
                className="px-6 py-2.5 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300"
              >
                🔗 LinkedIn
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
