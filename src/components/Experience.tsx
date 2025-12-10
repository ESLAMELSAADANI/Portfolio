import { Calendar, MapPin, ExternalLink, Briefcase, GraduationCap, Trophy } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Experience() {
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

    const element = document.getElementById('experience');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      title: 'Freelance Part-time Programming Instructor',
      company: 'Self-Employed',
      location: 'Al-Mansoura, Egypt',
      period: 'Aug 2025 – Present',
      type: 'Current',
      description: [
        'Teaching programming fundamentals, OOP, data structures, and algorithms to beginners',
        'Conducting interactive group sessions and simplifying complex concepts with examples',
        'Helping students build strong foundation in programming logic and problem-solving',
        'Mentoring aspiring developers in their coding journey'
      ],
      technologies: ['C++', 'OOP', 'Data Structures', 'Algorithms', 'Teaching'],
      icon: Briefcase,
      color: 'from-purple-500 to-blue-500'
    },
    {
      title: 'ITI Back End ASP.NET Developer',
      company: 'Information Technology Institute (ITI)',
      location: 'Al-Mansoura, Egypt',
      period: 'Jul 2025 – Dec 2025',
      type: 'Training',
      description: [
        'Intensive Code Camp trainee building real-world projects using ASP.NET Core MVC and Web API',
        'Working with Entity Framework Core for data access and management',
        'Applying LINQ, SQL Server, Design Patterns, and Agile development practices',
        'Following Clean Code principles and modern software architecture patterns'
      ],
      technologies: ['ASP.NET Core', 'MVC', 'Web API', 'EF Core', 'LINQ', 'SQL Server', 'Design Patterns'],
      icon: GraduationCap,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Route Academy Intern',
      company: 'Route Academy',
      location: 'Cairo, Egypt',
      period: 'May 2024 – May 2025',
      type: 'Internship',
      description: [
        'Programming Intern: Mastered C++, OOP, Data Structures, Algorithms, and Java fundamentals',
        'Learned SOLID principles, Design Patterns, Unit Testing, and Database management',
        'Back-end ASP.NET Intern: Applied ASP.NET MVC, Web API, EF Core, and SignalR',
        'Built scalable backend applications following industry best practices'
      ],
      technologies: ['C++', 'Java', 'ASP.NET MVC', 'Web API', 'EF Core', 'SignalR', 'SOLID', 'Unit Testing'],
      icon: GraduationCap,
      color: 'from-cyan-500 to-teal-500'
    },
    {
      title: 'Graduation Project – LOCUS App',
      company: 'Mansoura University',
      location: 'Al-Mansoura, Egypt',
      period: 'Sep 2023 – Oct 2024',
      type: 'Project',
      description: [
        '🏆 Won 1st place in Environment Hackathon at Mansoura University (30+ teams)',
        'Built comprehensive authentication APIs (register, login, OTP verification, password reset)',
        'Developed space events APIs and community features (posts, likes, comments)',
        'Implemented secure file storage using Amazon S3 and comprehensive API documentation'
      ],
      technologies: ['PHP', 'Laravel', 'MySQL', 'Amazon S3', 'REST APIs', 'Postman'],
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      links: {
        documentation: 'https://documenter.getpostman.com/view/30818344/2sA2xh2YTj',
        github: 'https://github.com/ESLAMELSAADANI/LOCUS_APIs-U-'
      }
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 text-purple-600 font-medium mb-4">
            <Briefcase size={20} className="animate-pulse" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Experience & <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My professional journey in software development, from learning fundamentals to building award-winning projects.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative transform transition-all duration-1000 ${
                  isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 w-5 h-5 rounded-full bg-gradient-to-r ${exp.color} border-4 border-white shadow-lg hidden md:block z-10`}></div>

                <div className="md:ml-20 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100 group">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div className="mb-4 lg:mb-0 flex-1">
                      <div className="flex items-center mb-2">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${exp.color} text-white mr-3 group-hover:scale-110 transition-transform duration-300`}>
                          <exp.icon size={20} />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                            {exp.title}
                          </h4>
                          <div className="flex items-center text-blue-600 font-medium">
                            <ExternalLink size={16} className="mr-2" />
                            {exp.company}
                          </div>
                        </div>
                      </div>
                      
                      {exp.type && (
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                          exp.type === 'Current' ? 'bg-green-100 text-green-700' :
                          exp.type === 'Training' ? 'bg-blue-100 text-blue-700' :
                          exp.type === 'Project' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-purple-100 text-purple-700'
                        }`}>
                          {exp.type}
                        </span>
                      )}
                    </div>
                    
                    <div className="flex flex-col lg:text-right text-gray-600 space-y-1">
                      <div className="flex items-center lg:justify-end">
                        <Calendar size={16} className="mr-2 lg:order-2 lg:ml-2 lg:mr-0 text-purple-500" />
                        <span className="lg:order-1 font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center lg:justify-end">
                        <MapPin size={16} className="mr-2 lg:order-2 lg:ml-2 lg:mr-0 text-blue-500" />
                        <span className="lg:order-1">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-700 flex items-start leading-relaxed">
                        <span className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-gradient-to-r ${exp.color}`}></span>
                        <span dangerouslySetInnerHTML={{ __html: item }}></span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech, i) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-purple-100 hover:text-purple-700 transition-colors duration-300 cursor-default"
                        style={{ animationDelay: `${i * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {exp.links && (
                    <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                      {exp.links.documentation && (
                        <a
                          href={exp.links.documentation}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200 hover:underline"
                        >
                          <ExternalLink size={16} className="mr-1" />
                          API Documentation
                        </a>
                      )}
                      {exp.links.github && (
                        <a
                          href={exp.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-gray-600 hover:text-gray-700 font-medium transition-colors duration-200 hover:underline"
                        >
                          <ExternalLink size={16} className="mr-1" />
                          Source Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
