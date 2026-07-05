import { motion } from "framer-motion";
import { hero } from "../../data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.65, 0, 0.35, 1] },
  }),
};

function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex flex-col justify-center px-[6vw] pt-20"
    >
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={0.1}
        className="text-[color:var(--color-pink)] text-sm tracking-[0.35em] uppercase mb-6"
      >
        {hero.eyebrow}
      </motion.p>

      <div className="relative inline-block">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.25}
          className="font-[var(--font-display)] italic uppercase font-bold leading-[0.9]"
          style={{ fontSize: "clamp(3.5rem, 12vw, 9rem)" }}
        >
          {hero.title}
        </motion.h1>

        {/* Signature trail element — the glowing sweep behind the title */}
        <motion.span
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.9, ease: [0.65, 0, 0.35, 1] }}
          className="absolute left-[-6vw] right-[-6vw] top-1/2 h-[3px] origin-left -z-10"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--color-cyan), var(--color-violet), var(--color-pink), transparent)",
            boxShadow: "0 0 20px var(--color-cyan), 0 0 40px var(--color-pink)",
          }}
        />
      </div>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1.3}
        className="mt-7 max-w-xl text-[1.05rem] leading-relaxed text-[color:var(--color-text-dim)]"
      >
        {hero.tagline}
      </motion.p>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1.45}
        className="mt-2 max-w-lg text-sm italic leading-relaxed text-[color:var(--color-text-dim)] opacity-80"
      >
        {hero.subline}
      </motion.p>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1.6}
        className="mt-6 max-w-lg text-base text-[color:var(--color-text-dim)]"
      >
        {hero.intro}
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1.85}
        className="absolute bottom-10 left-[6vw] flex items-center gap-3 text-xs tracking-[0.2em] text-[color:var(--color-text-dim)]"
      >
        <span className="w-8 h-px bg-[color:var(--color-text-dim)]" />
        SCROLL
      </motion.div>
    </section>
  );
}

export default Hero;
