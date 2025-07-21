import React, { Suspense, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function Model() {
  const gltf = useGLTF("/chaussure.glb");
  return <primitive object={gltf.scene} />;
}

function SetCameraZoom() {
  const { camera } = useThree();

  useEffect(() => {
    camera.zoom = 1; // optionnel, tu peux ajuster le zoom ici
    camera.updateProjectionMatrix();
  }, [camera]);

  return null;
}

export default function ModelViewer() {
  return (
    <Canvas
      camera={{
        position: [-0.8608639369247562, 1.463356283678273, -0.20869006640208804],
        fov: 50,
      }}
    >
      <ambientLight />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <SetCameraZoom />
      <OrbitControls
        target={[0, 0, 0]}
        enableRotate
        enableZoom
        enablePan={false}
      />
    </Canvas>
  );
}
