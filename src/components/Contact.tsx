'use client';

import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function FloatingCrystal() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.3;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} scale={1.5}>
      <octahedronGeometry args={[1, 0]} />
      <meshStandardMaterial
        color="#8B5CF6"
        metalness={0.9}
        roughness={0.1}
        wireframe
      />
    </mesh>
  );
}

function CrystalScene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#00F0FF" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#FF6B2C" />
      <FloatingCrystal />
    </>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Ready to transform your digital presence? Let's talk!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-2xl"
            style={{ background: 'var(--bg-surface)' }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-gray-700 focus:border-[var(--accent-cyan)] focus:outline-none transition-colors"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-gray-700 focus:border-[var(--accent-cyan)] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Service Interest
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-gray-700 focus:border-[var(--accent-cyan)] focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="seo">SEO</option>
                  <option value="ppc">PPC Advertising</option>
                  <option value="development">Web Development</option>
                  <option value="design">UI/UX Design</option>
                  <option value="social">Social Media</option>
                  <option value="content">Content Marketing</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-gray-700 focus:border-[var(--accent-cyan)] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-full justify-center"
              >
                {submitted ? '✓ Sent Successfully!' : 'Send Message'}
              </button>
            </form>
          </motion.div>

          {/* 3D Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[400px] lg:h-[500px] rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, var(--bg-surface), var(--bg-primary))' }}
          >
            <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
              <CrystalScene />
            </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  );
}