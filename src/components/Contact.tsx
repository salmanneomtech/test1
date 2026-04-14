'use client';

import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';

const services = [
  "Digital Marketing",
  "Web Development",
  "Brand Strategy",
  "SEO",
  "Social Media",
  "PPC Advertising",
  "UI/UX Design",
  "Content Marketing",
];

const contactInfo = [
  { icon: MapPin, label: "Address", value: "Lahore, Pakistan" },
  { icon: Phone, label: "Phone", value: "+92 300 123 4567" },
  { icon: Mail, label: "Email", value: "hello@neomtechverse.com" },
];

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
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    budget: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) 
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          budget: '',
          message: '',
        });
        setSelectedServices([]);
      }, 3000);
    }, 1500);
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

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left: Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-[var(--text-primary)]">Contact Info</h3>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[var(--accent-cyan)]/10 shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-[var(--accent-cyan)]" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">{label}</div>
                      <div className="text-sm">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="p-6 rounded-2xl" style={{ background: 'var(--bg-surface)', border: '1px solid #333' }}>
              <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Monday – Friday</span>
                  <span className="font-medium">9am – 6pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Saturday</span>
                  <span className="font-medium">10am – 2pm</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[var(--text-secondary)]">Sunday</span>
                  <span className="text-[var(--text-secondary)]/60">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center & Right: Form or Success */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center rounded-2xl" style={{ background: 'var(--bg-surface)' }}>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ background: 'linear-gradient(135deg, #10B981, #059669)' }}
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-[var(--text-secondary)] max-w-sm mb-6">
                  Thank you for reaching out. Our team will get back to you within 2 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn btn-primary"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl space-y-6" style={{ background: 'var(--bg-surface)' }}>
                <h3 className="text-xl font-semibold mb-4">Tell us about your project</h3>

                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-gray-700 focus:border-[var(--accent-cyan)] focus:outline-none transition-colors"
                      placeholder="Ahmed"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-gray-700 focus:border-[var(--accent-cyan)] focus:outline-none transition-colors"
                      placeholder="Khan"
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-gray-700 focus:border-[var(--accent-cyan)] focus:outline-none transition-colors"
                      placeholder="ahmed@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-gray-700 focus:border-[var(--accent-cyan)] focus:outline-none transition-colors"
                      placeholder="+92 300 123 4567"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-gray-700 focus:border-[var(--accent-cyan)] focus:outline-none transition-colors"
                    placeholder="Your Company, Inc."
                  />
                </div>

                {/* Multi-select Service Buttons */}
                <div>
                  <label className="block text-sm font-medium mb-3">
                    Services you're interested in <span className="text-red-500">*</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {services.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                          selectedServices.includes(service)
                            ? 'bg-[var(--accent-cyan)] text-white border-[var(--accent-cyan)]'
                            : 'bg-transparent border-gray-700 hover:border-[var(--accent-cyan)]/50 hover:bg-[var(--accent-cyan)]/5'
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Dropdown */}
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Monthly Budget Range
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-gray-700 focus:border-[var(--accent-cyan)] focus:outline-none transition-colors"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-500">Under $500/mo</option>
                    <option value="500-1500">$500 – $1,500/mo</option>
                    <option value="1500-5000">$1,500 – $5,000/mo</option>
                    <option value="5000+">$5,000+/mo</option>
                    <option value="custom">Custom / Let's discuss</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-[var(--bg-primary)] border border-gray-700 focus:border-[var(--accent-cyan)] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your goals, challenges, and what you'd like to achieve..."
                    required
                  />
                </div>

                {/* Submit Button with Loading */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" /> Send Message
                    </span>
                  )}
                </button>
                
                <p className="text-xs text-center text-[var(--text-secondary)]">
                  By submitting, you agree to our Privacy Policy. We'll never spam you.
                </p>
              </form>
            )}
          </motion.div>

          {/* 3D Visual - Below form on mobile, right side on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="hidden lg:block h-[400px] rounded-2xl overflow-hidden"
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