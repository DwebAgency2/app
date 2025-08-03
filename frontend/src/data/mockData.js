// Mock data for the portfolio website

export const projects = [
  {
    id: 1,
    title: "EcoShop Marketplace",
    description: "A full-featured e-commerce platform built with the MERN stack. Features include user authentication, payment processing, inventory management, and real-time order tracking.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe API", "JWT"],
    liveUrl: "https://ecoshop-demo.com",
    githubUrl: "https://github.com/yourname/ecoshop",
    category: "Full-Stack"
  },
  {
    id: 2,
    title: "TaskFlow Pro",
    description: "A comprehensive project management application with real-time collaboration features. Built with Next.js and includes drag-and-drop functionality, team chat, and advanced analytics.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io", "Tailwind CSS"],
    liveUrl: "https://taskflow-pro.com",
    githubUrl: "https://github.com/yourname/taskflow-pro",
    category: "Full-Stack"
  },
  {
    id: 3,
    title: "ChatConnect",
    description: "Real-time messaging application with voice/video calling capabilities. Features end-to-end encryption, file sharing, and group chat functionality.",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "Socket.io", "WebRTC", "Redis", "AWS S3"],
    liveUrl: "https://chatconnect-app.com",
    githubUrl: "https://github.com/yourname/chatconnect",
    category: "Full-Stack"
  },
  {
    id: 4,
    title: "API Gateway Hub",
    description: "A scalable API marketplace where developers can publish and monetize their APIs. Built with FastAPI and includes rate limiting, analytics, and automated billing.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    technologies: ["FastAPI", "React", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    liveUrl: "https://api-gateway-hub.com",
    githubUrl: "https://github.com/yourname/api-gateway",
    category: "Backend"
  },
  {
    id: 5,
    title: "FinTracker Dashboard",
    description: "Personal finance management dashboard with advanced data visualization and automated expense categorization using machine learning.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Vue.js", "Python", "Django", "PostgreSQL", "Chart.js", "TensorFlow"],
    liveUrl: "https://fintracker-dashboard.com",
    githubUrl: "https://github.com/yourname/fintracker",
    category: "Full-Stack"
  },
  {
    id: 6,
    title: "DevTools CLI",
    description: "A powerful command-line tool for developers that automates common development tasks, project scaffolding, and deployment workflows.",
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=600&h=400&fit=crop",
    technologies: ["Node.js", "TypeScript", "Commander.js", "Inquirer.js", "Docker"],
    githubUrl: "https://github.com/yourname/devtools-cli",
    category: "Backend"
  }
];

export const skills = {
  frontend: [
    { name: "React", level: 95 },
    { name: "Next.js", level: 90 },
    { name: "Vue.js", level: 85 },
    { name: "TypeScript", level: 92 },
    { name: "Tailwind CSS", level: 88 },
    { name: "HTML/CSS", level: 95 }
  ],
  backend: [
    { name: "Node.js", level: 94 },
    { name: "Python", level: 90 },
    { name: "FastAPI", level: 88 },
    { name: "Express.js", level: 92 },
    { name: "Django", level: 85 },
    { name: "GraphQL", level: 80 }
  ],
  database: [
    { name: "MongoDB", level: 90 },
    { name: "PostgreSQL", level: 88 },
    { name: "Redis", level: 85 },
    { name: "MySQL", level: 82 }
  ],
  tools: [
    { name: "Docker", level: 87 },
    { name: "AWS", level: 85 },
    { name: "Git", level: 95 },
    { name: "Kubernetes", level: 80 },
    { name: "Jenkins", level: 75 },
    { name: "Linux", level: 88 }
  ]
};

export const services = [
  {
    title: "Full-Stack Development",
    description: "End-to-end web application development using modern technologies like React, Node.js, and cloud platforms.",
    features: [
      "Custom web applications",
      "API development & integration",
      "Database design & optimization",
      "Cloud deployment & scaling"
    ],
    icon: "Code"
  },
  {
    title: "Frontend Development",
    description: "Creating responsive, interactive user interfaces that provide exceptional user experiences across all devices.",
    features: [
      "React & Next.js applications",
      "Mobile-responsive design",
      "Performance optimization",
      "SEO implementation"
    ],
    icon: "Palette"
  },
  {
    title: "Backend Development",
    description: "Building robust server-side applications with secure APIs, efficient databases, and scalable architecture.",
    features: [
      "RESTful API development",
      "Database architecture",
      "Authentication systems",
      "Third-party integrations"
    ],
    icon: "Server"
  },
  {
    title: "Technical Consulting",
    description: "Providing expert guidance on technology stack selection, architecture planning, and development best practices.",
    features: [
      "Technology stack selection",
      "Architecture planning",
      "Code review & optimization",
      "Team mentoring"
    ],
    icon: "Users"
  }
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStartup Inc.",
    content: "Working with this developer was exceptional. They delivered a complex e-commerce platform that exceeded our expectations. The attention to detail and technical expertise is outstanding.",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "CTO, DataFlow Solutions",
    content: "The API gateway they built for us handles millions of requests daily without any issues. Their deep understanding of scalable architecture is impressive.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager, InnovateNow",
    content: "They transformed our complex requirements into an intuitive, powerful dashboard. The project was delivered on time and the communication was excellent throughout.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5
  },
  {
    name: "David Kumar",
    role: "Founder, FinanceApp",
    content: "The real-time features they implemented in our finance app are game-changing. Their expertise in both frontend and backend development is remarkable.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications: Best Practices for 2024",
    excerpt: "Learn the latest techniques for creating maintainable and performant React applications that can scale with your business needs.",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
    tags: ["React", "JavaScript", "Performance"]
  },
  {
    id: 2,
    title: "Microservices Architecture: When and How to Implement",
    excerpt: "A comprehensive guide to understanding microservices architecture, its benefits, challenges, and implementation strategies.",
    date: "2024-01-08",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400&h=250&fit=crop",
    tags: ["Architecture", "Backend", "Microservices"]
  },
  {
    id: 3,
    title: "Database Optimization Techniques for High-Traffic Applications",
    excerpt: "Explore advanced database optimization strategies to handle millions of requests while maintaining fast response times.",
    date: "2024-01-01",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=400&h=250&fit=crop",
    tags: ["Database", "Performance", "Optimization"]
  }
];