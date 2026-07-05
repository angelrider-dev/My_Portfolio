/**
 * A small glowing "waypoint" marker placed between sections, reinforcing
 * the road/journey metaphor at each transition without needing extra copy.
 */
function SectionDivider() {
  return (
    <div className="relative z-10 flex justify-center py-2">
      <div className="relative w-2.5 h-2.5 rounded-full bg-[color:var(--color-cyan)]">
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-60"
          style={{ background: "var(--color-cyan)" }}
        />
      </div>
    </div>
  );
}

export default SectionDivider;
