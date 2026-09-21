// Portfolio data for Ikram Amjad - Computer Engineer & Full-Stack Engineer

export const personalInfo = {
  name: "Ikram Amjad",
  title: "Computer Engineer & Full-Stack Engineer",
  subtitle: "Computer Engineer | Full-Stack Engineer | Prompt Engineer",
  tagline: "Building scalable, high-throughput web applications, robust database architectures & intelligent AI prompt pipelines",
  bio: "Computer Engineer and Full-Stack Engineer with hands-on experience building scalable, efficient, and reliable web applications. Currently working at Cuboid Incorporation as Full Stack Engineer and WebMantis as Back End Developer, with deep focus on MongoDB, MERN Stack, Express.js, MySQL, PostgreSQL, Next.js, React.js, Angular.js, Node.js, PHP, Laravel, and Prompt Engineering.",
  location: "Islamabad, Pakistan",
  email: "ikramamjad10@gmail.com",
  availability: "Active Engineer @ Cuboid & WebMantis",
  linkedin: "https://www.linkedin.com/in/ikram-amjad-8963b4195",
  socials: {
    linkedin: "https://www.linkedin.com/in/ikram-amjad-8963b4195",
    github: "https://github.com/ikramamjad",
    email: "mailto:ikramamjad10@gmail.com"
  }
};

export const coreStacks = [
  { name: "MERN Stack", category: "Full-Stack", badge: "Full-Stack Architecture", color: "#00F0FF", desc: "MongoDB, Express.js, React.js, Node.js unified end-to-end production web applications" },
  { name: "Next.js", category: "Full-Stack", badge: "React Framework", color: "#FFFFFF", desc: "Server-side rendering (SSR), App Router, server actions & hybrid rendering" },
  { name: "PostgreSQL", category: "Databases", badge: "Relational DB", color: "#4169E1", desc: "ACID compliance, complex querying, transaction isolation & relational modeling" },
  { name: "MySQL", category: "Databases", badge: "Relational DB", color: "#00758F", desc: "Relational database management, joins, schema normalization & stored procedures" },
  { name: "Laravel", category: "Backend", badge: "PHP Framework", color: "#FF2D20", desc: "Eloquent ORM, Artisan CLI, REST services, database migrations & MVC architecture" },
  { name: "PHP", category: "Backend", badge: "Server Scripting", color: "#777BB4", desc: "Server-side scripting, MVC design patterns, API endpoints & backend services" },
  { name: "Angular.js", category: "Frontend", badge: "Frontend Framework", color: "#DD0031", desc: "Two-way data binding, dependency injection & structured enterprise UI components" },
  { name: "Redis", category: "Databases", badge: "In-Memory Cache", color: "#DC382D", desc: "In-memory caching, message queues, rate limiters, session stores & high throughput" },
  { name: "Prompt Engineer", category: "AI & LLM", badge: "Generative AI", color: "#39FF14", desc: "LLM prompt optimization, chain-of-thought, system prompt steering & AI agents" },
];

export const stats = [
  { label: "Core Tech Stacks", value: "8+", accent: "cyan" },
  { label: "Active Roles", value: "2", accent: "purple" },
  { label: "Engineering Degree", value: "COMSATS", accent: "green" },
  { label: "Leadership", value: "IEEE PM", accent: "pink" }
];

