// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";

// const Projects = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const projectsPerPage = 6;

//   const projects = [
//     // Pocket Store - Backend Only Project
//     {
//       id: 1,
//       href: "#",
//       image: "/pok3.png",
//       title: "Pocket Store - Backend API",
//       description:
//         "Backend development for a multi-user mobile shopping platform. Built RESTful APIs, authentication system, database design, and real-time features supporting customers, shops, and sales teams with role-based access control.",
//       category: "Backend Development",
//       tech: [
//         "Node.js",
//         "Express.js",
//         "MongoDB",
//         "JWT",
//         "REST APIs",
//         "Socket.IO",
//       ],
//       backendOnly: true,
//       repoLink: "#",
//     },
//     // Your existing projects
//     {
//       id: 2,
//        href: "#", // Add your live demo link
//       image: "/siyana1.png",
//       title: "Luxury Jewelry E-commerce",
//       description:
//         "Full-stack jewelry e-commerce platform with product catalog, user authentication, shopping cart, and automated WhatsApp order notifications. Features cash on delivery and direct merchant communication.",
//       category: "Full Stack",
//       tech: ["Next.js", "firebase", "JWT", "WhatsApp API", "Cloudinary"],
//       features: [
//         "User Registration & Authentication",
//         "Category-based Product Catalog",
//         "Advanced Shopping Cart System",
//         "Automated WhatsApp Order Notifications",
//         "Order Management Dashboard",
//         "Product Search & Filtering",
//         "Wishlist/Save for Later",
//         "Cash on Delivery Support",
//         "Responsive Mobile Design",
//       ],
//       backendOnly: false,
//       repoLink: "#", // Add your GitHub repo link
//     },
      
//     {
//       id: 3,
//       href: "https://highhydration-web-beta.vercel.app",
//       image: "/project1.png",
//       title: "Hydration Web App",
//       description:
//         "Real-time water distribution management system built with React.js, Tailwind CSS, Node.js, MongoDB, and Socket.IO, featuring role-based access and live order tracking.",
//       category: "Full Stack",
//       tech: ["React", "Node.js", "MongoDB", "Socket.IO"],
//     },
//     {
//       id: 4,
//         href: "https://www.sabukottotty.com/",
//       image: "/sabu.png", // You'll need to add this image
//       title: "Professional Portfolio Platform",
//       description:
//         "Advanced portfolio management system with analytics dashboard, project showcase, and client management features for creative professionals.",
//       category: "Full Stack",
//       tech: ["Next.js", "TypeScript", "Tailwind css"],
//       features: [
//         "Client Portal",
//         "Contact Form Integration",
//         "SEO Optimization",
//       ],
//     },
     
//     {
//       id: 5,
//       href: "https://nutrivibex-mitolyn.netlify.app/",
//       image: "/mitolyn.png",
//       title: "Mitolyn - Boost Metabolism",
//       description:
//         "Affiliate marketing landing page for Mitolyn supplement, developed using React.js and Tailwind CSS with a responsive and conversion-optimized design.",
//       category: "Marketing",
//       tech: ["React", "Tailwind CSS"],
//     },
//     {
//       id: 6,
//       href: "#",
//       image: "/whatsapp-chatbot.png",
//       title: "WhatsApp Chatbot",
//       description:
//         "Automated WhatsApp chatbot for real-time doctor availability and token number inquiries, built using Node.js, Express.js, WhatsApp Web.js, and Axios.",
//       category: "Backend",
//       tech: ["Node.js", "Express", "WhatsApp API"],
//     },
//     {
//       id: 7,
//       href: "https://hubvyzo.netlify.app",
//       image: "/hub-vyzo1.jpg",
//       title: "Vyzo Hub Platform",
//       description:
//         "Real-time hospital doctor appointment and activity management platform built with React.js, Tailwind CSS, Node.js, MongoDB, and Socket.IO, supporting live updates and role-based access control.",
//       category: "Full Stack",
//       tech: ["React", "Node.js", "MongoDB", "Socket.IO"],
//     },
//     {
//       id: 8,
//      href: "https://vyzo.netlify.app",
//       image: "/vyzoscr.png",
//       title: "Vyzo Static Website",
//       description:
//         "Developed a responsive static landing page for Vyzo to showcase its services, features, and brand presence using React.js, Tailwind CSS and Framer Motion.",
//       category: "Web Development",
//       tech: ["React", "Tailwind", "Framer Motion"],
//     },
//     {
//       id: 9,
//      href: "https://nutrivibex-smoothiedeit.netlify.app/",
//       image: "/smoothie.png",
//       title: "Smoothie Diet Landing Page",
//       description:
//         "Responsive affiliate marketing landing page for the Smoothie Diet, built using React.js and Tailwind CSS with a focus on clean UI and conversions.",
//       category: "Marketing",
//       tech: ["React", "Tailwind CSS"],
//     },
//   ];

