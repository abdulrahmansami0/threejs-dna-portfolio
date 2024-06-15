import React from "react";

const SceneLight = () => {
  return (
    <>
      <pointLight intensity={500} color={0xff5f1f} position={[0, 10, 0]} />
      <pointLight intensity={800} color={0x2081f9} position={[0, -10, 0]} />
      <ambientLight intensity={0.3} />
      <directionalLight
        color={0xffffff}
        intensity={2.8}
        position={[0, 10, 0]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
      />
      <directionalLight
        color={0x89889a}
        intensity={2.8}
        position={[0, -10, 0]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-5}
        shadow-camera-right={5}
        shadow-camera-top={5}
        shadow-camera-bottom={-5}
      />
    </>
  );
};

export default SceneLight;
