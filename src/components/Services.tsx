'use client';

import { motion } from 'framer-motion';

const services = [
  {
    icon: '🔍',
    title: 'Search Engine Optimization',
    description: 'Boost your visibility with data-driven SEO strategies that deliver lasting results.',
    color: '#00F0FF',
  },
  {
    icon: '📈',
    title: 'PPC Advertising',
    description: 'Targeted campaigns that maximize ROI and drive quality leads to your business.',
    color: '#FF6B2C',
  },
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Custom websites built with cutting-edge tech for exceptional user experiences.',
    color: '#8B5CF6',
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive designs that captivate users and enhance engagement.',
    color: '#00F0FF',
  },
  {
    icon: '📱',
    title: 'Social Media Marketing',
    description: 'Build brand awareness and connect with your audience across all platforms.',
    color: '#FF6B2C',
  },
  {
    icon: '✍️',
    title: 'Content Marketing',
    description: 'Compelling content that tells your story and converts visitors into customers.',
    color: '#8B5CF6',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: 'var(--bg-surface)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group p-8 rounded-2xl"
              style={{
                background: 'rgba(18, 18, 26, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-6"
                style={{
                  background: `linear-gradient(135deg, ${service.color}20, ${service.color}10)`,
                  border: `1px solid ${service.color}30`,
                }}
              >
                {service.icon}
              </div>
              <h3
                className="text-xl font-semibold mb-3 group-hover:text-white transition-colors"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {service.title}
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                {service.description}
              </p>
              <motion.div
                className="mt-4 h-0.5"
                style={{ background: service.color }}
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.2, duration: 0.5 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}