import CameraControls from "camera-controls";
import { useFrame, useThree } from "@react-three/fiber";
import { useMemo } from "react";
import * as THREE from "three";

CameraControls.install({ THREE });

const Controls = ({ focus, steps }) => {
  const { camera, gl } = useThree();
  const controls = useMemo(
    () => new CameraControls(camera, gl.domElement),
    [camera, gl]
  );
  const pos = new THREE.Vector3();
  const look = new THREE.Vector3();

  let targetFov = 25;
  return useFrame((state, delta) => {
    if (steps === 0) {
      pos.set(focus[0], focus[1], focus[2] + 0.2);
      look.set(focus[0], focus[1], focus[2] - 0.2);
    } else if (steps === 1) {
      pos.set(8, 10, 10);
      look.set(0, -1, 0);
      targetFov = 25; // Default FOV
    } else if (steps === 2) {
      pos.set(4, 0, 10);
      look.set(0, 0, 0);
      targetFov = 15;
    } else if (steps === 3) {
      pos.set(-20, 10, 20);
      look.set(-1, 0, 0);
      targetFov = 15;
    }

    camera.position.lerp(pos, 0.6);
    camera.fov += (targetFov - camera.fov) * 0.1;
    camera.updateProjectionMatrix();

    controls.setLookAt(
      camera.position.x,
      camera.position.y,
      camera.position.z,
      look.x,
      look.y,
      look.z,
      true
    );

    return controls.update(delta);
  });
};

export default Controls;
