import { ExternalLink, Github, Calendar, Trophy, Code, Database, Globe, Dock } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Academix',
      description: 'A comprehensive academic management system that streamlines university operations. It includes modules for Departments, Students, Courses, Users, and Roles with secure authentication, role-based access, and a modern responsive UI.',
      image: '/Academix.png',
      technologies: ['ASP.NET Core MVC', 'Entity Framework Core', 'SQL Server', 'Bootstrap', 'C#'],
      liveUrl: 'https://academixx.runasp.net/',
      githubUrl: 'https://github.com/ESLAMELSAADANI/Academix',
      featured: true,
      type: 'Web Application'
    },
    {
      title: 'LOCUS - Environment App',
      description: 'Award-winning graduation project that secured 1st place in Environment Hackathon at Mansoura University. A comprehensive platform for environmental awareness with authentication, space events, and community features.',
      image: '/Locus.jpg',
      technologies: ['PHP', 'Laravel', 'MySQL', 'Amazon S3', 'REST APIs'],
      githubUrl: 'https://github.com/ESLAMELSAADANI/LOCUS_APIs-U-',
      documentationUrl: 'https://documenter.getpostman.com/view/30818344/2sA2xh2YTj',
      featured: true,
      award: '🏆 1st Place Winner',
      type: 'Backend API'
    },
    {
      title: 'Full Bank System',
      description: 'Comprehensive banking system built with C++ featuring OOP principles, file-based data management, and secure transaction handling. Includes account management, transfers, and transaction history.',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['C++', 'OOP', 'File Management', 'Data Structures'],
      githubUrl: 'https://github.com/ESLAMELSAADANI/BankSystem_CPP',
      featured: false,
      type: 'Console Application'
    },
    {
      title: 'ITI E-Commerce Project',
      description: 'Modern e-commerce website with responsive design, product catalog, shopping cart functionality, and user-friendly interface. Built using modern web technologies.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      liveUrl: 'https://iti-e-commerce-project.vercel.app/',
      githubUrl: 'https://github.com/ESLAMELSAADANI',
      featured: false,
      type: 'Web Application'
    },
    {
      title: 'Library Management System',
      description: 'Console-based library management system with book cataloging, member management, and borrowing system. Demonstrates strong programming fundamentals and logical thinking.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['C++', 'Functions', 'File I/O', 'Data Management'],
      githubUrl: 'https://github.com/ESLAMELSAADANI/LibrarySystemCPP',
      featured: false,
      type: 'Console Application'
    },
    {
      title: 'OOP Examination System',
      description: 'Object-oriented examination system with MCQ and True/False questions, supporting both Final and Practice modes. Demonstrates advanced OOP concepts and SOLID principles.',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['C#', 'OOP', 'SOLID Principles', 'Console App'],
      githubUrl: 'https://github.com/ESLAMELSAADANI',
      featured: false,
      type: 'Console Application'
    },
    {
      title: 'B/D Front-End Project',
      description: 'Beautiful and responsive front-end project showcasing modern web design principles, clean layouts, and interactive user interfaces.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['HTML', 'CSS', 'Responsive Design', 'GitHub Pages'],
      liveUrl: 'https://iti-html-css-project.vercel.app/',
      githubUrl: 'https://github.com/ESLAMELSAADANI',
      featured: false,
      type: 'Web Design'
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Backend API': return Database;
      case 'Console Application': return Dock;
      case 'Web Application': return Globe;
      default: return Code;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Backend API': return 'from-purple-500 to-blue-500';
      case 'Desktop Application': return 'from-blue-500 to-cyan-500';
      case 'Web Application': return 'from-cyan-500 to-teal-500';
      case 'Console Application': return 'from-gray-500 to-gray-600';
      case 'Educational Tool': return 'from-green-500 to-emerald-500';
      case 'Web Design': return 'from-pink-500 to-rose-500';
      default: return 'from-purple-500 to-blue-500';
    }
  };

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0l8 8-8 8V8h-4v2h4zM8 36h2v-4H8v4zm0-8h2v-4H8v4zm0-8h2v-4H8v4zm0-8h2V8H8v4zm8 0h4V8h-4v4zm8 0h4V8h-4v4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 text-purple-600 font-medium mb-4">
            <Code size={20} className="animate-pulse" />
            <span>Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A showcase of my development journey, from award-winning projects to practical applications 
            demonstrating my skills in backend development and software engineering.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {featuredProjects.map((project, index) => {
            const TypeIcon = getTypeIcon(project.type);
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ animationDelay: `${200 + index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                    {project.award && (
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.award}
                      </span>
                    )}
                  </div>

                  <div className="absolute top-4 right-4">
                    <div className={`p-2 rounded-full bg-gradient-to-r ${getTypeColor(project.type)} text-white shadow-lg`}>
                      <TypeIcon size={20} />
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium hover:from-purple-100 hover:to-blue-100 hover:text-purple-700 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200 hover:underline"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Live Demo
                      </a>
                    )}
                    {project.documentationUrl && (
                      <a
                        href={project.documentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 hover:underline"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        Documentation
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-gray-600 hover:text-gray-700 font-medium transition-colors duration-200 hover:underline"
                      >
                        <Github size={16} className="mr-1" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => {
              const TypeIcon = getTypeIcon(project.type);
              return (
                <div
                  key={index}
                  className={`group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${getTypeColor(project.type)} text-white group-hover:scale-110 transition-transform duration-300`}>
                      <TypeIcon size={20} />
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {project.type}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                    {project.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-200 text-gray-600 rounded text-xs font-medium">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex items-center space-x-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-purple-600 hover:text-purple-700 transition-colors duration-200"
                        title="Live Demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        title="Source Code"
                      >
                        <Github size={16} />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
