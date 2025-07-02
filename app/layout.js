import './globals.css'

export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Sarvesh Kannan - AI-ML Enthusiast & Full-Stack Developer',
  description: '20-year-old AI-ML enthusiast from Chennai, India. Building intelligent systems, sustainability solutions, and healthcare technology that make a real impact.',
  keywords: ['AI', 'Machine Learning', 'Full-Stack Developer', 'React', 'Next.js', 'Python', 'Chennai', 'Sarvesh Kannan'],
  authors: [{ name: 'Sarvesh Kannan' }],
  creator: 'Sarvesh Kannan',
  publisher: 'Sarvesh Kannan',
  openGraph: {
    title: 'Sarvesh Kannan - AI-ML Enthusiast & Full-Stack Developer',
    description: '20-year-old AI-ML enthusiast from Chennai, India. Building intelligent systems, sustainability solutions, and healthcare technology that make a real impact.',
    url: 'http://localhost:3000',
    siteName: 'Sarvesh Kannan Portfolio',
    images: [
      {
        url: '/assets/port1.jpg',
        width: 1200,
        height: 630,
        alt: 'Sarvesh Kannan - AI-ML Enthusiast',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sarvesh Kannan - AI-ML Enthusiast & Full-Stack Developer',
    description: '20-year-old AI-ML enthusiast from Chennai, India. Building intelligent systems, sustainability solutions, and healthcare technology that make a real impact.',
    images: ['/assets/port1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0ea5e9" />
      </head>
      <body className="font-sans antialiased">
        <div id="particles-container" className="fixed inset-0 pointer-events-none z-0" />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  )
} 