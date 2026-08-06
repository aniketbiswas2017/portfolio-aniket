export const profile = {
  name: "Aniket Biswas",
  title: "Senior Angular / Full-Stack Developer",
  location: "Montreal, QC",
  email: "aniketbiswas2017@gmail.com",
  phone: "+1 (902) 414 9427",
  linkedin: "https://www.linkedin.com/in/aniket-biswas-6137ab152/",
  github: "https://github.com/aniketbiswas2017",
  resumeUrl: "/Aniket_Biswas_Resume.pdf",
  summary:
    "Ten+ years building web applications, the last eight inside Angular. Deep specialist in Angular (v2–20+), TypeScript, RxJS and NgRx state architecture, with production full-stack work across Node.js, GraphQL and AWS. Known for taking legacy platforms to modular, accessible, high-performance SPAs, and raising the engineering standard of the teams around them. Now extending into applied AI, learning LLM retrieval pipelines, embeddings, vector search and FastAPI services.",
};

export const stats = [
  { value: "10+", label: "Years Building Web Apps" },
  { value: "8+", label: "Years in Angular" },
  { value: "6", label: "Companies" },
  { value: "5+", label: "Product Teams Served" },
];

export const skills = [
  { tier: "Expert", items: ["Angular (v2–20+)", "TypeScript", "RxJS", "NgRx", "JavaScript ES6+", "HTML5 / CSS3", "WCAG / AODA"] },
  { tier: "Strong", items: ["React", "Node.js", "Express", "GraphQL / REST", "WebSockets", "AWS", "Docker", "CI/CD"] },
  { tier: "Working", items: ["Python", "Java", "C#", "Kubernetes", "Helm", "PostgreSQL", "MongoDB", "Azure", "FastAPI", "LLM Integration"] },
  { tier: "Testing", items: ["Jest", "Jasmine", "Karma", "Cypress", "Selenium", "Testing Library", "TDD"] },
  { tier: "Interface", items: ["Angular Material", "Bootstrap", "D3.js", "Go.js", "Grafana", "Design systems"] },
  { tier: "Tooling", items: ["Git", "Webpack", "Vite", "ESLint", "SonarQube", "Jira", "NGINX"] },
];

export const experience = [
  {
    role: "Senior Application Developer",
    company: "IBM",
    context: "Air Canada Web Application · Halifax, NS",
    period: "Nov 2022 – Present",
    points: [
      "Develop Angular 12–21 components and SPAs for 5+ teams, covering responsive layout, accessibility, and dynamic content injection.",
      "Design NgRx store and effect modules for platform-wide state, caching, error handling and derived selectors.",
      "Ship customer-facing UI on dynamic templates, reactive forms and i18n pipelines, iterating directly with designers and business analysts.",
      "Lead code review, mentor junior developers on RxJS and state design, and uphold test and accessibility standards.",
    ],
  },
  {
    role: "Software Developer",
    company: "Bluelight Analytics",
    context: "Research & Development · Halifax, NS",
    period: "Aug 2020 – Sept 2022",
    points: [
      "Front end: Re-architected a legacy application into a modular, mobile-first SPA on Angular 9–13, WCAG compliant.",
      "State & data: Built GraphQL-powered components on RxJS observables with selective NgRx updates, cutting memory pressure and re-renders.",
      "Architecture: Introduced a feature-driven store pattern isolating business logic per module, letting features ship without cross-team coupling.",
      "Backend & cloud: Deployed and operated infrastructure on AWS (EC2, RDS, S3, Lambda, ECS/EKS) with IAM role control and CI/CD pipelines.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Cisco",
    context: "NextGen DevX Platform / Secure Firewall · Ottawa, ON",
    period: "Sept 2019 – Feb 2020",
    points: [
      "Built Angular and Go.js dashboards for next-generation firewall telemetry and threat visualisation.",
      "Refactored monolithic components to improve scalability across services and cut page load times.",
      "Automated multi-container deployment with Docker Compose, Helm and Kubernetes.",
    ],
  },
  {
    role: "JavaScript Developer",
    company: "Mariner Innovations",
    context: "Co-op · Saint John, NB",
    period: "Jan 2019 – Apr 2019",
    points: [
      "Parsed and visualised telecom network datasets in Grafana through multi-panel operational dashboards.",
      "Built Angular SPAs with Material-based custom components, binding views to live data for network and event tracing.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Tech Mahindra",
    context: "Microsoft Automation, R&D · Hyderabad, India",
    period: "Nov 2015 – June 2017",
    points: [
      "Implemented LUIS and Microsoft Cognitive Services for Cortana and other conversational bots: early production NLP work.",
      "Translated UX wireframes into responsive interfaces using HTML/CSS, Bootstrap, AngularJS and JavaScript.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "SpaceOnix",
    context: "Start-up · Kolkata, India",
    period: "Jan 2014 – Nov 2015",
    points: [
      "Built the end-to-end mobile and web stack, including native Android apps, AJAX-powered forms and admin panels.",
    ],
  },
];

export const projects = [
  {
    name: "Homestead",
    detail: "AI home-buying assistant for Canada. Angular and Node monorepo: affordability engine, listing search, offer tracking.",
    tags: ["Angular", "Node.js"],
    url: "https://github.com/aniketbiswas2017/angular-homestead",
  },
  {
    name: "Market Intelligence Platform",
    detail: "Real-time financial dashboard. Next.js, FastAPI, PyTorch LSTM forecasting, FinBERT sentiment, TimescaleDB.",
    tags: ["Next.js", "FastAPI", "PyTorch"],
    url: "https://github.com/aniketbiswas2017/market-intelligence",
  },
  {
    name: "Moodscape",
    detail: "Angular app reskinning theme, particles, and copy across 6 moods, picked by hand or detected from live weather data.",
    tags: ["Angular"],
    url: "https://github.com/aniketbiswas2017/angular-mood",
  },
  {
    name: "Olympic Medal Predictor",
    detail: "D3.js dashboard correlating medals with GDP, population, and HDI. Machine Learning model at ~70% accuracy.",
    tags: ["D3.js", "ML"],
    url: "https://github.com/aniketbiswas2017/Olympic-Medal-Prediction",
  },
  {
    name: "Global Terrorism Pattern Visualisation",
    detail: "D3.js visualisation of the Global Terrorism Database, 170k+ incidents (1970 to 2016), mapping spatial and temporal attack patterns.",
    tags: ["D3.js"],
    url: "https://github.com/aniketbiswas2017/Visualisation-Terrorism",
  },
  {
    name: "JustPets",
    detail: "Mobile Computing course project: pet services android application with booking, listings, and scheduling.",
    tags: ["Mobile"],
    url: "https://github.com/aniketbiswas2017/JustPetsV.0.2",
  },
];

export const awards = [
  "Winner: MI17 Hackathon and 2018 SolutionScapes",
  "Runner-up: WatsonX Generative AI Challenge, IBM",
  "'Pat on Back' award, Microsoft IBU Head, India",
  "AWS, Microsoft Azure, Gen and Agentic AI certified",
];

export const education = [
  { degree: "Master of Applied Computer Science, MS", school: "Dalhousie University, NS", period: "2017 – 2019" },
  { degree: "Bachelor of Technology (B.Tech), IT", school: "GNIT, India", period: "2011 – 2015" },
];
