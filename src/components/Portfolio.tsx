'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: '🛒',
    color: '#00F0FF',
  },
  {
    title: 'Brand Identity System',
    category: 'UI/UX Design',
    image: '🎨',
    color: '#FF6B2C',
  },
  {
    title: 'SaaS Dashboard',
    category: 'Web Development',
    image: '📊',
    color: '#8B5CF6',
  },
  {
    title: 'Mobile App Redesign',
    category: 'UI/UX Design',
    image: '📱',
    color: '#00F0FF',
  },
  {
    title: 'SEO Campaign',
    category: 'Digital Marketing',
    image: '📈',
    color: '#FF6B2C',
  },
  {
    title: 'Social Media Growth',
    category: 'Marketing',
    image: '🌐',
    color: '#8B5CF6',
  },
];

const categories = ['All', 'Web Development', 'UI/UX Design', 'Digital Marketing', 'Marketing'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">
            Showcasing our latest projects and success stories
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-[var(--accent-cyan)] text-[var(--bg-primary)]'
                  : 'bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-2xl overflow-hidden cursor-pointer"
              style={{
                background: 'var(--bg-surface)',
                aspectRatio: '4/3',
              }}
            >
              {/* Project Image Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500">
                {project.image}
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span
                  className="text-xs font-medium"
                  style={{ color: project.color }}
                >
                  {project.category}
                </span>
                <h3
                  className="text-xl font-semibold mt-1"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn btn-outline">
            View All Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}