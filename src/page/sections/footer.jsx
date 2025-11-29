import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail, MdKeyboardArrowUp } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Ayoub Salhi. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="mailto:salhiayoubabdelmoumen@gmail.com"
              className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:bg-white/10 transition-all"
              aria-label="Email"
            >
              <MdOutlineEmail className="text-xl" />
            </a>
            <a
              href="https://github.com/Ayoubslh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:bg-white/10 transition-all"
              aria-label="GitHub"
            >
              <FiGithub className="text-xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/ayoub-abdelmoumen-salhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:bg-white/10 transition-all"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
