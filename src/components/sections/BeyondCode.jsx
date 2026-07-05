import { motion } from "framer-motion";
import { beyondCode } from "../../data/content";
import SectionLabel, { fadeUp } from "../ui/SectionLabel";
import TurnWrapper from "../ui/TurnWrapper";

function BeyondCode() {
  return (
    <section id="beyond" className="relative z-10 px-[6vw] py-24">
      <SectionLabel num="06" title={beyondCode.stopLabel} />

      <TurnWrapper
        direction="right"
        className="grid grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-6"
      >
        {beyondCode.items.map((item, i) => (
          <motion.div
            key={item.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.4 }}
            variants={fadeUp}
            custom={i * 0.1}
            className="group relative pt-7 px-2 border-t-2 border-[color:var(--color-line)]"
          >
            <span
              className="absolute -top-[2px] left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
              style={{
                background:
                  "linear-gradient(90deg, var(--color-violet), var(--color-pink))",
              }}
            />
            <h3 className="font-[var(--font-display)] italic font-bold text-lg mb-2.5">
              {item.title}
            </h3>
            <p className="text-sm text-[color:var(--color-text-dim)] leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </TurnWrapper>
    </section>
  );
}

export default BeyondCode;
