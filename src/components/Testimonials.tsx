'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "NEOM Techverse transformed our digital presence. Our traffic increased by 300% within 6 months. Their SEO expertise is unmatched!",
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    avatar: "👩‍💼",
  },
  {
    quote: "The team delivered a stunning website that perfectly captures our brand. The 3D elements they added truly set us apart from competitors.",
    name: "Michael Chen",
    role: "Founder, DesignHub",
    avatar: "👨‍💻",
  },
  {
    quote: "Their PPC campaigns generated a 500% ROI for our e-commerce store. Best investment we've made for our business.",
    name: "Emily Rodriguez",
    role: "Marketing Director, ShopSmart",
    avatar: "👩‍🎨",
  },
  {
    quote: "Professional, innovative, and results-driven. NEOM Techverse is the partner you need for digital success.",
    name: "David Kim",
    role: "CTO, InnovateTech",
    avatar: "👨‍🔬",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="about" className="section" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Client Stories</h2>
          <p className="section-subtitle">
            What our clients say about working with us
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center px-8"
              >
                <div className="text-6xl mb-6">"</div>
                <p className="text-xl md:text-2xl text-[var(--text-primary)] leading-relaxed mb-8">
                  {testimonials[current].quote}
                </p>
                <div className="flex items-center justify-center gap-4">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl" style={{ background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-purple))' }}>
                    {testimonials[current].avatar}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold" style={{ fontFamily: 'var(--font-heading)' }}>
                      {testimonials[current].name}
                    </p>
                    <p className="text-sm text-[var(--text-secondary)]">
                      {testimonials[current].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
              style={{ background: 'var(--bg-primary)' }}
            >
              ←
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
              style={{ background: 'var(--bg-primary)' }}
            >
              →
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  current === index ? 'w-8 bg-[var(--accent-cyan)]' : 'bg-[var(--text-secondary)]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}