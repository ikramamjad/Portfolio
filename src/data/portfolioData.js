// Portfolio data for Ikram Amjad - Computer Engineer | Full-Stack & Backend Developer

export const personalInfo = {
  name: "Ikram Amjad",
  title: "Full-Stack Developer",
  subtitle: "Computer Engineer | Full-Stack Developer | Prompt Engineer",
  tagline: "Building scalable, efficient, and reliable web applications, cloud architectures & AI integrations",
  bio: "Full-Stack Developer with hands-on experience building scalable, efficient, and reliable web applications. Currently working at Cuboid Incorporation as Full Stack Engineer and WebMantis as Back End Developer, with deep focus on Node.js, Express, MongoDB, PostgreSQL, React.js, Redis caching & queues, AWS cloud infrastructure, and prompt engineering.",
  location: "Islamabad, Pakistan",
  email: "ikramamjad10@gmail.com",
  availability: "Active Engineer @ Cuboid & WebMantis",
  linkedin: "https://www.linkedin.com/in/ikram-amjad-8963b4195",
  socials: {
    linkedin: "https://www.linkedin.com/in/ikram-amjad-8963b4195",
    github: "https://github.com/ikram-amjad",
    email: "mailto:ikramamjad10@gmail.com"
  }
};

export const stats = [
  { label: "Engineering Foundation", value: "COMSATS", accent: "cyan" },
  { label: "Active Industry Roles", value: "2", accent: "purple" },
  { label: "Certifications", value: "AWS & Oracle", accent: "green" },
  { label: "Leadership", value: "IEEE PM", accent: "pink" }
];

export const skillsData = [
  // Backend
  { name: "Node.js", category: "Backend", level: 95, color: "#339933", desc: "Event loop, asynchronous architecture, microservices, clustering" },
  { name: "Express.js", category: "Backend", level: 94, color: "#00F0FF", desc: "RESTful APIs, custom middleware pipelines, authentication, routing" },
  { name: "PHP & Laravel", category: "Backend", level: 88, color: "#FF2D20", desc: "Eloquent ORM, MVC pattern, blade engine, backend services" },
  { name: "RESTful APIs", category: "Backend", level: 96, color: "#8B5CF6", desc: "API design, Postman integration testing, payload validation, swagger" },
  { name: "Server Architecture", category: "Backend", level: 92, color: "#39FF14", desc: "High concurrency, modular monolithic & microservices design" },

  // Database & Caching
  { name: "MongoDB", category: "Database", level: 95, color: "#47A248", desc: "MERN stack core, aggregation frameworks, schema modeling, indexing" },
  { name: "PostgreSQL", category: "Database", level: 92, color: "#4169E1", desc: "Relational modeling, complex queries, transactions, foreign keys" },
  { name: "MySQL", category: "Database", level: 91, color: "#00758F", desc: "Relational database management, joins, normalization, stored procedures" },
  { name: "Redis", category: "Database", level: 90, color: "#DC382D", desc: "In-memory caching, message queues, rate limiters, session stores" },

  // Cloud & AI
  { name: "AWS (S3, Lambda)", category: "Cloud & AI", level: 89, color: "#FF9900", desc: "Serverless compute, object storage buckets, IAM policies, cloud architecture" },
  { name: "Prompt Engineering", category: "Cloud & AI", level: 93, color: "#39FF14", desc: "LLM prompt optimization, chain-of-thought, system prompts, AI integrations" },
  { name: "AI & ML Foundations", category: "Cloud & AI", level: 88, color: "#F80000", desc: "AWS & Oracle certified foundations, predictive pipelines, API embeddings" },

  // Frontend
  { name: "React.js", category: "Frontend", level: 93, color: "#00F0FF", desc: "MERN stack frontend, hooks, context API, state management, modern SPAs" },
  { name: "Angular.js", category: "Frontend", level: 86, color: "#DD0031", desc: "Two-way data binding, dependency injection, component structure" },
  { name: "JavaScript / ES6+", category: "Frontend", level: 95, color: "#F7DF1E", desc: "Async/await, closures, functional programming, DOM manipulation" },
  { name: "Three.js / WebGL", category: "Frontend", level: 85, color: "#8B5CF6", desc: "3D interactive scenes, React Three Fiber, shaders, particle systems" },
  { name: "Tailwind CSS", category: "Frontend", level: 92, color: "#38BDF8", desc: "Utility-first modern responsive interfaces, glassmorphism, animations" },

  // Management & Tools
  { name: "Project Management", category: "Leadership", level: 94, color: "#FF007F", desc: "Project Manager at IEEE COMSATS, agile sprint planning, cross-functional delivery" },
  { name: "Git & Version Control", category: "Leadership", level: 92, color: "#F05032", desc: "Branching workflows, code reviews, collaboration, CI/CD integrations" }
];

