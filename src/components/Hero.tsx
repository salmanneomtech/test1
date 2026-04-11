'use client';

import { useRef, useMemo, Suspense, lazy } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function HeroCanvas() {
  return (
    <Suspense fallback={null}>
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
        <Scene />
      </Canvas>
    </Suspense>
  );
}

function AnimatedShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={2.5}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#00F0FF"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
}

function Particles() {
  const count = 200;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#00F0FF"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00F0FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF6B2C" />
      <AnimatedShape />
      <Particles />
      <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
    </>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <HeroCanvas />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-primary)] z-10" />

      {/* Content */}
      <div className="container relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              background: 'rgba(0, 240, 255, 0.1)',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              color: 'var(--accent-cyan)',
            }}
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🚀 Future-Ready Digital Marketing
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          Transform Your
          <br />
          <span className="bg-gradient-to-r from-[var(--accent-cyan)] via-[var(--accent-purple)] to-[var(--accent-orange)] bg-clip-text text-transparent">
            Digital Presence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10"
        >
          We craft immersive digital experiences that elevate brands and drive results. 
          From SEO to 3D web solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="btn btn-primary text-lg">
            Start Your Project
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button className="btn btn-outline text-lg">
            View Our Work
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-[var(--text-secondary)] flex justify-center pt-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}