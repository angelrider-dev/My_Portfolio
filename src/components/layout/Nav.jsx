import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../../data/content";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-[6vw] py-5 backdrop-blur-md bg-[color:var(--color-bg)]/60 border-b border-[color:var(--color-line)]">
      <a href="#hero" className="font-bold tracking-wider text-lg">
        ANGEL<span className="text-[color:var(--color-cyan)]">RIDER</span>
      </a>

      {/* Desktop nav */}
      <ul className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm uppercase tracking-widest text-[color:var(--color-text-dim)] hover:text-[color:var(--color-cyan)] transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger toggle */}
      <button
        className="md:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center"
        onClick={() => setMenuOpen((v) => !v)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
      >
        <motion.span
          animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="block w-6 h-[2px] bg-[color:var(--color-text)] rounded-full"
        />
        <motion.span
          animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block w-6 h-[2px] bg-[color:var(--color-text)] rounded-full"
        />
        <motion.span
          animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="block w-6 h-[2px] bg-[color:var(--color-text)] rounded-full"
        />
      </button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[color:var(--color-bg)]/95 backdrop-blur-md border-b border-[color:var(--color-line)] flex flex-col items-center py-6 gap-6"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  className="text-sm uppercase tracking-widest text-[color:var(--color-text-dim)] hover:text-[color:var(--color-cyan)] transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Nav;
