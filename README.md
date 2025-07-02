# Sarvesh Kannan - Portfolio Website

A modern, animated portfolio website showcasing my journey as an AI-ML enthusiast and full-stack developer. Built with Next.js, Tailwind CSS, and Framer Motion for stunning animations and responsive design.

## 🌟 Features

### **Modern Design & Animations**
- Smooth page transitions with Framer Motion
- Interactive elements with hover effects
- Glass morphism UI components
- Responsive design for all devices
- Custom gradient text and neon glow effects

### **Comprehensive Sections**
- **Hero Section**: Animated introduction with typing effects
- **About Me**: Personal story, interests, and technical focus areas
- **Projects**: Filterable showcase of 10+ AI/ML projects with detailed modals
- **Skills**: Interactive skill bars with proficiency levels
- **Experience**: Timeline view of professional journey
- **Contact**: Working contact form with social links

### **Technical Highlights**
- Next.js 14 with App Router
- Tailwind CSS for styling
- Framer Motion for animations
- React Intersection Observer for scroll-triggered animations
- Fully responsive and mobile-optimized
- SEO optimized with meta tags

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/sarvesh-portfolio.git
   cd sarvesh-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Visit [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.js          # Root layout
│   └── page.js            # Main page
├── components/            # React components
│   ├── Navigation.js      # Navigation bar
│   └── sections/          # Page sections
│       ├── Hero.js        # Hero section
│       ├── About.js       # About section
│       ├── Projects.js    # Projects showcase
│       ├── Skills.js      # Skills section
│       ├── Experience.js  # Experience timeline
│       └── Contact.js     # Contact form
├── data/                  # Static data
│   └── projects.js        # Projects, skills, and personal info
├── public/                # Static assets
│   └── assets/            # Images and resume
├── tailwind.config.js     # Tailwind configuration
└── package.json           # Dependencies
```

## 🛠 Technologies Used

- **Frontend**: Next.js 14, React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter, JetBrains Mono
- **Deployment**: Vercel (recommended)

## 🎨 Customization

### **Personal Information**
Edit `data/projects.js` to update:
- Personal details and contact information
- Project descriptions and links
- Skills and proficiency levels
- Work experience
- Achievements

### **Styling**
- Colors: Modify `tailwind.config.js` for theme colors
- Animations: Adjust Framer Motion variants in components
- Layout: Update component structures as needed

### **Images**
Replace images in `public/assets/`:
- `port1.jpg` - Main profile photo
- `port2.jpg` - Professional photo
- `port3.jpg` - Casual photo
- `Sarvesh_Resume.pdf` - Updated resume

## 🌐 Deployment

### **Vercel (Recommended)**

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel --prod
   ```

3. **Domain Setup**
   - Add custom domain in Vercel dashboard
   - Configure DNS settings

### **Netlify**

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `out` folder to Netlify
   - Or connect your GitHub repository

### **Other Platforms**
- **GitHub Pages**: Enable in repository settings
- **Firebase Hosting**: Use Firebase CLI
- **AWS S3**: Upload build files to S3 bucket

## 📱 Features Overview

### **Interactive Elements**
- Smooth scroll navigation
- Project filtering by category
- Animated skill progress bars
- Working contact form
- Responsive mobile menu

### **Performance Optimizations**
- Image optimization with Next.js
- Lazy loading for sections
- Minimal bundle size
- Fast page loads

### **SEO Features**
- Meta tags for social sharing
- Structured data
- Semantic HTML
- Mobile-friendly design

## 🔧 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📞 Contact & Support

**Sarvesh Kannan**
- Email: sarveshkannan30@gmail.com
- LinkedIn: [linkedin.com/in/sarvesh-kannan](https://www.linkedin.com/in/sarvesh-kannan/)
- GitHub: [github.com/Sarvesh-Kannan](https://github.com/Sarvesh-Kannan)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Design Inspiration**: Modern portfolio trends and UI/UX best practices
- **Technologies**: Thanks to the amazing open-source community
- **Icons**: Lucide React for beautiful icons
- **Animations**: Framer Motion for smooth animations

---

**Built with ❤️ by Sarvesh Kannan**

*"I'm a builder at heart. Whether it's a smart assistant or a tool for sustainability, I believe AI should be useful, ethical, and human-centric."* 