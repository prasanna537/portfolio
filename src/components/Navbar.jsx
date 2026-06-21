import { useState, useEffect } from "react";
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub, FaBars, FaTimes } from "react-icons/fa";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/prasannasubramani/", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/prasanna537", label: "GitHub" },
  { icon: FaInstagram, href: "https://www.instagram.com/mr_introvert_57/", label: "Instagram" },
  { icon: FaTwitter, href: "https://x.com/prasannas16105", label: "Twitter" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="w-full px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#home"
          className="text-lg font-bold tracking-tight text-white hover:text-purple-400 transition-colors duration-300"
        >
          Prasanna<span className="text-purple-500">.</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm text-stone-400 hover:text-white transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* Social Icons (desktop) */}
        <div className="hidden md:flex items-center gap-4 text-lg">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-stone-500 hover:text-white hover:scale-110 transition-all duration-300"
            >
              <s.icon />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-slate-950/95 backdrop-blur-xl border-b border-white/5`}
      >
        <div className="flex flex-col items-center gap-4 py-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-stone-300 hover:text-white transition-colors duration-300 text-lg"
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-5 mt-4 text-xl">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-stone-500 hover:text-white transition-all duration-300"
              >
                <s.icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
