import { ArrowDown, Download, MapPin, Code, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const titles = [
    "Junior Backend Developer",
    "ASP.NET Core Specialist",
    "ITI Trainee",
    "Problem Solver"
  ];

  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-purple-600 font-medium">
                <Sparkles size={20} className="animate-spin" />
                <span>Welcome to my portfolio</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Hi, I'm </span>
                <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent animate-gradient">
                  Eslam Elsaadany
                </span>
              </h1>
              
              <div className="h-16 flex items-center">
                <h2 className="text-2xl lg:text-3xl font-light text-gray-700">
                  <span className="inline-block animate-typewriter">
                    {titles[currentTitle]}
                  </span>
                  <span className="animate-blink"></span>
                </h2>
              </div>

              <div className="flex items-center space-x-2 text-gray-600">
                <MapPin size={18} className="text-purple-500" />
                <span>Al-Mansoura, Egypt</span>
              </div>
              
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                  A dedicated <span className="text-blue-600 font-semibold">Backend Developer</span> currently focusing on 
                  <span className="text-cyan-600 font-semibold"> ASP.NET Core</span> for building robust and scalable applications. 
                  Strong foundation in <span className="text-purple-600 font-semibold">C++</span> with hands-on experience in 
                  <span className="text-cyan-600 font-semibold"> PHP and Laravel</span>. 
                  Skilled in designing clean APIs, optimizing performance, and applying modern development best practices. 
                  My graduation project, <span className="text-purple-600 font-semibold">LOCUS</span>, earned 
                  <span className="text-yellow-600 font-bold"> 1st place</span> at Mansoura University competitions, 
                  reflecting both technical expertise and teamwork.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <span>Get In Touch</span>
                <ArrowDown size={20} className="ml-2 group-hover:animate-bounce" />
              </a>
              <a
                href="/Eslam Ashraf - Backend Developer (ASP.NET) - Egypt.pdf" target="_blank"
                className="group inline-flex items-center justify-center px-8 py-4 border-2 border-purple-300 text-purple-700 font-medium rounded-full hover:bg-purple-50 hover:border-purple-400 transition-all duration-300 transform hover:scale-105"
              >
                <Download size={20} className="mr-2 group-hover:animate-bounce" />
                Download CV
              </a>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">15+</div>
                <div className="text-sm text-gray-600">Certifications</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">6+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </div>
              <div className="w-px h-12 bg-gray-300"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-cyan-600">1st</div>
                <div className="text-sm text-gray-600">Place Winner</div>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl ring-8 ring-white transform transition-all duration-500 group-hover:scale-105">
                <img
                  src="/Me_LinkedInCover.png"
                  alt="Eslam Elsaadany"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg animate-float">
                <Code size={24} />
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white shadow-lg animate-float animation-delay-1000">
                <span className="text-sm font-bold">1st</span>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-purple-100 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-100 rounded-full opacity-40 animate-pulse animation-delay-2000"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-purple-500 hover:text-purple-700 transition-colors duration-200">
            <ArrowDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
