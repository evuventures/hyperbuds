# About Us Page

A modern, animated About Us page built with Next.js, Framer Motion, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with responsive breakpoints
- **Dark/Light Mode**: Full support for both themes
- **Framer Motion Animations**: Smooth, engaging animations throughout
- **Modern UI**: Clean, professional design with yellow accent colors
- **Accessibility**: Proper ARIA labels and semantic HTML

## Components

### `AboutHero`
- Hero section with animated decorative elements
- Large "About us" heading with lorem ipsum text
- Floating geometric shapes with continuous animations

### `TeamGallery`
- Grid of team member images
- Hover effects with scale and overlay animations
- Responsive grid layout (2 columns on mobile, 4 on desktop)

### `MissionSection`
- Two-column layout with mission statement
- Animated content blocks
- Gradient background element

### `VideoTestimonial`
- Video thumbnail with play button overlay
- Quote card with founder testimonial
- Animated play button with continuous pulse

### `FeaturesSection`
- Three feature cards with icons
- Animated icons with hover effects
- Decorative floating elements

## Animations

- **Entrance Animations**: Fade in and slide up effects
- **Hover Effects**: Scale, rotate, and color transitions
- **Continuous Animations**: Floating elements and pulsing buttons
- **Staggered Animations**: Sequential appearance of elements

## Styling

- **Color Scheme**: Yellow (#FBBF24) primary, gray text, white backgrounds
- **Typography**: Bold headings, readable body text
- **Spacing**: Consistent padding and margins
- **Shadows**: Subtle depth with shadow-lg effects

## Usage

```tsx
import { AboutPage } from '@/app/about/page';

// The page is automatically available at /about
```

## Dependencies

- `framer-motion`: For animations
- `lucide-react`: For icons
- `tailwindcss`: For styling
