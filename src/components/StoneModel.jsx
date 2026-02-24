import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial, Environment } from '@react-three/drei';
import * as THREE from 'three';

const StoneSculpture = () => {
  const meshRef = useRef();
  const particlesRef = useRef();

  // Create particle positions for floating particles
  const particlePositions = useMemo(() => {
    const positions = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0005;
    }
  });

  return (
    <>
      {/* Ambient and directional lights */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#D4AF37" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#B87333" />
      <pointLight position={[0, 0, 5]} intensity={0.5} color="#D4AF37" />

      {/* Main Stone Sculpture */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh ref={meshRef} position={[0, 0, 0]} scale={1.5}>
          <icosahedronGeometry args={[1, 1]} />
          <MeshDistortMaterial
            color="#78716c"
            roughness={0.8}
            metalness={0.2}
            distort={0.3}
            speed={1.5}
          />
        </mesh>
      </Float>

      {/* Inner glowing core */}
      <Float speed={3} rotationIntensity={1} floatIntensity={0.5}>
        <mesh position={[0, 0, 0]} scale={0.6}>
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#D4AF37"
            emissive="#D4AF37"
            emissiveIntensity={0.5}
            roughness={0.3}
            metalness={0.8}
          />
        </mesh>
      </Float>

      {/* Floating particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlePositions.length / 3}
            array={particlePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.02}
          color="#D4AF37"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>

      {/* Decorative rings */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <torusGeometry args={[2.5, 0.02, 16, 100]} />
        <meshStandardMaterial color="#D4AF37" emissive="#D4AF37" emissiveIntensity={0.3} />
      </mesh>

      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]} position={[0, 0, 0]}>
        <torusGeometry args={[2.2, 0.015, 16, 100]} />
        <meshStandardMaterial color="#B87333" emissive="#B87333" emissiveIntensity={0.2} />
      </mesh>

      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
};

const StoneModel = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <StoneSculpture />
      </Canvas>
    </div>
  );
};

export default StoneModel;
