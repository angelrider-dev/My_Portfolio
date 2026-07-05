import SceneCanvas from "./components/three/SceneCanvas";
import RoadSVG from "./components/three/RoadSVG";
import Nav from "./components/layout/Nav";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Poetry from "./components/sections/Poetry";
import BeyondCode from "./components/sections/BeyondCode";
import Contact from "./components/sections/Contact";
import ScrollProgress from "./components/ui/ScrollProgress";
import CustomCursor from "./components/ui/CustomCursor";
import AmbientTint from "./components/ui/AmbientTint";
import SectionDivider from "./components/ui/SectionDivider";

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Fixed to viewport — these stay put regardless of scroll */}
      <AmbientTint />
      <SceneCanvas />
      <CustomCursor />
      <Nav />
      <ScrollProgress />

      {/* Relative wrapper spans the full document height, so the road
          (absolutely positioned inside it) scrolls WITH the content
          instead of staying fixed to the screen. */}
      <div className="relative">
        <RoadSVG />
        <main className="relative z-10">
          <Hero />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Skills />
          <SectionDivider />
          <Projects />
          <SectionDivider />
          <Poetry />
          <SectionDivider />
          <BeyondCode />
          <SectionDivider />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
