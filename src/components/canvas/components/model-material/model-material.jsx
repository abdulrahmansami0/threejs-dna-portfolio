import { useGLTF } from "@react-three/drei";
import React, { useEffect, useMemo } from "react";
import * as THREE from "three";
import SceneLight from "../scene-light/scene-light";
import { useThree } from "@react-three/fiber";

const ModelMaterial = ({ isMobile }) => {
  const computers = useGLTF("./model/dna_lines_light.glb");
  const { gl } = useThree();

  const handleMaterialChanges = (child) => {
    switch (child?.name) {
      case "Plastic":
        const plasticMaterial = new THREE.MeshStandardMaterial({
          color: new THREE.Color(0x333344),
          metalness: 0.3,
          roughness: 0.2,
        });
        child.material = plasticMaterial;
        break;
      case "Glass":
        const glassMaterial = new THREE.MeshPhysicalMaterial({
          metalness: 0.0,
          roughness: 0.1,
          transmission: 1.0,
          transparent: true,
          thickness: 0.5,
          clearcoat: 1.0,
          clearcoatRoughness: 0.1,
          envMapIntensity: 1.0,
          reflectivity: 0.0,
          // ior: 0.1,
          envMap: gl.envMap,
          receiveShadow: true,
        });
        child.material = glassMaterial;
        break;
      case "Metal":
        const metalMaterial = new THREE.MeshStandardMaterial({
          color: new THREE.Color(0x555555),
          metalness: 0.9,
          roughness: 0.2,
        });
        child.material = metalMaterial;
        break;
      case "Polished_Plastic":
        const polishMaterial = new THREE.MeshStandardMaterial({
          color: new THREE.Color(0x536dff),
          metalness: 2.9,
          roughness: 0.1,
        });
        child.material = polishMaterial;
        break;
      case "Orange_Glow":
        const orangeMaterial = new THREE.MeshStandardMaterial({
          color: new THREE.Color(0xff5f1f),
          emissive: new THREE.Color(0xff5f1f),
          emissiveIntensity: 25.0,
          metalness: 0.7,
          roughness: 0.4,
        });
        child.material = orangeMaterial;
        break;
      case "Blue_Lines":
        const blueMaterial = new THREE.MeshStandardMaterial({
          color: new THREE.Color(0x53adfe),
          emissive: new THREE.Color(0x536dfe),
          emissiveIntensity: 10.0,
          metalness: 4.9,
          roughness: 0.1,
        });
        child.material = blueMaterial;
        break;
      default:
        const defaultMaterial = new THREE.MeshStandardMaterial({
          color: new THREE.Color(0xffffff),
          metalness: 0.0,
          roughness: 0.5,
        });
        child.material = defaultMaterial;
        break;
    }
  };

  useEffect(() => {
    if (computers?.scene) {
      computers.scene.traverse((child) => {
        if (child.isMesh) {
          handleMaterialChanges(child);
        }
      });
    }
  }, [computers?.scene]);

  return (
    <>
      <mesh>
        <SceneLight />
        <primitive
          object={computers?.scene}
          scale={isMobile ? 0.7 : 10.75}
          position={isMobile ? [0, -3, -2.2] : [0, 0.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    </>
  );
};

export default ModelMaterial;
