/**
 * A real-road-styled path that scrolls WITH the page (not fixed to the
 * viewport) — it's positioned absolutely inside a wrapper that spans the
 * full document height, so as the user scrolls, the road moves past them
 * exactly like riding along it, curve by curve.
 *
 * Style: dark asphalt body, a double solid yellow center line, and
 * dashed white edge lines — modeled on a real winding two-lane road
 * rather than an abstract neon line.
 */

// A sinuous S-curve path spanning the full page height, echoing a real
// winding mountain road rather than a sharp zigzag.
const PATH_D = `
  M 500 0
  C 460 150, 300 200, 320 380
  C 340 560, 620 580, 650 760
  C 680 940, 340 960, 300 1140
  C 260 1320, 640 1340, 660 1520
  C 680 1700, 320 1720, 340 1900
  C 360 2050, 500 2100, 500 2200
`;

function RoadSVG() {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none">
      <svg
        viewBox="0 0 1000 2200"
        preserveAspectRatio="xMidYMin slice"
        className="w-full h-full"
      >
        <defs>
          {/* Fades the road in starting roughly at the Skills section,
              so it doesn't appear during the Hero (better first impression) */}
          <linearGradient id="roadFadeIn" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="black" />
            <stop offset="24%" stopColor="black" />
            <stop offset="34%" stopColor="white" />
            <stop offset="100%" stopColor="white" />
          </linearGradient>
          <mask id="roadMask">
            <rect x="0" y="0" width="1000" height="2200" fill="url(#roadFadeIn)" />
          </mask>
        </defs>

        <g mask="url(#roadMask)">
        {/* Soft ground shadow — wide, heavily blurred, anchors the road
            to a surface instead of floating against the background */}
        <path
          d={PATH_D}
          fill="none"
          stroke="rgba(0,0,0,0.5)"
          strokeWidth="130"
          strokeLinecap="round"
          style={{ filter: "blur(30px)" }}
        />
        {/* Faint green verge either side — grounds it as an outdoor road
            rather than an abstract line in a void */}
        <path
          d={PATH_D}
          fill="none"
          stroke="rgba(30,58,46,0.5)"
          strokeWidth="88"
          strokeLinecap="round"
          style={{ filter: "blur(6px)" }}
        />

        {/* Asphalt body */}
        <path
          d={PATH_D}
          fill="none"
          stroke="#1a1a22"
          strokeWidth="52"
          strokeLinecap="round"
          opacity="0.9"
        />
        {/* Subtle lighter center band to fake asphalt texture/sheen */}
        <path
          d={PATH_D}
          fill="none"
          stroke="#26262f"
          strokeWidth="40"
          strokeLinecap="round"
          opacity="0.6"
        />

        {/* Dashed white edge lines */}
        <path
          d={PATH_D}
          fill="none"
          stroke="rgba(242,240,245,0.55)"
          strokeWidth="1.6"
          strokeDasharray="10 10"
          strokeLinecap="round"
          transform="translate(-22, 0)"
        />
        <path
          d={PATH_D}
          fill="none"
          stroke="rgba(242,240,245,0.55)"
          strokeWidth="1.6"
          strokeDasharray="10 10"
          strokeLinecap="round"
          transform="translate(22, 0)"
        />

        {/* Double solid yellow center line — the real-road signature detail */}
        <path
          d={PATH_D}
          fill="none"
          stroke="#e8b93f"
          strokeWidth="1.4"
          strokeLinecap="round"
          transform="translate(-2, 0)"
          opacity="0.85"
        />
        <path
          d={PATH_D}
          fill="none"
          stroke="#e8b93f"
          strokeWidth="1.4"
          strokeLinecap="round"
          transform="translate(2, 0)"
          opacity="0.85"
        />
        </g>
      </svg>
    </div>
  );
}

export default RoadSVG;