//   // Calculate pagination
//   const indexOfLastProject = currentPage * projectsPerPage;
//   const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//   const currentProjects = projects.slice(
//     indexOfFirstProject,
//     indexOfLastProject
//   );
//   const totalPages = Math.ceil(projects.length / projectsPerPage);

//   // Pagination handlers
//   const nextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const prevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const goToPage = (pageNumber: any) => {
//     setCurrentPage(pageNumber);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-black/0 via-gray-900/40 to-black/0
//  py-12 ">
//       {/* Enhanced Header */}
//       <div className="w-[90%] md:w-[80%] mx-auto">
//       <div className="text-center mb-16 relative ">
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="w-64 h-64 bg-gradient-to-r from-teal-400/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
//         </div>

//         <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold relative z-10 mb-6">
//           <span className="text-white">MY</span>
//           <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
//             {" "}
//             PROJECTS
//           </span>
//         </h1>

//         <p className="text-xl text-gray-300 max-w-2xl mx-auto relative z-10">
//           Hover over projects to see details
//         </p>

//         {/* Animated underline */}
//         <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto mt-6 rounded-full relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer"></div>
//         </div>
//       </div>

//       {/* Projects Grid */}
//       <div className=" mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//           {currentProjects.map((project) => (
//             <div
//               key={project.id}
//               className="group perspective-1000 w-full h-80 relative" // Added relative for positioning
//             >
//               <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-75 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-md animate-pulse"></div>
//               <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl opacity-50 group-hover:opacity-75 transition-all duration-700 blur-lg group-hover:blur-xl"></div>{" "}
//               <div className="relative w-full h-full transition-all duration-700 transform-style-preserve-3d group-hover:[transform:rotateY(180deg)]">
//                 {/* Front Side - Only Image & Title */}
//                 <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-gray-700/50">
//                   {/* Background Glow Effect */}
//                   <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

//                   {/* Project Image */}
//                   <div className="relative h-full overflow-hidden">
//                     <Image
//                       src={project.image}
//                       alt={project.title}
//                       fill
//                       sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                       className="object-cover transition-transform duration-700 group-hover:scale-110"
//                     />

//                     {/* Overlay Gradient */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500"></div>

//                     {/* Category Badge */}
//                     <div className="absolute top-4 left-4">
//                       <span className="px-3 py-1 text-xs font-medium bg-gray-900/80 backdrop-blur-sm rounded-full text-cyan-300 border border-cyan-500/30">
//                         {project.category}
//                       </span>
//                     </div>

//                     {/* Backend Only Badge */}
//                     {project.backendOnly && (
//                       <div className="absolute top-4 right-4">
//                         <span className="px-3 py-1 text-xs font-medium bg-purple-500/20 backdrop-blur-sm rounded-full text-purple-300 border border-purple-500/30">
//                           Backend
//                         </span>
//                       </div>
//                     )}
//                   </div>

//                   {/* Hover Border Effect */}
//                   <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-teal-400/0 via-cyan-500/0 to-blue-400/0 group-hover:from-teal-400/20 group-hover:via-cyan-500/20 group-hover:to-blue-400/20 transition-all duration-500 opacity-0 group-hover:opacity-100 -z-10"></div>
//                 </div>

//                 {/* Back Side - All Details */}
//                 <div className="absolute inset-0 [transform:rotateY(180deg)] backface-hidden bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-cyan-400/30 p-6 overflow-y-auto">
//                   <div className="h-full flex flex-col">
//                     {/* Title */}
//                     <h3 className="text-xl font-bold text-white mb-3">
//                       {project.title}
//                     </h3>

//                     {/* Description */}
//                     <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-grow">
//                       {project.description}
//                     </p>

