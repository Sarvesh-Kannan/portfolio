export const projects = [
  {
    id: 1,
    title: "Wildlife Safety System (Cam-Trap)",
    description: "Animal detection system enhanced with Explainable AI (XAI) and dynamic safety protocol generation using camera trap datasets with EfficientNet-B3 and GradCAM for species classification.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "PyTorch", "EfficientNet-B3", "XAI", "GradCAM", "CrewAI", "OpenCV"],
    category: "AI/ML",
    github: "https://github.com/Sarvesh-Kannan/Cam-Trap",
    features: [
      "Species classification with 95%+ accuracy",
      "Explainable AI with GradCAM visualization",
      "Automated safety protocol generation",
      "Real-time monitoring capabilities",
      "HTML/PDF report generation"
    ],
    impact: "Enhances wildlife conservation efforts and human-wildlife conflict mitigation"
  },
  {
    id: 2,
    title: "SarvX - RAG-based Code AI Assistant",
    description: "Privacy-first, RAG-based code assistant combining local LLMs (DeepSeek-R1 via Ollama), CodeT5 embeddings, and Pinecone for intelligent code exploration and assistance.",
    image: "/api/placeholder/400/250",
    technologies: ["JavaScript", "Node.js", "RAG", "LLMs", "Ollama", "Pinecone", "CodeT5"],
    category: "AI/ML",
    github: "https://github.com/Sarvesh-Kannan/SarvX",
    features: [
      "Local LLM integration with DeepSeek-R1",
      "Context-aware code suggestions",
      "Privacy-first architecture",
      "RAG-based knowledge retrieval",
      "Real-time code analysis"
    ],
    impact: "Associated with Zoho Corp - Enhances developer productivity while maintaining privacy"
  },
  {
    id: 3,
    title: "Co-Clone - AI-Powered IDE",
    description: "Flask-based IDE with AI code completion via Ollama, featuring cross-file function refactoring detection using regex pattern matching, AST analysis, and semantic similarity.",
    image: "/api/placeholder/400/250",
    technologies: ["HTML", "Flask", "Python", "Ollama", "AST", "Regex", "AI"],
    category: "DevTools",
    github: "https://github.com/Sarvesh-Kannan/Co-Clone",
    features: [
      "AI-powered code completion",
      "Cross-file refactoring detection",
      "AST-based code analysis",
      "Semantic similarity matching",
      "Real-time collaboration features"
    ],
    impact: "Associated with Zoho Corp - Streamlines development workflow"
  },
  {
    id: 4,
    title: "Strategic HR Analytics Dashboard",
    description: "3-page Strategic HR Analytics Dashboard integrated with a personalized chatbot and hosted as a Flask application for comprehensive workforce insights.",
    image: "/api/placeholder/400/250",
    technologies: ["HTML", "Python", "Flask", "Power BI", "Data Analytics", "Chatbot"],
    category: "Data Products",
    github: "https://github.com/Sarvesh-Kannan/Strategic-HR-Analytics-Dashboard",
    features: [
      "Interactive Power BI dashboards",
      "Integrated AI chatbot",
      "Real-time HR metrics",
      "Predictive analytics",
      "Employee performance tracking"
    ],
    impact: "Associated with Infosys Springboard Internship - Improved HR decision-making"
  },
  {
    id: 5,
    title: "PyUtilKit - Python Utility Package",
    description: "Modular Python utility package offering handy functions for strings, files, math, and lists—boosting productivity, minimizing boilerplate, and enhancing code clarity.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "Package Development", "API Design", "Documentation"],
    category: "DevTools",
    github: "https://github.com/Sarvesh-Kannan/PyUtilKit",
    features: [
      "Comprehensive utility functions",
      "Modular architecture",
      "Extensive documentation",
      "Easy integration",
      "Performance optimized"
    ],
    impact: "Open-source tool used by developers worldwide for productivity enhancement"
  },
  {
    id: 6,
    title: "Personal Trainer AI",
    description: "Personalized Fitness & Diet AI App generating tailored workout and meal plans using user data, AI (DeepSeek-R1 via Ollama), and fitness science with real-time metrics.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "AI", "DeepSeek-R1", "Ollama", "Health Tech", "ML"],
    category: "Healthcare",
    github: "https://github.com/Sarvesh-Kannan/personal-trainer-ai",
    features: [
      "Personalized workout generation",
      "AI-powered meal planning",
      "Real-time health metrics",
      "Progress tracking",
      "Medical data integration"
    ],
    impact: "Democratizes access to personalized fitness guidance"
  },
  {
    id: 7,
    title: "Hybrid Translation Service",
    description: "A Streamlit-based Translation agent powered by Sarvam API, combining Translation Memory (TM) with AI for efficient and accurate translations across 11 Indian languages.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "Streamlit", "Sarvam API", "Translation Memory", "NLTK", "FastAPI"],
    category: "AI/ML",
    github: "https://github.com/Sarvesh-Kannan/translation-agent",
    features: [
      "Hybrid translation approach combining TM and AI",
      "Support for 11 Indian languages",
      "Fuzzy matching for similar text segments",
      "TMX file import/export support",
      "Translation modes: Formal, Colloquial, Classic"
    ],
    impact: "Scalable solution for industries requiring accurate multi-language translation"
  },
  {
    id: 8,
    title: "Gaza Sentiment Analysis",
    description: "Advanced sentiment analysis system using web scraping, GPU-accelerated BERT models, and Explainable AI (LIME) to analyze social media sentiment with comprehensive reporting.",
    image: "/api/placeholder/400/250",
    technologies: ["Python", "BERT", "LIME", "GPU Computing", "Reddit API", "NLP", "Transformers"],
    category: "AI/ML",
    github: "https://github.com/Sarvesh-Kannan/Gaza-Sentiment-Analysis-",
    features: [
      "GPU-accelerated BERT fine-tuning",
      "Web scraping with Reddit API",
      "Explainable AI with LIME",
      "Comprehensive HTML report generation",
      "Topic modeling and entity recognition"
    ],
    impact: "Provides insights into public sentiment on social issues with explainable AI"
  }
];

