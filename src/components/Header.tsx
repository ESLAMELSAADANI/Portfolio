import { Menu, X, Github, Linkedin, Mail, Code, User, Briefcase, Award, GraduationCap, FolderOpen } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', icon: User },
    { href: '#about', label: 'About', icon: Code },
    { href: '#experience', label: 'Experience', icon: Briefcase },
    { href: '#projects', label: 'Projects', icon: FolderOpen },
    { href: '#education', label: 'Education', icon: GraduationCap },
    { href: '#certifications', label: 'Certifications', icon: Award },
    { href: '#contact', label: 'Contact', icon: Mail },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-purple-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent animate-pulse">
            <a href="#home">EE</a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative px-4 py-2 rounded-full transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-blue-500/10"
              >
                <div className="flex items-center space-x-2">
                  <item.icon size={16} className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300" />
                  <span className="text-gray-700 group-hover:text-purple-600 font-medium transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="https://github.com/ESLAMELSAADANI"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 hover:from-purple-500 hover:to-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/eslamelsaadany7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 hover:from-blue-500 hover:to-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:eslamelsaadany7@outlook.com"
              className="p-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 transform hover:scale-110 hover:rotate-12"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white transition-all duration-300 transform hover:scale-110"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-purple-100 bg-white/95 backdrop-blur-lg rounded-b-2xl shadow-xl">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-blue-500/10 hover:text-purple-600 transition-all duration-300 transform hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon size={18} />
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
            </nav>
            <div className="flex items-center justify-center space-x-4 mt-6 pt-4 border-t border-purple-100">
              <a
                href="https://github.com/ESLAMELSAADANI"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 hover:from-purple-500 hover:to-blue-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/eslamelsaadany7"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 hover:from-blue-500 hover:to-cyan-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:eslamelsaadany7@outlook.com"
                className="p-3 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 text-gray-600 hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
