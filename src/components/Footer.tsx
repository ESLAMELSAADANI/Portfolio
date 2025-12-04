import { Heart, Code, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Eslam Elsaadany
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Junior Backend Developer specializing in ASP.NET Core and modern web technologies. 
              Building scalable solutions and teaching the next generation of developers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {['Home', 'About', 'Experience', 'Projects', 'Education', 'Certifications', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-purple-400 transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:eslamelsaadany@std.mans.edu.eg"
                className="flex items-center text-gray-400 hover:text-purple-400 transition-colors duration-200"
              >
                <Mail size={16} className="mr-2" />
                eslamelsaadany7@outlook.com
              </a>
              <p className="flex items-center text-gray-400">
                <span className="mr-2">📍</span>
                Al-Mansoura, Egypt
              </p>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a
              href="https://github.com/ESLAMELSAADANI"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/eslamelsaadany7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:eslamelsaadany@std.mans.edu.eg"
              className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
            >
              <Mail size={20} />
            </a>
          </div>

          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <Heart size={16} className="mx-2 text-red-500 animate-pulse" />
            <span>by Eslam Elsaadany</span>
            <Code size={16} className="ml-2 text-purple-400" />
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Eslam Elsaadany. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
