import { motion } from "framer-motion";
import { poetry } from "../../data/content";
import SectionLabel, { fadeUp } from "../ui/SectionLabel";

function Poetry() {
  return (
    <section id="poetry" className="relative z-10 px-[6vw] py-24">
      <SectionLabel num="05" title={poetry.stopLabel} />

      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        variants={fadeUp}
        className="text-sm text-[color:var(--color-text-dim)] italic mb-14 max-w-md mx-auto text-center"
      >
        {poetry.intro}
      </motion.p>

      {/* Hero line — the standout couplet */}
      <motion.p
        dir="rtl"
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1, ease: [0.65, 0, 0.35, 1] }}
        className="font-[var(--font-urdu)] text-center leading-[1.8] mb-16"
        style={{
          fontSize: "clamp(1.4rem, 3vw, 2.3rem)",
          background:
            "linear-gradient(90deg, var(--color-cyan), var(--color-violet), var(--color-pink))",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {poetry.heroLine}
      </motion.p>

      {/* One featured sher — compact, no full ghazal */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
        variants={fadeUp}
        dir="rtl"
        className="max-w-lg mx-auto text-center bg-[color:var(--color-bg-soft)] border border-[color:var(--color-line)] rounded-2xl px-8 py-10"
      >
        <p className="font-[var(--font-urdu)] text-[color:var(--color-text)] text-lg leading-[2]">
          {poetry.featuredSher[0]}
        </p>
        <p className="font-[var(--font-urdu)] text-[color:var(--color-text-dim)] text-base leading-[2] mt-1">
          {poetry.featuredSher[1]}
        </p>
      </motion.div>
    </section>
  );
}

export default Poetry;
