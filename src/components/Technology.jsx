import { FaPython, FaJava, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaWordpress, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiFastapi, SiMysql, SiPostman, SiNextdotjs, SiJavascript, SiTypescript } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbSql } from "react-icons/tb";
import { motion } from "framer-motion";

// Floating animation variant helper
const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const CATEGORIES = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", Icon: FaPython, color: "text-blue-500", glow: "hover:shadow-blue-500/10 hover:border-blue-500/30", duration: 2.5 },
      { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-400", glow: "hover:shadow-yellow-400/10 hover:border-yellow-400/30", duration: 3.0 },
      { name: "TypeScript", Icon: SiTypescript, color: "text-blue-400", glow: "hover:shadow-blue-400/10 hover:border-blue-400/30", duration: 2.8 },
      { name: "SQL", Icon: TbSql, color: "text-cyan-600", glow: "hover:shadow-cyan-600/10 hover:border-cyan-600/30", duration: 2.2 },
      { name: "Java", Icon: FaJava, color: "text-red-500", glow: "hover:shadow-red-500/10 hover:border-red-500/30", duration: 3.5 },
    ],
  },
  {
    title: "Frontend & Frameworks",
    skills: [
      { name: "React.js", Icon: RiReactjsLine, color: "text-cyan-400", glow: "hover:shadow-cyan-400/10 hover:border-cyan-400/30", duration: 4.0 },
      { name: "Next.js", Icon: SiNextdotjs, color: "text-white", glow: "hover:shadow-white/10 hover:border-white/30", duration: 2.8 },
      { name: "HTML", Icon: FaHtml5, color: "text-orange-500", glow: "hover:shadow-orange-500/10 hover:border-orange-500/30", duration: 3.2 },
      { name: "CSS", Icon: FaCss3Alt, color: "text-blue-400", glow: "hover:shadow-blue-400/10 hover:border-blue-400/30", duration: 2.4 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", Icon: FaNodeJs, color: "text-green-500", glow: "hover:shadow-green-500/10 hover:border-green-500/30", duration: 3.6 },
      { name: "Express.js", Icon: SiExpress, color: "text-neutral-400", glow: "hover:shadow-neutral-400/10 hover:border-neutral-400/30", duration: 2.6 },
      { name: "FastAPI", Icon: SiFastapi, color: "text-emerald-500", glow: "hover:shadow-emerald-500/10 hover:border-emerald-500/30", duration: 3.1 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", Icon: SiMysql, color: "text-blue-300", glow: "hover:shadow-blue-300/10 hover:border-blue-300/30", duration: 2.7 },
      { name: "MongoDB", Icon: SiMongodb, color: "text-green-600", glow: "hover:shadow-green-600/10 hover:border-green-600/30", duration: 3.3 },
      { name: "PostgreSQL", Icon: BiLogoPostgresql, color: "text-sky-500", glow: "hover:shadow-sky-500/10 hover:border-sky-500/30", duration: 2.1 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git", Icon: FaGitAlt, color: "text-red-400", glow: "hover:shadow-red-400/10 hover:border-red-400/30", duration: 3.8 },
      { name: "GitHub", Icon: FaGithub, color: "text-stone-300", glow: "hover:shadow-stone-300/10 hover:border-stone-300/30", duration: 2.9 },
      { name: "WordPress", Icon: FaWordpress, color: "text-sky-600", glow: "hover:shadow-sky-600/10 hover:border-sky-600/30", duration: 3.4 },
      { name: "Postman", Icon: SiPostman, color: "text-orange-400", glow: "hover:shadow-orange-400/10 hover:border-orange-400/30", duration: 2.5 },
    ],
  },
];

const Technologies = () => {
  return (
    <div id="skills" className="pb-24 w-full">
      {/* Title animation */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.2 }}
        className="my-20 text-center text-4xl text-white font-bold tracking-tight"
      >
        Technologies & Skills
      </motion.h2>

      {/* Categories listing */}
      <div className="space-y-16">
        {CATEGORIES.map((cat, idx) => (
          <div key={idx} className="flex flex-col">
            <motion.h3
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
              className="text-stone-400 font-semibold tracking-wider text-sm mb-6 uppercase border-l-2 border-stone-600 pl-3"
            >
              {cat.title}
            </motion.h3>

            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
              {cat.skills.map((skill, sIdx) => {
                const Icon = skill.Icon;
                return (
                  <motion.div
                    key={sIdx}
                    initial="initial"
                    animate="animate"
                    variants={iconVariants(skill.duration)}
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-4 p-4 bg-slate-900/30 border border-slate-800/80 rounded-2xl transition-all duration-300 ${skill.glow} group hover:bg-slate-900/60 shadow-lg cursor-default`}
                  >
                    <Icon className={`text-4xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                    <div>
                      <h4 className="text-sm font-semibold text-stone-200 group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </h4>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