//                     {/* Tech Stack */}
//                     <div className="mb-4">
//                       <h4 className="text-sm font-semibold text-cyan-300 mb-2">
//                         Technologies
//                       </h4>
//                       <div className="flex flex-wrap gap-2">
//                         {project.tech.map((tech, index) => (
//                           <span
//                             key={index}
//                             className="px-2 py-1 text-xs bg-gray-700/50 text-cyan-200 rounded-md border border-gray-600/50"
//                           >
//                             {tech}
//                           </span>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Action Buttons */}
//                     <div className="mt-auto">
//                       {project.backendOnly ? (
//                         <div className="flex flex-col space-y-2">
//                           {project.repoLink && project.repoLink !== "#" ? (
//                             <Link
//                               href={project.repoLink}
//                               target="_blank"
//                               className="inline-flex items-center justify-center w-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-200 font-medium rounded-lg transition-all duration-300"
//                             >
//                               <svg
//                                 className="w-4 h-4 mr-2"
//                                 fill="currentColor"
//                                 viewBox="0 0 24 24"
//                               >
//                                 <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                               </svg>
//                               View Code
//                             </Link>
//                           ) : (
//                             <div className="text-center py-2 px-4 bg-gray-800/50 text-gray-400 text-sm rounded-lg border border-gray-600/30">
//                               Backend API Development
//                             </div>
//                           )}
//                         </div>
//                       ) : (
//                         <Link
//                           href={project.href}
//                           target="_blank"
//                           className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30"
//                         >
//                           <span>View Project</span>
//                           <svg
//                             className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
//                             />
//                           </svg>
//                         </Link>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         {/* Modern Pagination */}
//         {totalPages > 1 && (
//           <div className="flex justify-center items-center mt-12 space-x-3">
//             {/* Previous Button - Circular Icon */}
//             <button
//               onClick={prevPage}
//               disabled={currentPage === 1}
//               className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
//                 currentPage === 1
//                   ? "bg-gray-800 text-gray-500 cursor-not-allowed opacity-50"
//                   : "bg-gray-700 text-white hover:bg-cyan-600 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
//               }`}
//             >
//               <svg
//                 className="w-5 h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M15 19l-7-7 7-7"
//                 />
//               </svg>
//             </button>

//             {/* Page Numbers - Circular */}
//             <div className="flex space-x-2">
//               {Array.from({ length: totalPages }, (_, i) => i + 1).map(
//                 (page) => (
//                   <button
//                     key={page}
//                     onClick={() => goToPage(page)}
//                     className={`w-12 h-12 rounded-full transition-all duration-300 font-semibold ${
//                       currentPage === page
//                         ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30 scale-110"
//                         : "bg-gray-700 text-white hover:bg-gray-600 hover:scale-105"
//                     }`}
//                   >
//                     {page}
//                   </button>
//                 )
//               )}
//             </div>

//             {/* Next Button - Circular Icon */}
//             <button
//               onClick={nextPage}
//               disabled={currentPage === totalPages}
//               className={`flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
//                 currentPage === totalPages
//                   ? "bg-gray-800 text-gray-500 cursor-not-allowed opacity-50"
//                   : "bg-gray-700 text-white hover:bg-cyan-600 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25"
//               }`}
//             >
//               <svg
//                 className="w-5 h-5"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M9 5l7 7-7 7"
//                 />
//               </svg>
//             </button>
//           </div>
//         )}

//         {/* Page Info */}
//         <div className="text-center mt-4 text-gray-400">
//           Showing {indexOfFirstProject + 1}-
//           {Math.min(indexOfLastProject, projects.length)} of {projects.length}{" "}
//           projects
//         </div>
//       </div>
// </div>
//     </div>
//   );
// };

// export default Projects;

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { 
  ArrowTopRightOnSquareIcon, 
  CodeBracketIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  XMarkIcon 
} from "@heroicons/react/20/solid";

// Types
interface Project {
  id: number;
  href: string;
  image: string;
  title: string;
  description: string;
  category: string;
  tech: string[];
  backendOnly?: boolean;
  repoLink?: string;
  features?: string[];
  date?: string;
}

