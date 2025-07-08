import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail, MdKeyboardArrowUp } from "react-icons/md";

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-gray-950 text-gray-300 px-4 py-8 mt-auto border-t border-gray-800 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Copyright */}
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Ayoub Salhi. All rights reserved.</p>

        {/* Right: Social Icons */}
        <div className="flex gap-6 text-xl">
          <a
            href="mailto:youremail@example.com"
            className="hover:text-red-500 hover:scale-110 transition"
          >
            <MdOutlineEmail />
          </a>
          <a
            href="https://github.com/Ayoubslh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-fuchsia-500 hover:scale-110 transition"
          >
            <FiGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 hover:scale-110 transition"
          >
            <FiLinkedin />
          </a>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute left-10 bottom-6 p-2 bg-fuchsia-700 text-white rounded-full shadow-md hover:shadow-[0_0_12px_#d946ef] transition hover:scale-110"
        title="Back to Top"
      >
        <MdKeyboardArrowUp className="text-2xl " />
      </button>
    </footer>
  );
}
