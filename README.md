# Aqua Ultimate Landing Page

A beautiful, responsive landing page for Aqua Ultimate water conditioner, built with React, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design**: Clean, minimal layout with soft blue color scheme
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ✨ **Smooth Animations**: Framer Motion-powered scroll animations
- 🎯 **Conversion Focused**: Clear CTAs and user journey optimization
- 🚀 **Performance Optimized**: Fast loading with optimized assets

## Sections

1. **Sticky Navigation**: Black navbar with logo, navigation links, and icons
2. **Hero Section**: Light aqua background with floating product image and compelling copy
3. **Features Bar**: 6 key benefits with icon-based highlights
4. **How It Works**: Step-by-step process explanation
5. **Before/After**: Interactive slider showing transformation results
6. **Testimonials**: Customer reviews carousel with auto-rotation
7. **Certifications**: Trust badges and quality assurances
8. **Footer**: Contact info, social links, and newsletter signup
9. **WhatsApp Button**: Floating contact button for direct communication

## Tech Stack

- **React 18**: Modern React with hooks
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide React**: Beautiful icons
- **Google Fonts**: Inter and Poppins typography

## Design Tokens

- **Primary Color**: `#B2E0EA` (light aqua)
- **Accent Color**: `#4A90E2` (deep ocean blue)
- **Text Color**: `#1A1A1A`
- **Backgrounds**: `#FFFFFF` and `#F7F7F7`
- **Typography**: Inter and Poppins fonts

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd aqua-ultimate-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Sticky navigation
│   ├── HeroSection.js     # Hero with floating product
│   ├── FeaturesBar.js     # 6 key features
│   ├── HowItWorks.js      # Step-by-step process
│   ├── BeforeAfter.js     # Transformation slider
│   ├── Testimonials.js    # Customer reviews
│   ├── Certifications.js  # Trust badges
│   ├── Footer.js          # Footer with links
│   └── WhatsAppButton.js  # Floating contact button
├── App.js                 # Main app component
├── index.js              # React entry point
└── index.css             # Global styles and Tailwind
```

## Customization

### Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: '#B2E0EA',
  accent: '#4A90E2',
  text: '#1A1A1A',
  // ...
}
```

### Content
Modify the content in each component file to match your brand messaging.

### Images
Replace placeholder content with actual product images and customer photos.

## Performance

- Optimized bundle size with code splitting
- Lazy loading for images
- Efficient animations with Framer Motion
- Responsive images and assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact the development team. 