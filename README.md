# MainFocus Landing Page Template

A modern, customizable landing page template built with React, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Fully customizable via JSON configuration
- 📱 Responsive design for all devices
- ✨ Smooth animations with Framer Motion
- 🎯 Optimized for performance
- 🔧 Easy to maintain and extend

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`

## Customization

### Content

Edit the content in `src/config/template.json`:

```json
{
  "brand": {
    "name": "Your Brand",
    "tagline": "Your Tagline"
  },
  // ... other sections
}
```

### Styling

- Colors: Edit `tailwind.config.js`
- Typography: Modify font settings in `index.html` and `tailwind.config.js`
- Layout: Adjust component styles using Tailwind classes

### Components

All components are modular and can be found in `src/components/`:

- `Hero.tsx`: Main landing section
- `Features.tsx`: Product features grid
- `Testimonials.tsx`: User testimonials
- `FAQ.tsx`: Frequently asked questions

### Animations

Framer Motion animations can be customized in each component:

```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  // Your content
</motion.div>
```

## Project Structure

```
src/
├── components/     # React components
├── config/        # Configuration files
├── styles/        # Global styles
├── hooks/         # Custom React hooks
├── contexts/      # React contexts
└── services/      # API services
```

## Best Practices

- Keep components small and focused
- Use TypeScript for type safety
- Follow Tailwind CSS best practices
- Maintain consistent naming conventions

## License

MIT License - feel free to use for personal or commercial projects.