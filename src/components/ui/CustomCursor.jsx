import { useEffect, useRef } from "react";

/**
 * Replaces the default cursor with a small glowing dot + a larger soft
 * "headlight" glow that trails slightly behind it. Both are driven by
 * the same mousemove listener and updated via refs (not state) so this
 * never triggers a React re-render — critical since mousemove fires
 * dozens of times per second.
 *
 * Disabled automatically on touch devices where there is no cursor.
 */
function CustomCursor() {
  const dotRef = useRef(null);
  const glowRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const glowPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    if (isTouchDevice) return;

    function handleMove(e) {
      pos.current = { x: e.clientX, y: e.clientY };
    }
    window.addEventListener("mousemove", handleMove);

    let rafId;
    function animate() {
      // Dot follows instantly.
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px)`;
      }
      // Glow eases toward the pointer for a soft trailing feel.
      glowPos.current.x += (pos.current.x - glowPos.current.x) * 0.12;
      glowPos.current.y += (pos.current.y - glowPos.current.y) * 0.12;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glowPos.current.x}px, ${glowPos.current.y}px)`;
      }
      rafId = requestAnimationFrame(animate);
    }
    animate();

    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(rafId);
      document.body.style.cursor = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[999] hidden md:block">
      <div
        ref={glowRef}
        className="absolute w-[260px] h-[260px] -ml-[130px] -mt-[130px] rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, var(--color-violet) 0%, transparent 70%)",
          filter: "blur(10px)",
        }}
      />
      <div
        ref={dotRef}
        className="absolute w-2.5 h-2.5 -ml-[5px] -mt-[5px] rounded-full"
        style={{
          background: "var(--color-cyan)",
          boxShadow: "0 0 12px var(--color-cyan)",
        }}
      />
    </div>
  );
}

export default CustomCursor;
