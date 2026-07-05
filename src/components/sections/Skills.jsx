import { motion } from "framer-motion";
import { skills } from "../../data/content";
import SectionLabel, { fadeUp } from "../ui/SectionLabel";
import TiltCard from "../ui/TiltCard";
import TurnWrapper from "../ui/TurnWrapper";

function Skills() {
  return (
    <section id="skills" className="relative z-10 px-[6vw] py-36">
      <motion.p
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.6 }}
        transition={{ duration: 0.7 }}
        className="text-center text-xs tracking-[0.3em] uppercase text-[color:var(--color-cyan)] mb-4 flex items-center justify-center gap-3"
      >
        <span className="w-6 h-px bg-[color:var(--color-cyan)]" />
        The journey begins here
        <span className="w-6 h-px bg-[color:var(--color-cyan)]" />
      </motion.p>
      <SectionLabel num="03" title={skills.stopLabel} />

      <TurnWrapper
        direction="right"
        className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5"
      >
        {skills.items.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeUp}
            custom={i * 0.08}
          >
            <TiltCard className="bg-[color:var(--color-bg-soft)] border border-[color:var(--color-line)] rounded-2xl p-7 h-full hover:border-[color:var(--color-cyan)] hover:shadow-[0_0_30px_rgba(0,229,255,0.15)] transition-all duration-300">
              <span
                className="block w-10 h-1 rounded-full mb-5"
                style={{
                  background:
                    "linear-gradient(90deg, var(--color-violet), var(--color-cyan))",
                }}
              />
              <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
              <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed">
                {skill.desc}
              </p>
            </TiltCard>
          </motion.div>
        ))}
      </TurnWrapper>
    </section>
  );
}

export default Skills;