export const skillsData = [
  // Backend
  { name: "Laravel", category: "Backend", level: 90, color: "#FF2D20", desc: "Eloquent ORM, MVC pattern, Artisan CLI, REST services" },
  { name: "PHP", category: "Backend", level: 88, color: "#777BB4", desc: "Server-side scripting, OOP architecture, database integrations" },
  { name: "RESTful APIs", category: "Backend", level: 96, color: "#8B5CF6", desc: "API design, Postman integration testing, payload validation, swagger" },
  { name: "Server Architecture", category: "Backend", level: 92, color: "#39FF14", desc: "High concurrency, modular monolithic & microservices design" },

  // Database & Caching
  { name: "PostgreSQL", category: "Database", level: 92, color: "#4169E1", desc: "Relational modeling, complex queries, transactions, foreign keys" },
  { name: "MySQL", category: "Database", level: 91, color: "#00758F", desc: "Relational database management, joins, normalization, stored procedures" },
  { name: "Redis", category: "Database", level: 90, color: "#DC382D", desc: "In-memory caching, message queues, rate limiters, session stores" },

  // Cloud & AI
  { name: "Prompt Engineering", category: "Cloud & AI", level: 95, color: "#39FF14", desc: "LLM prompt optimization, chain-of-thought, system prompts, AI integrations" },
  { name: "AWS (S3, Lambda)", category: "Cloud & AI", level: 89, color: "#FF9900", desc: "Serverless compute, object storage buckets, IAM policies, cloud architecture" },
  { name: "AI & ML Foundations", category: "Cloud & AI", level: 88, color: "#F80000", desc: "AWS & Oracle certified foundations, predictive pipelines, API embeddings" },

  // Frontend & Full-Stack
  { name: "MERN Stack", category: "Frontend", level: 96, color: "#00F0FF", desc: "MongoDB, Express.js, React.js, Node.js unified full-stack architecture" },
  { name: "Next.js", category: "Frontend", level: 92, color: "#FFFFFF", desc: "Server-side rendering, App Router, hybrid static/server apps, API routes" },
  { name: "Angular.js", category: "Frontend", level: 86, color: "#DD0031", desc: "Two-way data binding, dependency injection, component structure" },
  { name: "JavaScript / ES6+", category: "Frontend", level: 95, color: "#F7DF1E", desc: "Async/await, closures, functional programming, DOM manipulation" },
  { name: "Tailwind CSS", category: "Frontend", level: 92, color: "#38BDF8", desc: "Utility-first modern responsive interfaces, glassmorphism, animations" },

  // Management & Tools
  { name: "Project Management", category: "Leadership", level: 94, color: "#FF007F", desc: "Project Manager at IEEE COMSATS, agile sprint planning, cross-functional delivery" },
  { name: "Git & Version Control", category: "Leadership", level: 92, color: "#F05032", desc: "Branching workflows, code reviews, collaboration, CI/CD integrations" }
];

