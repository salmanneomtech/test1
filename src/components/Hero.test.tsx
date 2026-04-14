import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

vi.mock('@react-three/fiber', () => ({
  Canvas: ({ children }: { children: React.ReactNode }) => children,
  useFrame: vi.fn(),
}));

vi.mock('@react-three/drei', () => ({
  Float: ({ children }: { children: React.ReactNode }) => children,
  MeshDistortMaterial: () => null,
  Stars: () => null,
}));

describe('Hero', () => {
  it('renders main heading', () => {
    render(<Hero />);
    expect(screen.getByText('Transform Your')).toBeDefined();
  });

  it('renders subtitle', () => {
    render(<Hero />);
    expect(screen.getByText(/We craft immersive digital experiences/)).toBeDefined();
  });

  it('renders CTA buttons', () => {
    render(<Hero />);
    expect(screen.getByText('Start Your Project')).toBeDefined();
    expect(screen.getByText('View Our Work')).toBeDefined();
  });

  it('renders tagline', () => {
    render(<Hero />);
    expect(screen.getByText('🚀 Future-Ready Digital Marketing')).toBeDefined();
  });
});