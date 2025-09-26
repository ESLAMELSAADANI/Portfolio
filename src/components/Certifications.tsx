import { Award, ExternalLink, Calendar, CheckCircle, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('certifications');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const certifications = [
    {
      title: 'Freelance Basics',
      issuer: 'Information Technology Institute (ITI)',
      date: 'Jul 2025',
      credentialId: 'bTMj0Kv7nM',
      category: 'Freelancing',
      skills: ['Freelancing', 'Client Communication', 'Proposal Writing'],
      color: 'from-purple-500 to-blue-500',
      featured: true
    },
    {
      title: 'Backend ASP.NET Core',
      issuer: 'Route Academy',
      date: 'Aug 2024',
      category: 'Backend Development',
      skills: ['ASP.NET MVC', 'ASP.NET Web API', 'C#', 'LINQ', 'Design Patterns', 'SOLID'],
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      title: 'PHP Laravel',
      issuer: 'Mansoura University',
      date: '2024',
      category: 'Backend Development',
      skills: ['Laravel', 'PHP', 'MySQL', 'Back-End Web Development'],
      color: 'from-red-500 to-orange-500',
      featured: true
    },
    {
      title: 'C# (Basic)',
      issuer: 'HackerRank',
      date: 'Sep 2025',
      credentialId: '0F608B8588A4',
      category: 'Programming',
      skills: ['C# Basics'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'SQL (Basic)',
      issuer: 'HackerRank',
      date: 'Sep 2025',
      credentialId: '4B835D26D4F31',
      category: 'Database',
      skills: ['SQL'],
      color: 'from-blue-600 to-blue-700'
    },
    {
      title: 'Intermediate SQL',
      issuer: 'DataCamp',
      date: 'Nov 2024',
      credentialId: '37,030,000',
      category: 'Database',
      skills: ['SQL'],
      color: 'from-blue-600 to-blue-700'
    },
    {
      title: 'Introduction to SQL',
      issuer: 'DataCamp',
      date: 'Nov 2024',
      credentialId: '36,992,268',
      category: 'Database',
      skills: ['SQL'],
      color: 'from-blue-600 to-blue-700'
    },
    {
      title: 'Foundation of GIT & GITHUB',
      issuer: 'DataCamp',
      date: 'Nov 2024',
      credentialId: '541,030',
      category: 'Version Control',
      skills: ['Git', 'GitHub'],
      color: 'from-gray-600 to-gray-700'
    },
    {
      title: 'Git and GitHub',
      issuer: '365 Data Science',
      date: 'Nov 2024',
      credentialId: 'CC-09443BBB6F',
      category: 'Version Control',
      skills: ['Git', 'GitHub'],
      color: 'from-gray-600 to-gray-700'
    },
    {
      title: 'Introduction to Python',
      issuer: '365 Data Science',
      date: 'Nov 2024',
      credentialId: 'CC-454F4CD621',
      category: 'Programming',
      skills: ['Python'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Intro to ChatGPT and Generative AI',
      issuer: '365 Data Science',
      date: 'Nov 2024',
      credentialId: 'CC-8522DD3A5B',
      category: 'AI/ML',
      skills: ['AI', 'ChatGPT'],
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Database Fundamentals',
      issuer: 'Information Technology Institute (ITI)',
      date: 'Aug 2024',
      credentialId: 'NVYouroJlC',
      category: 'Database',
      skills: ['Database'],
      color: 'from-blue-600 to-blue-700'
    },
    {
      title: 'Ubuntu Linux Essentials',
      issuer: 'Information Technology Institute (ITI)',
      date: 'Aug 2024',
      credentialId: 'BFALFLUFQW',
      category: 'System Administration',
      skills: ['Linux'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Web Development',
      issuer: 'Information Technology Institute (ITI)',
      date: 'Aug 2024',
      credentialId: 'u6CNwK9ry2',
      category: 'Web Development',
      skills: ['HTML', 'CSS'],
      color: 'from-cyan-500 to-teal-500'
    },
    {
      title: 'Software Development Fundamentals',
      issuer: 'Route Academy',
      date: 'May 2024',
      category: 'Programming',
      skills: ['Programming Fundamentals'],
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const categories = ['all', 'Backend Development', 'Programming', 'Database', 'Version Control', 'Web Development', 'Freelancing', 'AI/ML', 'System Administration'];

  const filteredCertifications = filter === 'all' 
    ? certifications 
    : certifications.filter(cert => cert.category === filter);

  const featuredCertifications = certifications.filter(cert => cert.featured);

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center space-x-2 text-purple-600 font-medium mb-4">
            <Award size={20} className="animate-pulse" />
            <span>Professional Growth</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Certifications & <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive collection of professional certifications demonstrating continuous learning 
            and expertise across various technologies and platforms.
          </p>
          
          <div className="flex items-center justify-center space-x-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">15+</div>
              <div className="text-sm text-gray-600">Certifications</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">9</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600">2025</div>
              <div className="text-sm text-gray-600">Latest</div>
            </div>
          </div>
        </div>

        {/* Featured Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center flex items-center justify-center">
            <Star className="mr-2 text-yellow-500" size={24} />
            Featured Certifications
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCertifications.map((cert, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ animationDelay: `${200 + index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${cert.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                    <Award size={24} />
                  </div>
                  <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs font-medium">
                    Featured
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                  {cert.title}
                </h4>
                <p className="text-purple-600 font-medium mb-2">{cert.issuer}</p>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <Calendar size={14} className="mr-1" />
                  <span className="text-sm">{cert.date}</span>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-200 text-gray-600 rounded text-xs font-medium">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>
                
                {cert.credentialId && (
                  <div className="text-xs text-gray-500 font-mono bg-gray-50 px-2 py-1 rounded">
                    ID: {cert.credentialId}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Filter Tabs */}
        <div className={`mb-8 transform transition-all duration-1000 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600 border border-gray-200'
                }`}
              >
                {category === 'all' ? 'All Certifications' : category}
              </button>
            ))}
          </div>
        </div>

        {/* All Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCertifications.map((cert, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ animationDelay: `${600 + index * 50}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${cert.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  <Award size={18} />
                </div>
                <CheckCircle className="text-green-500" size={16} />
              </div>
              
              <h4 className="text-md font-semibold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors duration-300 line-clamp-2">
                {cert.title}
              </h4>
              <p className="text-sm text-purple-600 font-medium mb-2">{cert.issuer}</p>
              
              <div className="flex items-center text-gray-600 mb-3">
                <Calendar size={12} className="mr-1" />
                <span className="text-xs">{cert.date}</span>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-3">
                {cert.skills.slice(0, 2).map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
                {cert.skills.length > 2 && (
                  <span className="px-2 py-1 bg-gray-200 text-gray-600 rounded text-xs font-medium">
                    +{cert.skills.length - 2}
                  </span>
                )}
              </div>
              
              {cert.credentialId && (
                <div className="text-xs text-gray-500 font-mono bg-gray-50 px-2 py-1 rounded truncate">
                  {cert.credentialId}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mt-16 bg-white rounded-2xl shadow-lg p-8 transform transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Certification Statistics</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Award size={24} />
              </div>
              <div className="text-2xl font-bold text-purple-600">Backend</div>
              <div className="text-sm text-gray-600">Development Focus</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <CheckCircle size={24} />
              </div>
              <div className="text-2xl font-bold text-blue-600">Database</div>
              <div className="text-sm text-gray-600">SQL Expertise</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <ExternalLink size={24} />
              </div>
              <div className="text-2xl font-bold text-cyan-600">Freelancing</div>
              <div className="text-sm text-gray-600">Business Skills</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <Star size={24} />
              </div>
              <div className="text-2xl font-bold text-teal-600">Continuous</div>
              <div className="text-sm text-gray-600">Learning</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}