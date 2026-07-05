import { useRef, useState } from "react";

/**
 * Reusable card with mouse-follow 3D tilt.
 * Pure CSS transform (no Three.js needed) — cheap on the main thread
 * and works identically for skills, projects, and beyond-code cards.
 *
 * Respects prefers-reduced-motion via the global CSS rule in tokens.css
 * (transition-duration gets clamped to ~0 there).
 */
function TiltCard({ children, className = "", maxTilt = 8 }) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({});

  function handleMouseMove(e) {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    setStyle({
      transform: `perspective(700px) rotateY(${x * maxTilt * 2}deg) rotateX(${
        -y * maxTilt * 2
      }deg) translateZ(10px)`,
    });
  }

  function handleMouseLeave() {
    setStyle({
      transform:
        "perspective(700px) rotateY(0deg) rotateX(0deg) translateZ(0px)",
    });
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ ...style, transition: "transform 0.25s ease-out" }}
      className={className}
    >
      {children}
    </div>
  );
}

export default TiltCard;
