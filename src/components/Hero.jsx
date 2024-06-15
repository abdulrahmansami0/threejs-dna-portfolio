import DNACanvas from "./canvas/DNACanvas";
import DNAsCanvas from "./canvas/DNACanvas";
import "./hero.css";
const Hero = () => {
  return (
    <section
      style={{
        backgroundColor: "#03132C",
        position: "relative",
        overflow: "hidden",
        height: "100vh",
      }}
    >
      <div className="circle" />
      <div className="circle2" />
      <DNACanvas />
    </section>
  );
};

export default Hero;