export const projectsData = [
  {
    id: "mantis-ai-engine",
    title: "WebMantis AI & Backend Engine",
    category: "Backend & AI",
    badge: "Production System",
    description: "High-throughput server-side architecture powering dynamic AI prompt engineering pipelines and automated agent workflows.",
    longDescription: "Developed at WebMantis, this robust backend system leverages Node.js, Express, and Redis queues to process concurrent LLM interactions with optimized prompt templates, sub-second latency caching, and automated fallback logic.",
    tech: ["Node.js", "Express.js", "MongoDB", "Redis", "AWS Lambda", "Prompt Engineering"],
    highlights: [
      "Engineered high-concurrency Node.js REST API with Redis queue caching",
      "Integrated AWS S3 and Lambda for scalable serverless asset pipelines",
      "Implemented comprehensive Postman API test automation suite"
    ],
    liveUrl: "https://www.linkedin.com/in/ikram-amjad-8963b4195",
    githubUrl: "https://www.linkedin.com/in/ikram-amjad-8963b4195",
    color: "#00F0FF",
    stats: { latency: "<35ms", caching: "Redis Tier", status: "Active Production" }
  },
  {
    id: "cuboid-fullstack-suite",
    title: "Cuboid Full Stack Enterprise Platform",
    category: "Full Stack",
    badge: "Flagship Architecture",
    description: "End-to-end full-stack web application orchestrating multi-database connectivity (PostgreSQL & MongoDB) with dynamic React & Angular interfaces.",
    longDescription: "Architected at Cuboid Incorporation, this platform provides seamless real-time enterprise operations. It couples robust relational data modeling in PostgreSQL with fast MERN stack frontend modules, secure JWT authentication, and automated error logging.",
    tech: ["React.js", "Angular.js", "Node.js", "PostgreSQL", "MongoDB", "Tailwind CSS"],
    highlights: [
      "Dual database integration uniting MongoDB flexibility with PostgreSQL relational rigor",
      "Modular frontend components built with React.js and Angular.js",
      "Enterprise authentication with role-based access control (RBAC)"
    ],
    liveUrl: "https://www.linkedin.com/in/ikram-amjad-8963b4195",
    githubUrl: "https://www.linkedin.com/in/ikram-amjad-8963b4195",
    color: "#8B5CF6",
    stats: { uptime: "99.9%", db: "PostgreSQL & Mongo", scale: "Enterprise" }
  },
  {
    id: "aws-redis-pipeline",
    title: "CloudFlow AWS & Redis Microservices",
    category: "Cloud & DevOps",
    badge: "Cloud Architecture",
    description: "Distributed cloud microservice pipeline combining AWS S3, Lambda serverless executions, and Redis pub/sub queues for automated background jobs.",
    longDescription: "A specialized cloud infrastructure setup demonstrating optimal serverless patterns. It processes user file uploads directly to AWS S3, invokes asynchronous Lambda workers, and uses Redis key-value storage for instantaneous distributed state coordination.",
    tech: ["AWS (S3, Lambda)", "Redis", "Node.js", "RESTful APIs", "Postman"],
    highlights: [
      "Serverless event-driven architecture triggered by AWS S3 events",
      "Redis caching layer reducing database read load by over 65%",
      "Thoroughly verified and benchmarked using automated Postman collection runs"
    ],
    liveUrl: "https://www.linkedin.com/in/ikram-amjad-8963b4195",
    githubUrl: "https://www.linkedin.com/in/ikram-amjad-8963b4195",
    color: "#39FF14",
    stats: { cloud: "AWS Serverless", queues: "Redis Pub/Sub", load: "-65% DB" }
  },
  {
    id: "ieee-project-manager-suite",
    title: "IEEE COMSATS Project Command Center",
    category: "Full Stack & Management",
    badge: "Leadership & Tech",
    description: "Centralized project management and event dispatch portal developed to organize technical initiatives, student teams, and engineering competitions.",
    longDescription: "Built during my tenure as Project Manager at IEEE COMSATS. Enabled team coordinators to assign deliverables, track engineering milestones, register participants, and publish real-time notifications to community members.",
    tech: ["MERN Stack", "Express.js", "MongoDB", "React.js", "PHP / Laravel"],
    highlights: [
      "Spearheaded technical development while leading a multidisciplinary team as Project Manager",
      "Managed registration and logistics for large-scale campus technology events",
      "Implemented automated email notifications and attendee tracking"
    ],
    liveUrl: "https://www.linkedin.com/in/ikram-amjad-8963b4195",
    githubUrl: "https://www.linkedin.com/in/ikram-amjad-8963b4195",
    color: "#FF007F",
    stats: { role: "Project Manager", impact: "IEEE Community", stack: "MERN" }
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
