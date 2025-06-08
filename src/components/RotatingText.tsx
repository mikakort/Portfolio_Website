'use client';

import { Canvas } from '@react-three/fiber';
import { Text3D, Center, OrbitControls } from '@react-three/drei';
import { useRef, useEffect, useState } from 'react';
import { Mesh, Texture, CanvasTexture } from 'three';

function createNeonGradientTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  // Create a horizontal neon gradient (e.g., pink, blue, green)
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  gradient.addColorStop(0, '#ff00cc'); // Neon pink
  gradient.addColorStop(0.5, '#00ffff'); // Neon blue
  gradient.addColorStop(1, '#39ff14'); // Neon green
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  return new CanvasTexture(canvas);
}

function RotatingText3D() {
  const meshRef = useRef<Mesh>(null);
  const [gradientMap, setGradientMap] = useState<Texture | null>(null);
  const [spinning, setSpinning] = useState(true);

  useEffect(() => {
    const texture = createNeonGradientTexture();
    if (texture) {
      texture.needsUpdate = true;
      setGradientMap(texture);
    }
  }, []);

  // Spin animation on mount
  useEffect(() => {
    if (!spinning) return;
    let frame: number;
    const start = performance.now();
    const duration = 1200; // 2 seconds
    const spins = 1; // 3 full spins
    function animate(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      if (meshRef.current) {
        meshRef.current.rotation.x = progress * spins * 2 * Math.PI;
      }
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      } else {
        if (meshRef.current) meshRef.current.rotation.x = 0;
        setSpinning(false);
      }
    }
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [spinning]);

  return (
    <Center>
      <Text3D
        ref={meshRef}
        font="https://threejs.org/examples/fonts/helvetiker_regular.typeface.json"
        size={0.9}
        height={0.15}
        curveSegments={24}
        bevelEnabled={true}
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelSegments={5}>
        Mikael K.
        {gradientMap && (
          <meshPhysicalMaterial
            map={gradientMap}
            emissive="#00fff7"
            emissiveIntensity={2.5}
            metalness={0.7}
            roughness={0.15}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        )}
      </Text3D>
    </Center>
  );
}

export default function RotatingText() {
  return (
    <div className="h-[400px] w-full">
      <Canvas camera={{ position: [0, 0.5, 4], fov: 70 }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <spotLight position={[-10, 10, -10]} angle={0.3} penumbra={1} intensity={0.5} />
        <RotatingText3D />
        <OrbitControls
          enableZoom={false}
          rotateSpeed={0.5}
          dampingFactor={0.05}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
