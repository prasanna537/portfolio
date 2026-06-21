import { EDUCATION } from "../constants";
import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const Education = () => {
  return (
    <div id="education" className="pb-24 w-full">
      {/* Section Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.2 }}
        className="my-20 text-center text-4xl text-white font-bold tracking-tight"
      >
        Education
      </motion.h2>

      {/* Timeline Wrapper */}
      <div className="relative pl-6 md:pl-16">
        {/* Vertical timeline line */}
        <div className="absolute left-6 md:left-16 top-2 bottom-2 w-px bg-gradient-to-b from-purple-500 via-pink-500 to-transparent" />

        {EDUCATION.map((edu, index) => {
          // Choose icon based on level
          const Icon = index === 0 ? FaGraduationCap : FaSchool;
          const iconColor = index === 0 ? "text-purple-400" : "text-emerald-400";
          const iconBg = index === 0 ? "border-purple-500/30" : "border-emerald-500/30";

          return (
            <div key={index} className="relative mb-12 pl-8 md:pl-12 last:mb-0">
              {/* Timeline Node */}
              <div
                className={`absolute left-0 -translate-x-1/2 w-10 h-10 rounded-xl bg-slate-900 border ${iconBg}
                  flex items-center justify-center shadow-lg z-10`}
              >
                <Icon className={`text-xl ${iconColor}`} />
              </div>

              {/* Content Card */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-slate-900/30 border border-slate-800/80 rounded-2xl p-6
                  hover:border-purple-500/20 hover:shadow-lg hover:shadow-purple-900/5
                  transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {edu.degree}
                  </h3>
                  <span className="text-sm font-semibold text-purple-400/90 whitespace-nowrap">
                    {edu.duration}
                  </span>
                </div>

                <p className="text-stone-300 font-medium mb-3">
                  {edu.institution}
                </p>

                {/* Grade Badge */}
                <span className="inline-block px-3.5 py-1 text-xs font-semibold rounded-full
                  bg-purple-500/10 text-purple-300 border border-purple-500/20 mb-4"
                >
                  {edu.grade}
                </span>

                <p className="text-stone-400 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
