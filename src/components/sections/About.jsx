import { motion } from "framer-motion";
import { about } from "../../data/content";
import SectionLabel, { fadeUp } from "../ui/SectionLabel";
import TurnWrapper from "../ui/TurnWrapper";
import portrait from "../../assets/images/zohaib-portrait.webp";

function About() {
  return (
    <section id="about" className="relative z-10 px-[6vw] py-28">
      <SectionLabel num="02" title={about.stopLabel} />

      <TurnWrapper direction="left" className="grid md:grid-cols-[auto_1.1fr_0.9fr] gap-12 md:gap-16 items-start">
        {/* Portrait — circular frame with a gradient ring matching the brand palette */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="mx-auto md:mx-0"
        >
          <div
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full p-[3px] group"
            style={{
              background:
                "linear-gradient(135deg, var(--color-violet), var(--color-cyan), var(--color-pink))",
            }}
          >
            <div className="w-full h-full rounded-full overflow-hidden bg-[color:var(--color-bg)] p-1">
              <img
                src={portrait}
                alt="Zohaib Safdar — ANGELRIDER"
                className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div
              className="absolute -inset-2 rounded-full -z-10 opacity-40 blur-xl"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-violet), var(--color-cyan), var(--color-pink))",
              }}
            />
          </div>
        </motion.div>

        <div>
          {about.paragraphs.map((p, i) => (
            <motion.p
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={fadeUp}
              custom={0.1 + i * 0.12}
              className={
                i === 0
                  ? "text-[color:var(--color-text)] leading-[1.7] text-[1.2rem] mb-6 font-medium"
                  : "text-[color:var(--color-text-dim)] leading-[1.85] text-[1.02rem] mb-5"
              }
            >
              {p}
            </motion.p>
          ))}
        </div>

        <div>
          {about.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.4 }}
              variants={fadeUp}
              custom={0.2 + i * 0.15}
              whileHover={{ x: 6 }}
              className="relative overflow-hidden bg-[color:var(--color-bg-soft)] border border-[color:var(--color-line)] rounded-2xl p-6 mb-4"
            >
              <span
                className="absolute top-0 left-0 w-[3px] h-full"
                style={{
                  background:
                    "linear-gradient(180deg, var(--color-cyan), var(--color-pink))",
                }}
              />
              <p className="text-xs tracking-widest uppercase text-[color:var(--color-text-dim)] mb-1.5">
                {stat.label}
              </p>
              <p className="font-[var(--font-display)] italic font-bold text-xl">
                {stat.value}
              </p>
            </motion.div>
          ))}
        </div>
      </TurnWrapper>
    </section>
  );
}

export default About;