const Projects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const projectsPerPage: number = 6;

  const projects: Project[] = [
    {
      id: 1,
      href: "#",
      image: "/pok3.png",
      title: "Pocket Store - Backend API",
      description: "Backend development for a multi-user mobile shopping platform. Built RESTful APIs, authentication system, database design, and real-time features supporting customers, shops, and sales teams with role-based access control.",
      category: "Backend",
      tech: ["Node.js", "Express.js", "MongoDB", "JWT", "REST APIs", "Socket.IO"],
      backendOnly: true,
      repoLink: "#",
      features: ["User Authentication", "Role-based Access", "Real-time Updates", "RESTful APIs", "Database Design", "Order Management"],
      date: "2024",
    },
    {
      id: 2,
      href: "#",
      image: "/siyana1.png",
      title: "Luxury Jewelry E-commerce",
      description: "Full-stack jewelry e-commerce platform with product catalog, user authentication, shopping cart, and automated WhatsApp order notifications. Features cash on delivery and direct merchant communication.",
      category: "Full Stack",
      tech: ["Next.js", "Firebase", "JWT", "WhatsApp API", "Cloudinary"],
      backendOnly: false,
      features: [
        "User Registration & Authentication",
        "Category-based Product Catalog",
        "Advanced Shopping Cart System",
        "Automated WhatsApp Order Notifications",
        "Order Management Dashboard",
        "Product Search & Filtering",
        "Wishlist/Save for Later",
        "Cash on Delivery Support",
        "Responsive Mobile Design",
      ],
      date: "2024",
    },
    {
      id: 3,
      href: "https://highhydration-web-beta.vercel.app",
      image: "/project1.png",
      title: "Hydration Web App",
      description: "Real-time water distribution management system built with React.js, Tailwind CSS, Node.js, MongoDB, and Socket.IO, featuring role-based access and live order tracking.",
      category: "Full Stack",
      tech: ["React", "Node.js", "MongoDB", "Socket.IO", "Tailwind CSS"],
      backendOnly: false,
      features: ["Live Order Tracking", "Role-based Access", "Real-time Updates", "Analytics Dashboard", "Inventory Management"],
      date: "2024",
    },
    {
      id: 4,
      href: "https://www.sabukottotty.com/",
      image: "/sabu.png",
      title: "Professional Portfolio Platform",
      description: "Advanced portfolio management system with analytics dashboard, project showcase, and client management features for creative professionals.",
      category: "Full Stack",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      backendOnly: false,
      features: ["Client Portal", "Contact Form Integration", "SEO Optimization", "Analytics Dashboard", "Project Management"],
      date: "2024",
    },
    {
      id: 5,
      href: "https://nutrivibex-mitolyn.netlify.app/",
      image: "/mitolyn.png",
      title: "Mitolyn - Boost Metabolism",
      description: "Affiliate marketing landing page for Mitolyn supplement, developed using React.js and Tailwind CSS with a responsive and conversion-optimized design.",
      category: "Marketing",
      tech: ["React", "Tailwind CSS"],
      backendOnly: false,
      features: ["Responsive Design", "SEO Optimized", "Conversion-focused", "Fast Loading", "Mobile First"],
      date: "2024",
    },
    {
      id: 6,
      href: "#",
      image: "/whatsapp-chatbot.png",
      title: "WhatsApp Chatbot",
      description: "Automated WhatsApp chatbot for real-time doctor availability and token number inquiries, built using Node.js, Express.js, WhatsApp Web.js, and Axios.",
      category: "Backend",
      tech: ["Node.js", "Express", "WhatsApp API", "Axios"],
      backendOnly: true,
      features: ["Automated Responses", "Real-time Queries", "Token Management", "Doctor Availability", "24/7 Operation"],
      date: "2024",
    },
    {
      id: 7,
      href: "https://hubvyzo.netlify.app",
      image: "/hub-vyzo1.jpg",
      title: "Vyzo Hub Platform",
      description: "Real-time hospital doctor appointment and activity management platform built with React.js, Tailwind CSS, Node.js, MongoDB, and Socket.IO, supporting live updates and role-based access control.",
      category: "Full Stack",
      tech: ["React", "Node.js", "MongoDB", "Socket.IO", "Tailwind CSS"],
      backendOnly: false,
      features: ["Appointment Management", "Real-time Updates", "Doctor/Patient Portal", "Token System", "Analytics Dashboard"],
      date: "2024",
    },
    {
      id: 8,
      href: "https://vyzo.netlify.app",
      image: "/vyzoscr.png",
      title: "Vyzo Static Website",
      description: "Developed a responsive static landing page for Vyzo to showcase its services, features, and brand presence using React.js, Tailwind CSS and Framer Motion.",
      category: "Frontend",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      backendOnly: false,
      features: ["Responsive Design", "Smooth Animations", "SEO Friendly", "Fast Performance", "Modern UI"],
      date: "2024",
    },
    {
      id: 9,
      href: "https://nutrivibex-smoothiedeit.netlify.app/",
      image: "/smoothie.png",
      title: "Smoothie Diet Landing Page",
      description: "Responsive affiliate marketing landing page for the Smoothie Diet, built using React.js and Tailwind CSS with a focus on clean UI and conversions.",
      category: "Marketing",
      tech: ["React", "Tailwind CSS"],
      backendOnly: false,
      features: ["Conversion Optimized", "Mobile Responsive", "Fast Loading", "Clean Design", "SEO Ready"],
      date: "2024",
    },
  ];

  // Pagination calculations
  const indexOfLastProject: number = currentPage * projectsPerPage;
  const indexOfFirstProject: number = indexOfLastProject - projectsPerPage;
  const currentProjects: Project[] = projects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages: number = Math.ceil(projects.length / projectsPerPage);

  // Pagination handlers
  const nextPage = (): void => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevPage = (): void => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPage = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getCategoryColor = (category: string): string => {
    switch (category) {
      case 'Full Stack': return 'bg-gradient-to-r from-teal-500 to-cyan-500';
      case 'Backend': return 'bg-gradient-to-r from-purple-500 to-pink-500';
      case 'Frontend': return 'bg-gradient-to-r from-blue-500 to-indigo-500';
      case 'Marketing': return 'bg-gradient-to-r from-orange-500 to-red-500';
      default: return 'bg-gradient-to-r from-gray-500 to-gray-700';
    }
  };

  const handleProjectClick = (project: Project): void => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (): void => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="bg-[#121121] py-16 md:py-24">
      <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            MY{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent">
              PROJECTS
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Explore my portfolio of web applications and digital solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project, index: number) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 rounded-2xl overflow-hidden border border-white/10 hover:border-teal-500/40 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-teal-500/10 cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${getCategoryColor(project.category)} text-white shadow-lg`}>
                    {project.category}
                  </span>
                </div>

                {/* Backend Badge */}
                {project.backendOnly && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-orange-500/90 text-white backdrop-blur-sm shadow-lg">
                      API Only
                    </span>
                  </div>
                )}

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="px-4 py-2 bg-teal-500 rounded-lg text-white text-sm font-medium">
                      Click to View Details
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-400 transition-colors line-clamp-1">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-3 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 3).map((tech: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 text-xs bg-white/10 text-slate-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-0.5 text-xs bg-white/10 text-slate-300 rounded-md">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-12">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg transition-all duration-300 ${
                currentPage === 1
                  ? "bg-white/5 text-slate-500 cursor-not-allowed"
                  : "bg-white/10 text-white hover:bg-teal-500/20 hover:text-teal-400"
              }`}
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i: number) => i + 1).map((page: number) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 rounded-lg transition-all duration-300 font-medium ${
                    currentPage === page
                      ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white shadow-lg shadow-teal-500/25"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg transition-all duration-300 ${
                currentPage === totalPages
                  ? "bg-white/5 text-slate-500 cursor-not-allowed"
                  : "bg-white/10 text-white hover:bg-teal-500/20 hover:text-teal-400"
              }`}
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Project Count */}
        <div className="text-center mt-4">
          <p className="text-slate-500 text-sm">
            Showing {indexOfFirstProject + 1} - {Math.min(indexOfLastProject, projects.length)} of {projects.length} projects
          </p>
        </div>
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          onClick={closeModal}
        >
          <div 
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div className="relative h-64 md:h-80">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <XMarkIcon className="w-5 h-5" />
              </button>
              <div className="absolute bottom-6 left-6">
                <span className={`px-3 py-1.5 text-sm font-medium rounded-full ${getCategoryColor(selectedProject.category)} text-white shadow-lg`}>
                  {selectedProject.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-3">
                  {selectedProject.title}
                </h2>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">Project Overview</h3>
                <p className="text-slate-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Features Grid */}
              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {selectedProject.features.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-white/10 text-teal-300 rounded-lg text-sm font-medium hover:bg-teal-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Info */}
              <div className="flex flex-wrap gap-4 mb-6 p-4 bg-white/5 rounded-lg">
                <div>
                  <p className="text-slate-400 text-xs">Project Date</p>
                  <p className="text-white font-medium">{selectedProject.date || "2024"}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Project Type</p>
                  <p className="text-white font-medium">{selectedProject.backendOnly ? "Backend API" : "Full Application"}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Status</p>
                  <p className="text-green-400 font-medium">Completed</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                {!selectedProject.backendOnly && selectedProject.href !== "#" ? (
                  <Link
                    href={selectedProject.href}
                    target="_blank"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 text-white font-medium rounded-lg transition-all duration-300"
                  >
                    <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    <span>Live Demo</span>
                  </Link>
                ) : selectedProject.repoLink && selectedProject.repoLink !== "#" ? (
                  <Link
                    href={selectedProject.repoLink}
                    target="_blank"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-300"
                  >
                    <CodeBracketIcon className="w-5 h-5" />
                    <span>View Code</span>
                  </Link>
                ) : (
                  <div className="flex-1 text-center px-6 py-3 bg-white/5 text-slate-400 font-medium rounded-lg">
                    Backend API Project
                  </div>
                )}
                <button
                  onClick={closeModal}
                  className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;