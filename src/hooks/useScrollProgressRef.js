import { useEffect, useRef } from "react";

/**
 * Tracks page scroll progress as a ref (0 to 1), not state — this avoids
 * triggering a React re-render on every scroll pixel, which would be a
 * real performance problem for a Three.js scene reading this every frame.
 *
 * Components that need to *render* based on scroll (like a progress bar)
 * should use useScrollProgressState instead.
 */
export function useScrollProgressRef() {
  const progressRef = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      progressRef.current = docHeight > 0 ? scrollTop / docHeight : 0;
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return progressRef;
}