export const skills = {
  "Programming Languages": [
    { name: "Python", level: 95, icon: "🐍" },
    { name: "TypeScript", level: 88, icon: "🔷" },
    { name: "JavaScript", level: 90, icon: "🟨" },
    { name: "R", level: 82, icon: "📊" }
  ],
  "AI/ML Frameworks": [
    { name: "PyTorch", level: 95, icon: "🔥" },
    { name: "TensorFlow", level: 90, icon: "🧠" },
    { name: "Transformers", level: 93, icon: "🤖" },
    { name: "Scikit-learn", level: 88, icon: "📈" },
    { name: "OpenCV", level: 85, icon: "👁️" }
  ],
  "Web Technologies": [
    { name: "FastAPI", level: 90, icon: "⚡" },
    { name: "Flask", level: 88, icon: "🌶️" },
    { name: "Streamlit", level: 85, icon: "🎯" },
    { name: "Vite.js", level: 82, icon: "⚡" },
    { name: "React", level: 80, icon: "⚛️" }
  ],
  "Data & Analytics": [
    { name: "Pandas", level: 92, icon: "🐼" },
    { name: "NumPy", level: 90, icon: "🔢" },
    { name: "Power BI", level: 85, icon: "📊" },
    { name: "SQL", level: 88, icon: "🗃️" }
  ],
  "Tools & Platforms": [
    { name: "Docker", level: 80, icon: "🐳" },
    { name: "Git", level: 90, icon: "📝" },
    { name: "Ollama", level: 85, icon: "🦙" },
    { name: "Supabase", level: 78, icon: "🔋" }
  ]
};

export const experiences = [
  {
    title: "AI Research Associate",
    company: "Zoho Corporation",
    period: "2024 - Present",
    description: "Developing RAG-based AI assistants and code intelligence tools",
    achievements: [
      "Built SarvX - Privacy-first code assistant with local LLMs",
      "Developed Co-Clone IDE with AI code completion",
      "Implemented advanced RAG pipelines for enterprise use"
    ]
  },
  {
    title: "Data Science Intern",
    company: "Infosys Springboard",
    period: "2024",
    description: "Strategic HR Analytics and Business Intelligence",
    achievements: [
      "Created comprehensive HR analytics dashboard",
      "Integrated AI chatbot for data querying",
      "Improved decision-making efficiency by 40%"
    ]
  },
  {
    title: "AI/ML Research",
    company: "Personal Projects",
    period: "2021 - Present",
    description: "Independent research in AI, sustainability, and healthcare",
    achievements: [
      "Published PyUtilKit - open-source Python package",
      "Developed wildlife conservation AI system",
      "Active stock market trader since 2021"
    ]
  }
];

export const personalInfo = {
  name: "Sarvesh Kannan",
  title: "AI-ML Enthusiast & Full-Stack Developer",
  age: 20,
  location: "Chennai, India",
  timezone: "UTC +05:30",
  email: "sarveshkannan30@gmail.com",
  linkedin: "https://www.linkedin.com/in/sarvesh-kannan/",
  github: "https://github.com/Sarvesh-Kannan",
  education: "B.Tech in AI @ Amrita Vishwa Vidyapeetham",
  interests: [
    { name: "Dinosaurs", icon: "🦕", description: "Fascinated by paleontology and evolution" },
    { name: "Marvel Universe", icon: "⚡", description: "Avid fan of Marvel comics and movies" },
    { name: "Swimming", icon: "🏊", description: "Professional swimmer with competitive experience" },
    { name: "Cricket", icon: "🏏", description: "Active cricket player and sports enthusiast" },
    { name: "Fitness", icon: "💪", description: "Gym enthusiast focused on strength training" },
    { name: "Stock Trading", icon: "📈", description: "Active trader since 2021 with consistent growth" }
  ],
  focusAreas: [
    "Large Language Models (LLMs)",
    "Time Series Analysis",
    "Computer Vision",
    "Retrieval Augmented Generation (RAG)",
    "Explainable AI (XAI)",
    "Natural Language Processing",
    "Reinforcement Learning",
    "Agentic AI Systems"
  ],
  buildingAreas: [
    "AI Tools & Intelligent Agents",
    "Predictive Systems",
    "Sustainability Solutions",
    "Healthcare Technology",
    "Data Products & Analytics",
    "Developer Tools & Utilities"
  ]
};

export const achievements = [
  {
    title: "Open Source Contributor",
    description: "PyUtilKit package with active community usage",
    icon: "🌟"
  },
  {
    title: "Corporate Projects",
    description: "Successfully delivered projects for Zoho Corp and Infosys",
    icon: "🏢"
  },
  {
    title: "AI Research",
    description: "Multiple published projects in AI/ML and sustainability",
    icon: "🔬"
  },
  {
    title: "Trading Success",
    description: "Consistent portfolio growth since 2021",
    icon: "📈"
  }
];

export const testimonials = [
  {
    name: "Zoho Corporation",
    role: "Project Supervisor",
    content: "Sarvesh demonstrated exceptional skills in AI development and delivered innovative solutions for our code intelligence platform.",
    rating: 5
  },
  {
    name: "Infosys Springboard",
    role: "Internship Mentor",
    content: "Outstanding work on HR analytics dashboard. The integration of AI chatbot was particularly impressive.",
    rating: 5
  }
]; 