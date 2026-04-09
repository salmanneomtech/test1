# NEOM Techverse - Digital Marketing Agency Website
## Premium 3D-Enhanced Experience

**Version:** 3.0 (3D Rebuild)  
**Stack:** Next.js 14 + React Three Fiber + TypeScript  
**Status:** Ready for Implementation

---

## 1. Project Overview

**Project Name:** Neom Techverse  
**Type:** Premium Digital Marketing Agency Website  
**Core Functionality:** Showcase agency services with immersive 3D experiences and modern web interactions  
**Target Users:** Business owners seeking premium digital marketing services

---

## 2. Visual & Rendering Specification

### Scene Setup
- **Camera:** Perspective camera with smooth parallax on mouse movement
- **Lighting:** 
  - Ambient light (low intensity for base visibility)
  - Point lights with cyan/orange colors for dramatic highlights
  - Spot lights for service card illumination
- **Environment:** Dark space-themed with subtle star field background

### Materials & Effects
- **Primary Material:** Custom shaders with holographic/futuristic appearance
- **Glass Effect:** Frosted glass cards with refraction simulation
- **Particle Systems:** Floating particles (stars/dots) throughout hero section
- **Post-Processing:**
  - Bloom (subtle, for accent elements)
  - Vignette (subtle edge darkening)

### Color Palette
| Role | Color | Hex |
|------|-------|-----|
| Background | Deep Space | #0A0A0F |
| Surface | Cosmic Navy | #12121A |
| Primary Accent | Neon Cyan | #00F0FF |
| Secondary Accent | Electric Orange | #FF6B2C |
| Tertiary | Ultraviolet | #8B5CF6 |
| Text Primary | Pure White | #FFFFFF |
| Text Secondary | Silver | #A0A0B0 |

### Typography
- **Headings:** "Clash Display" (bold, geometric, futuristic)
- **Body:** "Satoshi" (clean, modern, readable)
- **Accent:** "JetBrains Mono" (technical elements, code-like)

---

## 3. Page Structure

### 3.1 Landing Page Sections

1. **Navigation (Fixed)**
   - Logo (left): "NEOM TECHVERSE" with animated glow
   - Menu (right): Home, Services, Portfolio, About, Contact
   - Glass-morphism background on scroll

2. **Hero Section**
   - Full viewport height
   - 3D floating geometric shape (animated icosahedron or abstract)
   - Particle field background
   - Large headline: "Future-Ready Digital Marketing"
   - Subheadline with typing animation
   - CTA Button with hover glow effect

3. **Services Section**
   - Section title with gradient text
   - 6 service cards in grid (3x2)
   - Each card: Icon, Title, Description, Hover animation
   - Services: SEO, PPC Ads, Web Development, UI/UX Design, Social Media, Content Marketing

4. **Stats Section**
   - Horizontal row of 4 stats with counting animation
   - Stats: Projects Completed, Years Experience, Happy Clients, Awards Won

5. **Portfolio/Work Section**
   - Horizontal scroll gallery
   - Project thumbnails with hover zoom effect
   - Category filter buttons

6. **Testimonials Section**
   - Carousel/slider with client quotes
   - Avatar, name, company, quote

7. **Contact Section**
   - Split layout: Form on left, 3D visual on right
   - Form fields: Name, Email, Service, Message
   - Submit button with loading state

8. **Footer**
   - Logo, navigation links, social icons
   - Copyright text

---

## 4. 3D Elements Specification

### Hero 3D Object
- **Geometry:** Icosahedron or custom low-poly shape
- **Material:** Custom shader with:
  - Animated noise-based displacement
  - Fresnel rim lighting (cyan)
  - Wireframe overlay option
- **Animation:** 
  - Slow rotation (Y-axis)
  - Gentle float up/down
  - Mouse parallax response

### Particle System (Hero)
- **Count:** 200-300 particles
- **Type:** Small spheres or points
- **Behavior:** Slow random drift
- **Colors:** Mix of cyan and white with varying opacity

### Floating Elements (Throughout)
- Small geometric shapes (cubes, tetrahedrons)
- Placed strategically in sections
- Gentle bob animation
- Low opacity, accent colors

---

## 5. Interaction Specification

### User Controls
- **Mouse:** Parallax effects, cursor followers
- **Scroll:** Smooth scroll with section reveals
- **Touch:** Mobile swipe for portfolio, carousel navigation

### Interactive Elements
- **Buttons:** Scale + glow on hover, press animation on click
- **Cards:** Lift + glow on hover, reveal more info
- **Form:** Real-time validation, success/error states
- **Navigation:** Smooth scroll to sections

### Animations
- **Page Load:** Staggered reveal (logo → nav → hero content)
- **Scroll:** Elements fade in + slide up as they enter viewport
- **Hero:** Continuous 3D animation + particles
- **Sections:** Title underline animation, card stagger

---

## 6. Technical Specification

### Framework & Libraries
```json
{
  "next": "14.x",
  "react": "18.x",
  "three": "^0.160.0",
  "@react-three/fiber": "^8.15.0",
  "@react-three/drei": "^9.92.0",
  "@react-three/postprocessing": "^2.15.0",
  "framer-motion": "^11.0.0",
  "typescript": "5.x"
}
```

### File Structure
```
neom-techverse-3d/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main landing page
│   │   ├── layout.tsx         # Root layout
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Hero3D.tsx         # 3D scene component
│   │   ├── Services.tsx
│   │   ├── Stats.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── data.ts           # Content data
├── public/
│   └── images/
├── package.json
├── tsconfig.json
└── next.config.js
```

---

## 7. Acceptance Criteria

### Visual
- [ ] Dark, premium aesthetic with neon accents
- [ ] 3D object renders smoothly in hero (60fps)
- [ ] Particle system visible and animated
- [ ] All sections render correctly
- [ ] Responsive on mobile/tablet/desktop

### Functionality
- [ ] Navigation smooth scrolls to sections
- [ ] All hover states work (buttons, cards)
- [ ] Contact form validates inputs
- [ ] Stats animate on scroll into view
- [ ] Portfolio carousel navigable

### Performance
- [ ] Page loads under 3 seconds
- [ ] 3D scene maintains 60fps
- [ ] No console errors on load
- [ ] Lighthouse score > 80

### Deployment
- [ ] Builds successfully with `npm run build`
- [ ] Can be deployed to Vercel/Netlify
- [ ] All assets load correctly in production

---

## 8. Design Inspiration

**Awwwards References:**
- Distinctive typography (not generic)
- Dark mode with neon accents
- Micro-interactions and hover states
- 3D elements as accent, not overwhelm
- Smooth, premium feel (not "AI slop")

**Anti-Patterns to Avoid:**
- Generic gradient backgrounds
- Overused "AI-generated" aesthetic
- Cluttered, information-overload layout
- Slow, janky animations
- Mobile-unfriendly design