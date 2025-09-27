import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Education() {
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

    const element = document.getElementById('education');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const education = [
    {
      degree: 'Bachelor of Science in Computer & Information Science',
      school: 'Mansoura University',
      location: 'Al-Mansoura, Egypt',
      period: '2020 – 2024',
      description: 'Comprehensive computer science education covering software engineering, algorithms, data structures, database systems, and web development. Graduated with strong foundation in programming and software development principles.',
      achievements: [
        'Graduation Project LOCUS won 1st place in Environment Hackathon',
        'Strong foundation in programming fundamentals and software engineering',
        'Comprehensive study of algorithms, data structures, and database systems',
        'Practical experience in web development and software architecture'
      ],
      gpa: 'Good Grade',
      color: 'from-purple-500 to-blue-500'
    },
    {
    degree: 'Back End ASP.NET Developer – Intensive Code Camp',
    school: 'Information Technology Institute (ITI)',
    location: 'El Mansoura, Egypt · Hybrid',
    period: 'Jul 2025 – Present',
    description: 'Selected for the ITI Intensive Code Camp – ASP.NET Track, a 4-month hands-on training program focused on building scalable web applications using the Microsoft .NET technology stack.',
    achievements: [
      'Built real-world projects using ASP.NET Core MVC, Web API, and Entity Framework Core',
      'Applied advanced concepts in C#, LINQ, SQL Server, and Design Patterns',
      'Collaborated with mentors and team members in an Agile environment',
      'Enhanced skills in clean code, debugging, and backend architecture'
    ],
    gpa: 'Ongoing',
    color: 'from-teal-500 to-green-500'
  }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm10 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 text-purple-600 font-medium mb-4">
            <GraduationCap size={20} className="animate-pulse" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Education & <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Learning</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My academic foundation in computer science and continuous learning journey in software development.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100 transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ animationDelay: `${200}ms` }}
            >
              <div className="grid lg:grid-cols-3 gap-8 items-start">
                {/* Left Column - Icon and Basic Info */}
                <div className="lg:col-span-1">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${edu.color} text-white mb-6 shadow-lg`}>
                    <GraduationCap size={32} />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                      <div className="text-lg font-semibold text-purple-600 mb-1">{edu.school}</div>
                    </div>
                    
                    <div className="space-y-2 text-gray-600">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2 text-purple-500" />
                        <span className="font-medium">{edu.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2 text-blue-500" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Award size={16} className="mr-2 text-green-500" />
                        <span className="font-medium">{edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Description and Achievements */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <BookOpen className="mr-2 text-purple-600" size={20} />
                      Program Overview
                    </h4>
                    <p className="text-gray-700 leading-relaxed">{edu.description}</p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Award className="mr-2 text-yellow-600" size={20} />
                      Key Achievements & Learning
                    </h4>
                    <ul className="space-y-3">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 bg-gradient-to-r ${edu.color}`}></div>
                          <span className="text-gray-700 leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Highlight Box */}
                  <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border border-purple-100">
                    <div className="flex items-center mb-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full mr-2"></div>
                      <h5 className="font-semibold text-gray-900">Special Recognition</h5>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-semibold text-purple-600">LOCUS Graduation Project</span> achieved 
                      <span className="font-bold text-yellow-600"> 1st place</span> in the Environment Hackathon 
                      at Mansoura University, competing against <span className="font-semibold">30+ teams</span> 
                      and demonstrating exceptional technical skills and innovation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Learning Section */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Continuous Learning Journey</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <BookOpen size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">ITI Training</h4>
                <p className="text-gray-600 text-sm">Intensive backend development training with ASP.NET Core</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <Award size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">15+ Certifications</h4>
                <p className="text-gray-600 text-sm">Professional certifications in various technologies</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                  <GraduationCap size={24} />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Teaching Experience</h4>
                <p className="text-gray-600 text-sm">Sharing knowledge as a programming instructor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
