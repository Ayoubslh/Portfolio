
import {FaItchIo} from"react-icons/fa"
import { FiGithub, FiLinkedin, } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

export default function SocialIcons() {
  return (
    <div className="flex gap-4 items-center">
      <a
        href="https://www.github.com/ayoubslh"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 hover:scale-125 hover:text-fuchsia-600 hover:drop-shadow-[0_2px_8px_rgba(236,72,153,0.5)]"
      >
        <FiGithub className="text-2xl" />
      </a>

      <a
        href="https://www.linkedin.com/in/ayoub-abdelmoumen-salhi/"
          target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 hover:scale-125 hover:text-blue-600 hover:rotate-6 hover:drop-shadow-[0_2px_8px_rgba(37,99,235,0.5)]"
      >
        <FiLinkedin className="text-2xl" />
      </a>

      <a
        href="mailto:salhiayoubabdelmoumen@gmail.com"
         target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 hover:scale-125 hover:text-red-700 hover:-rotate-6 hover:drop-shadow-[0_2px_8px_rgba(185,28,28,0.5)]"
      >
        <MdOutlineEmail className="text-2xl" />
      </a>
      <a
        href="https://polymech.itch.io"
          target="_blank"
        rel="noopener noreferrer"
        className="transition-transform duration-300 hover:scale-125 hover:text-red-500 hover:rotate-6 hover:drop-shadow-[0_2px_8px_rgba(37,99,235,0.5)]"
      >
        <FaItchIo className="text-2xl" />
      </a>
    </div>
  );
}
