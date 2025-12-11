import profilePic from "../assets/profile.jpg";
import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";

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

const Hero = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="pb-4 lg:mb-36"
    >
      <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start mt-10">
        {/* IMAGE */}
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8">
            <motion.img
              src={profilePic}
              alt="Prasanna"
              className="border border-stone-900 rounded-3xl"
              width={650}
              height={650}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="w-full lg:w-1/2 max-w-xl lg:ml-10 lg:mt-16 mt-10 text-center lg:text-left px-4">
          <motion.h2
            variants={childVariants}
            className="pb-2 text-4xl tracking-tight lg:text-8xl text-white"
          >
            Prasanna S
          </motion.h2>

          <motion.span
            variants={childVariants}
            className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent block"
          >
            Full Stack Developer
          </motion.span>

          <motion.p
            variants={childVariants}
            className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter text-gray-400 mx-auto lg:mx-0"
          >
            {HERO_CONTENT}
          </motion.p>

          <motion.a
            variants={childVariants}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-block bg-white rounded-full p-4 text-sm text-stone-800 mb-10"
          >
            Download Resume
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
