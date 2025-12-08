import { FaInstagram, FaLinkedin, FaTwitter,FaGithub} from "react-icons/fa";
import logo from "../assets/projects/Frame 3.png";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-3">

      <div className="flex shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img
            src={logo}
            className="mx-2"
            width={200}
            height={33}
            alt="Logo"
          />
        </a>
      </div>

      <div className="m-8 flex items-center justify-center gap-6 text-2xl">
        <a
          href="https://www.linkedin.com/in/prasannasubramani/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="text-white" />
        </a>
        <a
          href="https://github.com/prasanna537"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub className="text-white" />
        </a>
        <a
          href="https://www.instagram.com/mr_introvert_57/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram className="text-white" />
        </a>
        <a
          href="https://x.com/prasannas16105"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitter className="text-white" />
        </a>
      </div>

    </nav>
  );
};

export default Navbar;
