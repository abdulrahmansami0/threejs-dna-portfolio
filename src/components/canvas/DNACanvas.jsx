import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import CanvasLoader from "../Loader";
import {
  EffectComposer,
  Bloom,
  DepthOfField,
} from "@react-three/postprocessing";
import Controls from "./components/camera-control/camera-control";
import ContentStepper from "./components/content-stepper/content-stepper";
import ModelMaterial from "./components/model-material/model-material";

const DNACanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [steps, setSteps] = useState(1);
  const focus = [60, 3, 5];

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <Canvas
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
        frameloop="always"
        shadows
        camera={{ position: focus, fov: 25 }}
        gl={{ preserveDrawingBuffer: false }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <Controls steps={steps} focus={focus} />
          <ModelMaterial isMobile={isMobile} />
          <EffectComposer>
            <Bloom
              luminanceThreshold={2}
              luminanceSmoothing={150}
              intensity={10.5}
            />
            <DepthOfField
              focusDistance={0}
              focalLength={0.09}
              bokehScale={10}
            />
          </EffectComposer>
        </Suspense>
        <Preload all />
      </Canvas>
      <ContentStepper steps={steps} />
      <button
        onClick={() => {
          setSteps(steps - 1);
        }}
        style={{
          position: "absolute",
          top: "0px",
          left: "10px",
        }}
      >
        Move Back
      </button>
      <button
        onClick={() => {
          setSteps(steps + 1);
        }}
        style={{
          position: "absolute",
          top: "30px",
          left: "10px",
        }}
      >
        Move Camera
      </button>
    </div>
  );
};

export default DNACanvas;
