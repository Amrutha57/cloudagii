# CloudAGI - Design System & Maintenance Guide

## 🎨 Color System

### Primary Colors
```
Dark Background:    #0f1729 (used in --bg variable)
Dark Card:          #1a2847 (used for secondary backgrounds)
Dark Border:        #2a3d5c (used for borders and dividers)
```

### Accent Colors
```
Accent Blue:        #3b82f6 (primary action, highlights)
Accent Purple:      #8b5cf6 (gradients, secondary accents)
Accent Cyan:        #06b6d4 (tertiary accents)
```

### Text Colors
```
Text White:         #ffffff (primary text)
Text Gray 200:      #e5e7eb (secondary text)
Text Gray 300:      #d1d5db (tertiary text)
Text Gray 400:      #9ca3af (disabled/subtle text)
```

## 🛠️ Tailwind Classes Quick Reference

### Dark Theme Classes
```
bg-dark-bg          → Dark navy background
bg-dark-card        → Card/secondary background
bg-dark-border      → Border color helper
text-white          → Primary text
text-gray-400       → Secondary text
```

### Accent Classes
```
text-accent-blue    → Blue text
bg-accent-blue      → Blue background
border-accent-blue  → Blue border
```

### Effect Classes
```
glass               → Glass morphism effect
glow-blue           → Blue shadow glow
glow-blue-hover     → Blue glow on hover
shadow-glow-blue    → Blue box shadow
```

### Gradient Classes
```
bg-gradient-blue    → Blue to purple gradient
bg-gradient-dark    → Dark gradient background
bg-gradient-card    → Semi-transparent gradient
```

## 🎬 Animation Classes

### Built-in Animations
```
animate-gradient-shift   → Smooth gradient color shift
animate-float           → Floating up/down motion
```

### CSS Keyframes (in tailwind.config.js)
```
gradient-shift: 6s ease infinite
float: 3s ease-in-out infinite
```

## 📋 Common Use Cases

### Adding a New Blue Button
```jsx
<button className="px-6 py-3 bg-gradient-blue text-white rounded-lg hover:shadow-glow-blue transition-all duration-300 hover:scale-105 transform">
  Button Text
</button>
```

### Creating a Card with Glass Effect
```jsx
<div className="glass p-8 rounded-lg hover:border-accent-blue hover:shadow-glow-blue transition-all duration-300">
  Card Content
</div>
```

### Adding Accent Text
```jsx
<h3 className="text-white hover:text-accent-blue transition-colors">
  Heading Text
</h3>
```

### Creating Hero Section with Gradient
```jsx
<section className="bg-gradient-dark">
  {/* Floating orbs */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
  </div>
</section>
```

## 🚀 Performance Tips

1. **Use CSS Animations**: Prefer `animate-*` over JavaScript animations
2. **Optimize Images**: Use Next.js Image component for optimization
3. **Lazy Load**: Use `whileInView` for animations that trigger on scroll
4. **Reduce Motion**: Consider `prefers-reduced-motion` for accessibility
5. **Cache Busting**: Next.js handles this automatically

## 🔧 Maintenance Checklist

### Monthly
- [ ] Check for browser compatibility issues
- [ ] Review page loading times
- [ ] Test all forms and CTAs
- [ ] Check mobile responsiveness

### Quarterly
- [ ] Update dependencies (npm update)
- [ ] Review and optimize images
- [ ] Check SEO ranking for target keywords
- [ ] Test analytics tracking

### Annually
- [ ] Review design against latest trends
- [ ] Audit accessibility
- [ ] Perform security audit
- [ ] Review performance metrics

## 🐛 Troubleshooting

### Colors Not Applying?
1. Clear browser cache (Ctrl+Shift+Delete)
2. Rebuild: `npm run build`
3. Check Tailwind config extends theme properly
4. Verify class names in component

### Animations Stuttering?
1. Check for expensive CSS operations
2. Use `will-change` for animated elements
3. Reduce blur amount in glass effect
4. Check GPU acceleration in DevTools

### Page Feels Slow?
1. Run: `npm run build` to check file size
2. Check Network tab in DevTools
3. Look for unoptimized images
4. Check for missing Next.js Image optimization

## 📱 Responsive Breakpoints

Tailwind uses these breakpoints:
```
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px
```

Example: `md:grid-cols-2` = 2 columns on medium screens and up

## 🎯 Design Constants

### Border Radius
```
rounded-lg: 0.5rem (used on most elements)
rounded-xl: 0.75rem (larger elements)
```

### Spacing
```
p-8: 2rem padding (standard card padding)
gap-8: 2rem gap (standard grid gap)
mt-12: 3rem margin top (standard section spacing)
```

### Font Sizes
```
text-sm: 0.875rem (labels, secondary text)
text-lg: 1.125rem (body text)
text-2xl: 1.5rem (subheadings)
text-4xl: 2.25rem (section headings)
text-6xl: 3.75rem (hero headings)
```

## 📞 Support Resources

- **Tailwind Docs**: https://tailwindcss.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Design System**: See DESIGN_CHANGES.md

## ⚡ Quick Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm run start            # Start production server

# Linting
npm run lint             # Run ESLint

# Deployment (Vercel)
vercel                   # Deploy to production
vercel --prod           # Force production deployment
```

---

**Last Updated**: January 19, 2026
**Design Version**: 1.0
**Next Review**: Q2 2026
