import { useState, useEffect } from "react";
import profilePic from "../assets/profile.jpg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import { FiDownload } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

const ROLES = [
  "Full Stack Developer",
  "React Developer",
  "Backend Engineer",
  "UI/UX Enthusiast",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout;

    if (!isDeleting && text === currentRole) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === "") {
      // Move to next role
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, text.length - 1));
      }, 40);
    } else {
      timeout = setTimeout(() => {
        setText(currentRole.substring(0, text.length + 1));
      }, 80);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <motion.div
      id="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pb-4 lg:mb-36 pt-24"
    >
      <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start mt-10">
        {/* IMAGE */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="relative"
            >
              {/* Glow behind image */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-2xl" />
              <img
                src={profilePic}
                alt="Prasanna S"
                className="relative border border-stone-800 rounded-3xl shadow-2xl shadow-purple-900/10"
                width={650}
                height={650}
              />
            </motion.div>
          </div>
        </div>

        {/* TEXT */}
        <div className="w-full lg:w-1/2 max-w-xl lg:ml-10 lg:mt-16 mt-10 text-center lg:text-left px-4">
          <motion.h1
            variants={childVariants}
            className="pb-2 text-4xl tracking-tight lg:text-8xl text-white font-bold"
          >
            Prasanna S
          </motion.h1>

          <motion.span
            variants={childVariants}
            className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-3xl tracking-tight text-transparent block h-10"
          >
            {text}
            <span className="typewriter-cursor text-purple-400">|</span>
          </motion.span>

          <motion.p
            variants={childVariants}
            className="my-2 max-w-lg py-6 text-lg leading-relaxed tracking-tight text-gray-400 mx-auto lg:mx-0"
          >
            {HERO_CONTENT}
          </motion.p>

          <motion.a
            variants={childVariants}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white
              bg-gradient-to-r from-purple-600 to-pink-600
              hover:from-purple-500 hover:to-pink-500
              hover:shadow-lg hover:shadow-purple-500/25
              transition-all duration-300 hover:scale-105 mb-10"
          >
            <FiDownload className="text-lg group-hover:animate-bounce" />
            Download Resume
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
