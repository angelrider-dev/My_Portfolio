import { motion } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.65, 0, 0.35, 1] },
  }),
};

function SectionLabel({ num, title }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={fadeUp}
      className="flex items-center gap-4 mb-14"
    >
      <span className="font-[var(--font-display)] italic font-bold text-[color:var(--color-pink)] tracking-widest">
        {num}
      </span>
      <h2 className="font-[var(--font-display)] italic font-bold text-2xl md:text-3xl tracking-wide">
        {title}
      </h2>
      <span className="flex-1 h-px bg-[color:var(--color-line)]" />
    </motion.div>
  );
}

export default SectionLabel;
