import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";


const SOCIAL_LINKS = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/prasannasubramani/", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/prasanna537", label: "GitHub" },
  { icon: FaInstagram, href: "https://www.instagram.com/mr_introvert_57/", label: "Instagram" },
  { icon: FaTwitter, href: "https://x.com/prasannas16105", label: "Twitter" },
];

const Footer = () => {
  return (
    <footer className="border-t border-slate-800/50 py-10 px-4">
      <div className="w-full flex flex-col items-center gap-6">
        {/* Social Icons */}
        <div className="flex items-center gap-5 text-lg">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-stone-600 hover:text-purple-400 hover:scale-110 transition-all duration-300"
            >
              <s.icon />
            </a>
          ))}
        </div>



        {/* Copyright */}
        <p className="text-stone-700 text-xs">
          © {new Date().getFullYear()} Prasanna S. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