export const projectsData = [
  {
    id: "road-accident-detection",
    title: "Road Accident Detection System",
    category: "Computer Vision & AI",
    badge: "Computer Vision & AI",
    description: "End-to-end real-time road accident detection analyzing live video feeds and RTSP streams to detect collisions, falls, and trajectory kinematics.",
    longDescription: "An end-to-end multi-modal road accident detection system that analyzes live traffic video feeds and camera streams in real time. Combines spatial object detection, persistent tracking, human skeletal posture analysis, and strictly causal temporal sequence modeling to reliably detect accidents.",
    tech: ["Python", "PyTorch", "OpenCV", "Computer Vision", "YOLO", "Kinematics"],
    highlights: [
      "Real-time RTSP camera stream ingestion and video frame parsing",
      "Multi-modal fusion combining spatial detection, skeletal posture, and trajectory kinematics",
      "Strictly causal temporal sequence modeling to eliminate false positives"
    ],
    liveUrl: "https://github.com/ikramamjad/Road-Accident-Detection",
    githubUrl: "https://github.com/ikramamjad/Road-Accident-Detection",
    image: "/thumbnails/road-accident-detection.jpg",
    color: "#00F0FF",
    stats: { model: "YOLO + Kinematics", latency: "Real-Time RTSP", type: "Computer Vision" }
  },
  {
    id: "ai-interview",
    title: "AI Interview & Proctoring Platform",
    category: "Full-Stack AI & Next.js",
    badge: "Interactive AI Suite",
    description: "Next.js 16, React 19, and Three.js AI-driven interview and automated proctoring platform with Express & Prisma backend.",
    longDescription: "A cutting-edge interactive platform delivering automated AI interview simulations and proctoring. Features 3D holographic digital interviewer meshes powered by Three.js, real-time candidate emotion and gaze tracking, and an automated Express.js backend with Prisma ORM.",
    tech: ["Next.js", "React 19", "Three.js", "Node.js", "Prisma", "Express.js", "Tailwind CSS"],
    highlights: [
      "Interactive 3D digital human interviewer interface built with Three.js and React 19",
      "Full-stack Next.js 16 App Router paired with scalable Express and Prisma database service",
      "Automated audio speech analysis, proctoring alerts, and candidate evaluation metrics"
    ],
    liveUrl: "https://github.com/ikramamjad/AI-interview",
    githubUrl: "https://github.com/ikramamjad/AI-interview",
    image: "/thumbnails/ai-interview.jpg",
    color: "#8B5CF6",
    stats: { stack: "Next.js 16 & Three.js", db: "Prisma ORM", ai: "Live Proctoring" }
  },
  {
    id: "food",
    title: "Food Delivery & Ordering API",
    category: "Backend & REST API",
    badge: "RESTful Microservice",
    description: "Production-ready food ordering and delivery REST API engineered with Node.js, Express, and MongoDB with secure JWT authentication.",
    longDescription: "Robust server-side REST API application designed for high-concurrency food ordering workflows. Implements secure JWT authentication, role management (customers, vendors, admins), shopping cart state validation, and end-to-end order status transitions.",
    tech: ["Node.js", "Express.js", "MongoDB", "Mongoose", "JWT Auth", "RESTful APIs"],
    highlights: [
      "Robust JWT token authentication with role-based access control (RBAC)",
      "High-efficiency MongoDB schema design with Mongoose models and indexing",
      "Modular controller design handling menu items, shopping carts, and order dispatch"
    ],
    liveUrl: "https://github.com/ikramamjad/food",
    githubUrl: "https://github.com/ikramamjad/food",
    image: "/thumbnails/food.jpg",
    color: "#FF9900",
    stats: { arch: "Express & Node.js", db: "MongoDB / Mongoose", auth: "JWT Secure" }
  },
  {
    id: "shop-sphere",
    title: "ShopSphere E-Commerce Backend",
    category: "E-Commerce & FinTech",
    badge: "FinTech Platform",
    description: "Comprehensive e-commerce backend platform with role-based product catalog management, JWT authentication, and Stripe PaymentIntents integration.",
    longDescription: "An enterprise-grade e-commerce backend service built with Node.js, Express, and MongoDB. Features secure Stripe PaymentIntents integration for smooth online payments, role-protected admin catalog management, user order histories, and automated payment verification.",
    tech: ["Node.js", "Express.js", "MongoDB", "Stripe API", "JWT", "RESTful APIs"],
    highlights: [
      "Stripe PaymentIntents integration for PCI-compliant checkout and order fulfillment",
      "Admin role-based access control for dynamic product additions, updates, and removals",
      "Robust input validation, middleware error handling, and transactional consistency"
    ],
    liveUrl: "https://github.com/ikramamjad/Shop-Sphere",
    githubUrl: "https://github.com/ikramamjad/Shop-Sphere",
    image: "/thumbnails/shop-sphere.jpg",
    color: "#38BDF8",
    stats: { payments: "Stripe API", db: "MongoDB NoSQL", security: "JWT & RBAC" }
  },
  {
    id: "ride-sharing",
    title: "Ride-Sharing Mobility Platform",
    category: "Full-Stack Mobility",
    badge: "On-Demand Mobility",
    description: "On-demand ride-hailing mobility service architecture inspired by Uber and InDrive, featuring ride booking and geospatial matching.",
    longDescription: "Engineered to deliver high-availability mobility services. Implements passenger ride booking, geospatial proximity algorithms for nearest driver allocation, dynamic fare calculation across vehicle tiers, and real-time ride state transitions.",
    tech: ["Node.js", "Express.js", "MongoDB", "Geospatial", "REST API", "Real-Time Tracking"],
    highlights: [
      "Geospatial driver-rider matchmaking algorithms for instant trip dispatch",
      "Dynamic fare estimation matrix supporting Economy and Comfort tiers",
      "End-to-end trip status lifecycle from booking request to completion"
    ],
    liveUrl: "https://github.com/ikramamjad/Ride-Sharing",
    githubUrl: "https://github.com/ikramamjad/Ride-Sharing",
    image: "/thumbnails/ride-sharing.jpg",
    color: "#10B981",
    stats: { model: "On-Demand Mobility", geo: "Geospatial Matching", dispatch: "Real-Time State" }
  }
];

