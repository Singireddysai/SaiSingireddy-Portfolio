import React from "react";
import { Linkedin, Twitter, Github, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[rgba(155,155,155,0.1)] backdrop-blur-sm text-white py-12 px-6">
      <div className="max-w-md mx-auto">
        {/* Navigation Links */}
        <nav aria-label="Footer" className="mb-8">
          <div className="flex flex-wrap justify-center gap-6 mb-4">
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              About
            </a>
            <a
              href="#work"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Work
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Resume
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Skills
            </a>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="#hero"
              className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
            >
              Back To Top
            </a>
          </div>
        </nav>

        {/* Social Media Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://www.linkedin.com/in/sai-singireddy-8352a6291"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Facebook"
          >
            <Linkedin size={24} />
          </a>

          <a
            href="https://x.com/Ak4zA__"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Twitter"
          >
            <Twitter size={24} />
          </a>
          <a
            href="https://github.com/Singireddysai"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.youtube.com/@Ak4zA_ovo"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="YouTube"
          >
            <Youtube size={24} />
          </a>
          <a
            href="https://discord.gg/X7UzqUEA"
            className="text-gray-400 hover:text-white transition-colors duration-200"
            aria-label="Discord"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="currentColor"
            >
              <title>Discord</title>
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-400 text-sm">
          © 2025 Sai Singireddy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
