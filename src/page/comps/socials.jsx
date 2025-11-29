import { FaItchIo } from "react-icons/fa"
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

export default function SocialIcons() {
  const socials = [
    { icon: FiGithub, href: "https://www.github.com/ayoubslh", label: "GitHub" },
    { icon: FiLinkedin, href: "https://www.linkedin.com/in/ayoub-abdelmoumen-salhi/", label: "LinkedIn" },
    { icon: MdOutlineEmail, href: "mailto:salhiayoubabdelmoumen@gmail.com", label: "Email" },
    { icon: FaItchIo, href: "https://polymech.itch.io", label: "Itch.io" },
  ];

  return (
    <div className="flex gap-3 items-center">
      {socials.map(({ icon: IconComponent, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg transition-all hover-lift"
          style={{ 
            border: '1px solid var(--color-border)',
            color: 'var(--color-text-tertiary)'
          }}
          aria-label={label}
        >
          <IconComponent className="text-lg" />
        </a>
      ))}
    </div>
  );
}