import { useEffect, useRef } from "react";

/**
 * A fixed full-screen radial gradient overlay whose color shifts as the
 * user scrolls — violet near the top, drifting toward cyan mid-page,
 * then pink near the bottom. Mimics a "time of day" change along the
 * journey without literally animating a sun/sky.
 *
 * Uses direct style mutation via ref instead of React state so scroll
 * (which fires very frequently) never causes a re-render.
 */
function AmbientTint() {
  const tintRef = useRef(null);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;

      if (!tintRef.current) return;

      // Interpolate through three brand hues across the scroll range.
      const stops = [
        { at: 0, color: "139,92,246" }, // violet
        { at: 0.5, color: "0,229,255" }, // cyan
        { at: 1, color: "255,46,154" }, // pink
      ];

      let color = stops[0].color;
      for (let i = 0; i < stops.length - 1; i++) {
        if (progress >= stops[i].at && progress <= stops[i + 1].at) {
          color = stops[i].color; // simple step; smooth enough given opacity is low
          break;
        }
      }
      if (progress > stops[stops.length - 1].at) color = stops[stops.length - 1].color;

      tintRef.current.style.background = `radial-gradient(ellipse 80% 50% at 50% ${
        progress * 100
      }%, rgba(${color}, 0.08), transparent 70%)`;
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={tintRef}
      className="fixed inset-0 z-[1] pointer-events-none transition-none"
    />
  );
}

export default AmbientTint;
