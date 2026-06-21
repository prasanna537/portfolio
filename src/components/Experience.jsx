import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div id="experience" className="pb-24 w-full">
      {/* Section Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.2 }}
        className="my-20 text-center text-4xl text-white font-bold tracking-tight"
      >
        Experience
      </motion.h2>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-0 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-purple-600/50 via-purple-500/20 to-transparent" />

        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-start mb-16 ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-slate-950 shadow-lg shadow-purple-500/50 z-10" />

            {/* Year Badge */}
            <div
              className={`w-full md:w-1/2 ${
                index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"
              } pl-8 md:pl-0`}
            >
              <motion.span
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? 40 : -40 }}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold
                  bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-2"
              >
                {experience.year}
              </motion.span>
            </div>

            {/* Content Card */}
            <div
              className={`w-full md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
              } pl-8 md:pl-0`}
            >
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6
                  hover:border-purple-500/20 hover:shadow-lg hover:shadow-purple-900/5
                  transition-all duration-500"
              >
                <h3 className="text-xl font-semibold text-white mb-1">
                  {experience.role}
                </h3>
                <p className="text-purple-400/80 text-sm font-medium mb-3">
                  {experience.company}
                </p>
                <p className="text-stone-400 text-sm leading-relaxed mb-4">
                  {experience.description}
                </p>

                {/* Tech Badges */}
                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                  {experience.technologies.map((tech, tIndex) => (
                    <span
                      key={tIndex}
                      className="px-3 py-1 text-xs font-medium rounded-full
                        bg-slate-800/80 text-stone-300 border border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
