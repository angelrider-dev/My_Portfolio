import { motion } from "framer-motion";

/**
 * Wraps a section's content so it slides in and "banks" (slight rotate +
 * horizontal offset) from the direction the road curves at that point —
 * left turn = content leans in from the left, right turn = from the right.
 * "none" is used for the hero, which doesn't need this treatment.
 */
const directionVariants = {
  left: {
    hidden: { opacity: 0, x: -60, rotate: -2 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1] },
    },
  },
  right: {
    hidden: { opacity: 0, x: 60, rotate: 2 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 0.9, ease: [0.65, 0, 0.35, 1] },
    },
  },
  none: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  },
};

function TurnWrapper({ direction = "none", children, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
      variants={directionVariants[direction]}
      className={className}
      style={{ transformOrigin: direction === "left" ? "left center" : "right center" }}
    >
      {children}
    </motion.div>
  );
}

export default TurnWrapper;
