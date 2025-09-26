import { Code, Lightbulb, Users, Award, Server, Database, Globe, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function About() {
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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skills = {
    languages: ['PHP', 'C#', 'C++', 'Java', 'JavaScript', 'SQL', 'HTML', 'CSS'],
    frameworks: ['.NET Core', 'Laravel', 'ASP.NET MVC', 'ASP.NET Web API', 'EF Core', 'Bootstrap'],
    concepts: ['OOP', 'SOLID', 'Design Patterns', 'Clean Code', 'LINQ', 'SignalR'],
    tools: ['Git', 'GitHub', 'SQL Server', 'MySQL', 'Amazon S3', 'Postman']
  };

  const highlights = [
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Specialized in building scalable backend applications using ASP.NET Core and Laravel.',
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Expert in SQL Server, MySQL, and database optimization with Entity Framework Core.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code,
      title: 'Clean Architecture',
      description: 'Following SOLID principles, design patterns, and clean code practices.',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      icon: Award,
      title: 'Problem Solving',
      description: 'Award-winning developer with proven track record in competitive programming.',
      color: 'from-teal-500 to-green-500'
    },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 text-purple-600 font-medium mb-4">
            <Zap size={20} className="animate-pulse" />
            <span>About Me</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Passionate <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Backend Developer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Currently enhancing my skills in .NET Core to build scalable web applications and 
            teaching programming fundamentals to the next generation of developers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className={`space-y-8 transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                With a strong foundation in <span className="font-semibold text-purple-600">Computer Science</span> from 
                Mansoura University and intensive training at <span className="font-semibold text-blue-600">ITI</span>, 
                I've developed expertise in modern backend technologies and software engineering principles.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                My journey includes winning <span className="font-bold text-yellow-600">1st place</span> with the 
                <span className="font-semibold text-purple-600"> LOCUS project</span> at university competitions, 
                demonstrating my ability to deliver innovative solutions under pressure.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Currently working as a <span className="font-semibold text-cyan-600">Programming Instructor</span>, 
                I enjoy sharing knowledge and helping others master programming concepts, data structures, and algorithms.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl border border-purple-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Globe className="mr-2 text-purple-600" size={20} />
                Current Focus
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                  ITI Backend ASP.NET Developer Training
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Building scalable web applications with .NET Core
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                  Teaching programming fundamentals
                </li>
              </ul>
            </div>
          </div>

          <div className={`transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Technical Arsenal</h3>
              
              <div className="space-y-6">
                {Object.entries(skills).map(([category, items], categoryIndex) => (
                  <div key={category} className={`transform transition-all duration-500 delay-${categoryIndex * 100}`}>
                    <h4 className="text-lg font-medium text-gray-800 mb-3 capitalize flex items-center">
                      <div className={`w-3 h-3 rounded-full mr-2 bg-gradient-to-r ${
                        categoryIndex === 0 ? 'from-purple-500 to-blue-500' :
                        categoryIndex === 1 ? 'from-blue-500 to-cyan-500' :
                        categoryIndex === 2 ? 'from-cyan-500 to-teal-500' :
                        'from-teal-500 to-green-500'
                      }`}></div>
                      {category.replace(/([A-Z])/g, ' $1').trim()}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, index) => (
                        <span
                          key={skill}
                          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 cursor-default ${
                            categoryIndex === 0 ? 'bg-purple-100 text-purple-700 hover:bg-purple-200' :
                            categoryIndex === 1 ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' :
                            categoryIndex === 2 ? 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200' :
                            'bg-teal-100 text-teal-700 hover:bg-teal-200'
                          }`}
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={highlight.title}
              className={`group text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ animationDelay: `${600 + index * 150}ms` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${highlight.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <highlight.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                {highlight.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}