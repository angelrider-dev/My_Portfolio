import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * A perspective "road" made of receding rungs (like ladder steps going
 * into the distance) plus a glowing center trail. Scroll position drives
 * how far along the road we appear to be, and a subtle camera-relative
 * bob keeps it feeling alive rather than static.
 */
function RoadPath({ scrollProgress }) {
  const groupRef = useRef();
  const trailRef = useRef();

  const rungCount = 24;
  const rungPositions = useMemo(() => {
    const arr = [];
    for (let i = 0; i < rungCount; i++) {
      arr.push(-i * 1.4);
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.getElapsedTime();

    // Scroll drives forward motion along the road (z-axis).
    const progress = scrollProgress.current ?? 0;
    groupRef.current.position.z = progress * 30;

    // Gentle idle bob so it never feels frozen.
    groupRef.current.position.y = -1.6 + Math.sin(t * 0.4) * 0.05;

    if (trailRef.current) {
      trailRef.current.material.opacity =
        0.5 + Math.sin(t * 1.5) * 0.15;
    }
  });

  return (
    <group ref={groupRef} rotation={[0, 0, 0]}>
      {/* Center glowing trail line */}
      <mesh ref={trailRef} position={[0, 0.01, -14]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.06, 32]} />
        <meshBasicMaterial
          color="#00e5ff"
          transparent
          opacity={0.6}
          toneMapped={false}
        />
      </mesh>

      {/* Receding rungs give perspective depth to the "road" */}
      {rungPositions.map((z, i) => {
        const scale = 1 - i / rungCount; // shrink with distance
        return (
          <mesh
            key={i}
            position={[0, 0, z]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[3.2 * scale, 0.03]} />
            <meshBasicMaterial
              color={i % 2 === 0 ? "#8b5cf6" : "#ff2e9a"}
              transparent
              opacity={0.35 * scale + 0.1}
              toneMapped={false}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default RoadPath;
