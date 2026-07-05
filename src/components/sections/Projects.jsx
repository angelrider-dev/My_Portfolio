import { motion } from "framer-motion";
import { projects } from "../../data/content";
import SectionLabel, { fadeUp } from "../ui/SectionLabel";
import TiltCard from "../ui/TiltCard";
import TurnWrapper from "../ui/TurnWrapper";

function Projects() {
  return (
    <section id="projects" className="relative z-10 px-[6vw] py-28">
      <SectionLabel num="04" title={projects.stopLabel} />

      <TurnWrapper direction="left" className="flex flex-col gap-5">
        {projects.items.map((project, i) => (
          <motion.div
            key={project.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
            custom={i * 0.1}
          >
            <TiltCard
              maxTilt={4}
              className="grid md:grid-cols-[80px_1fr] gap-6 items-start bg-[color:var(--color-bg-soft)] border border-[color:var(--color-line)] rounded-2xl p-8 hover:border-[color:var(--color-violet)] hover:shadow-[0_0_35px_rgba(139,92,246,0.15)] transition-all duration-300"
            >
              <span className="font-[var(--font-display)] italic font-bold text-[color:var(--color-text-dim)] text-lg">
                {project.num}
              </span>
              <div>
                <h3 className="text-2xl font-semibold mb-2">{project.name}</h3>
                <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed max-w-xl mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap items-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs uppercase tracking-wider text-[color:var(--color-cyan)] border border-[color:var(--color-cyan)]/30 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="ml-auto text-xs uppercase tracking-wider text-[color:var(--color-text-dim)] hover:text-[color:var(--color-pink)] transition-colors flex items-center gap-1.5 border border-[color:var(--color-line)] hover:border-[color:var(--color-pink)] rounded-full px-3 py-1"
                    >
                      View on GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </TurnWrapper>
    </section>
  );
}

export default Projects;
