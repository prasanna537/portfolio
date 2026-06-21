import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  return (
    <div id="projects" className="pb-24 w-full">
      {/* Section Title */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1.2 }}
        className="my-20 text-center text-4xl text-white font-bold tracking-tight"
      >
        Projects
      </motion.h2>

      {/* Card Grid */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 60 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            whileHover={{ y: -6 }}
            className="group bg-slate-900/30 border border-slate-800/80 rounded-2xl overflow-hidden
              hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-900/10
              transition-all duration-500"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent
                opacity-0 group-hover:opacity-100 transition-opacity duration-500
                flex items-end justify-center pb-4"
              >
                <span className="text-sm text-white/80 font-medium px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm">
                  View Details →
                </span>
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2">
                {project.technologies?.map((tech, tIndex) => (
                  <span
                    key={tIndex}
                    className="px-3 py-1 text-xs font-medium rounded-full
                      bg-purple-500/10 text-purple-300 border border-purple-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-4 mt-6 pt-4 border-t border-slate-800/60">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-stone-400 hover:text-white transition-colors duration-300"
                  >
                    <FiGithub className="text-base" />
                    GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors duration-300 ml-auto"
                  >
                    <FiExternalLink className="text-base" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