export const timelineData = [
  {
    year: "DEC 2025 — PRESENT",
    role: "Full Stack Engineer",
    company: "Cuboid Incorporation",
    location: "Abbottabad District, Pakistan",
    period: "December 2025 — Present",
    type: "Full-Time",
    description: "Architecting end-to-end full-stack applications, designing scalable backend endpoints, and integrating modern React & Angular frontend modules with high-efficiency databases.",
    skills: ["Full Stack", "React.js", "Angular.js", "Node.js", "PostgreSQL", "MongoDB"],
    achievements: [
      "Engineered comprehensive full-stack features connecting frontend views with secure REST microservices",
      "Designed optimized PostgreSQL relational models and MongoDB schemas for high-speed retrieval",
      "Collaborated on seamless integration of modern prompt engineering and UI workflows"
    ]
  },
  {
    year: "AUG 2024 — PRESENT",
    role: "Back End Developer",
    company: "WebMantis",
    location: "Islamabad, Pakistan",
    period: "August 2024 — Present",
    type: "Full-Time",
    description: "Developing scalable, efficient, and reliable server-side applications with strong emphasis on prompt engineering, Redis caching, AWS cloud integration, and microservices.",
    skills: ["Node.js", "Express.js", "MongoDB", "Redis", "AWS (S3, Lambda)", "Prompt Engineering"],
    achievements: [
      "Constructed reliable backend APIs with Node.js and Express for core product features",
      "Architected Redis caching and queue systems for accelerated response times",
      "Implemented cloud file processing pipelines utilizing AWS S3 and serverless Lambda functions",
      "Pioneered prompt engineering workflows integrating cutting-edge LLM capabilities"
    ]
  },
  {
    year: "MAR 2023 — AUG 2025",
    role: "Site Engineer",
    company: "FULMEN ENGINEERING (PVT) LTD",
    location: "Pakistan",
    period: "March 2023 — August 2025",
    type: "Full-Time",
    description: "Coordinated technical site operations, engineering system verifications, cross-functional execution, and adherence to rigorous safety and design specifications.",
    skills: ["Site Engineering", "Systems Operations", "Technical Coordination", "Quality Control"],
    achievements: [
      "Managed on-site technical compliance across extensive engineering installations",
      "Supervised technical personnel and bridged communication between engineering teams and stakeholders",
      "Resolved complex on-site technical bottlenecks ensuring timely milestones delivery"
    ]
  },
  {
    year: "JUL 2022 — APR 2024",
    role: "Sales Manager",
    company: "Amazon",
    location: "Pakistan",
    period: "July 2022 — April 2024",
    type: "Full-Time",
    description: "Directed e-commerce operations, analytics-driven growth strategies, client relationships, and inventory performance in high-velocity marketplace environments.",
    skills: ["E-Commerce", "Operations", "Client Relations", "Analytics", "Inventory Management"],
    achievements: [
      "Drove measurable sales growth through data-backed product listing optimization and market analysis",
      "Managed international buyer communications and ensured superior customer satisfaction metrics",
      "Strengthened negotiation, team coordination, and strategic problem-solving skills"
    ]
  },
  {
    year: "PROJECT MANAGER",
    role: "Project Manager",
    company: "IEEE COMSATS",
    location: "COMSATS Abbottabad",
    period: "Leadership Tenure",
    type: "Leadership",
    description: "Led engineering teams and managed student technology initiatives, fostering collaboration, community outreach, and technical event execution.",
    skills: ["Project Management", "Leadership", "Team Coordination", "Public Speaking"],
    achievements: [
      "Led cross-functional project teams through planning, execution, and delivery phases",
      "Organized major university technical workshops, seminars, and hackathons",
      "Awarded recognition for excellence in student leadership and community service"
    ]
  },
  {
    year: "2020 — 2024",
    role: "Electrical & Computer Engineering",
    company: "COMSATS Institute of Information Technology Abbottabad",
    location: "Abbottabad, Pakistan",
    period: "January 2020 — July 2024",
    type: "Education",
    description: "Completed rigorous bachelor's engineering degree in Electrical and Computer Engineering. Mastered computer systems, software engineering, digital logic, networks, and database design.",
    skills: ["Computer Engineering", "Data Structures", "Database Systems", "Software Architecture", "Operating Systems"],
    achievements: [
      "Comprehensive engineering degree grounding in software, hardware, and algorithms",
      "Active leader in university technical societies including IEEE COMSATS",
      "Earned foundational certifications in AI & Machine Learning from AWS and Oracle"
    ]
  }
];

export const certificationsData = [
  {
    title: "AWS Machine Learning & Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    badge: "Cloud & AI",
    desc: "Certified foundations in cloud infrastructure, AWS S3, Lambda, and core machine learning paradigms."
  },
  {
    title: "Oracle AI & Cloud Foundations",
    issuer: "Oracle",
    badge: "Enterprise AI",
    desc: "Foundations in enterprise cloud architecture, machine learning pipelines, and database reliability."
  },
  {
    title: "Prompt Engineering Foundations",
    issuer: "Specialized Certification",
    badge: "Generative AI",
    desc: "Advanced techniques in prompt design, chain-of-thought, system instructions, and LLM application orchestration."
  }
];
