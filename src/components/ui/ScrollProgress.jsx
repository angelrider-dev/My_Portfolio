import { useEffect, useState } from "react";
import { journeyStops } from "../../data/content";

/**
 * A vertical "journey progress" rail fixed to the right edge.
 * Shows overall scroll progress plus which stop is currently active,
 * reinforcing the road/journey metaphor without competing with content.
 * Hidden on small screens to avoid cramping mobile layouts.
 */
function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(pct);

      const sections = journeyStops
        .map((_, i) => document.getElementById(sectionIdFor(i)))
        .filter(Boolean);

      let current = 0;
      sections.forEach((el, i) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.5) current = i;
      });
      setActiveIndex(current);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3">
      <div className="relative w-[3px] h-56 bg-[color:var(--color-line)] rounded-full overflow-hidden">
        <div
          className="absolute bottom-0 left-0 w-full rounded-full transition-[height] duration-150"
          style={{
            height: `${progress * 100}%`,
            background:
              "linear-gradient(180deg, var(--color-pink), var(--color-violet), var(--color-cyan))",
            boxShadow: "0 0 10px var(--color-cyan)",
          }}
        />
      </div>
      <span className="text-[0.65rem] tracking-widest text-[color:var(--color-text-dim)] uppercase writing-mode-vertical">
        {journeyStops[activeIndex]?.num}
      </span>
    </div>
  );
}

// Maps journey stop index to actual section ids used in the DOM.
function sectionIdFor(index) {
  const ids = ["hero", "about", "skills", "projects", "poetry", "beyond", "contact"];
  return ids[index];
}

export default ScrollProgress;
