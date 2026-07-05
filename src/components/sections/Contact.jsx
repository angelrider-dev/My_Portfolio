import { motion } from "framer-motion";
import { contact } from "../../data/content";
import SectionLabel, { fadeUp } from "../ui/SectionLabel";
import TurnWrapper from "../ui/TurnWrapper";

function Contact() {
  return (
    <section id="contact" className="relative z-10 px-[6vw] py-36">
      <SectionLabel num="07" title={contact.stopLabel} />

      <TurnWrapper direction="left" className="text-center pt-10">
        <h2 className="font-[var(--font-display)] italic font-bold text-4xl md:text-6xl leading-tight mb-6">
          {contact.title}
        </h2>
        <p className="text-[color:var(--color-text-dim)] max-w-md mx-auto mb-10 leading-relaxed">
          {contact.sub}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          {contact.links.map((link) => (
            <motion.a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={
                link.primary
                  ? "px-8 py-3.5 rounded-full text-sm font-semibold bg-[color:var(--color-text)] text-[color:var(--color-bg)] hover:bg-[color:var(--color-cyan)] transition-colors"
                  : "px-8 py-3.5 rounded-full text-sm border border-[color:var(--color-line)] hover:border-[color:var(--color-pink)] hover:text-[color:var(--color-pink)] transition-colors"
              }
            >
              {link.label} ↗
            </motion.a>
          ))}
        </div>
      </TurnWrapper>

      <footer className="text-center text-xs text-[color:var(--color-text-dim)] mt-24 pt-8 border-t border-[color:var(--color-line)]">
        Built by <span className="text-[color:var(--color-pink)]">ANGELRIDER</span> · Zohaib Safdar © 2026
      </footer>
    </section>
  );
}

export default Contact;
