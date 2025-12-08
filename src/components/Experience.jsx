import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl text-white">Experience</h2>

      <div>
        {EXPERIENCES.map((experience, index) => (
          <div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            {/* YEAR (LEFT SIDE – static, no animation) */}
            <div className="w-full max-w-xl lg:w-1/4">
              <h3 className="mb-2 text-sm text-white/70">
                {experience.year}
              </h3>
            </div>

            {/* DETAILS (RIGHT SIDE – animated like screenshot) */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h3 className="mb-2 font-semibold text-2xl text-white">
                {experience.role}{" "}
                <span className="text-sm text-white/60">
                  — {experience.company}
                </span>
              </h3>

              <p className="mb-4 text-white/60">{experience.description}</p>

              {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-white"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
