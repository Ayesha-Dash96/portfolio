import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Ayesha Dash — Backend Engineer",
  author: "Ayesha Dash",
  description:
    "Backend Engineer with 4+ years of experience designing and scaling distributed systems. Skilled in Java, Spring Boot, Kafka, and AWS with a track record of delivering resilient microservices, event-driven architectures, and CI/CD automation.",
  lang: "en",
  siteLogo: "/AD_small.jpg",
  navLinks: [
    { text: "Tech Stack", href: "#techstack" },
    { text: "Experience", href: "#experience" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "http://www.linkedin.com/in/ayesha-dash" },
    { text: "Github", href: "https://github.com/Ayesha-Dash96" },
    { text: "Resume", href: "/ayesha-dash-resume.pdf" },
  ],
  socialImage: "/AD.jpg",
  canonicalURL: "https://ayesha-dash.vercel.app/",
};


export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Ayesha Dash",
    specialty: "Backend Engineer",
    summary:
      "I’m a backend engineer with 4.10 years of experience building distributed, fault-tolerant systems in Java, Spring Boot, and Kafka. I specialise in designing microservices, orchestrating event-driven workflows, and deploying resilient cloud-native applications on AWS. I hold an M.Sc. in Advanced Computer Science from the University of York, where I deepened my knowledge of scalable architectures and applied research to real-world system challenges.",
    email: "dashayesha17@gmail.com",
    resumeLink: "/ayesha-dash-resume.pdf",
  },
  techStack: [
  { name: "Java" },
  { name: "Spring Boot" },
  { name: "Kafka" },
  { name: "Redis" },
  { name: "PostgreSQL" },
  { name: "MySQL" },
  { name: "LLM" },
  { name: "AWS ECS" },
  { name: "Docker" },
  { name: "GraphQL" },
  { name: "OAuth2" },
  { name: "JWT" },
  { name: "Prometheus" },
  { name: "Grafana" },
  { name: "Swagger" },
  { name: "Postman" },
  { name: "GitHub Actions" },
  { name: "Jenkins" },
  { name: "CI/CD" },
  { name: "Microservices" },
],

  education: [
  {
    degree: "M.Sc. Advanced Computer Science",
    institution: "University of York",
    year: "2024",
  },
  {
    degree: "B.Tech Electronics & Telecommunications",
    institution: "BPUT",
    year: "2018",
  },
],
  experience: [
    {
      company: "Let Sell Properties",
      position: "Backend Developer (Freelance)",
      startDate: "Jul 2024",
      endDate: "Jul 2025",
      summary: [
        "At Let Sell Properties, I was responsible for designing the backend infrastructure of a property booking platform. I built and deployed REST APIs in Java and Spring Boot, ensuring that property listings, bookings, and messaging features worked seamlessly under growing traffic.",
        "To handle scale, I optimised MySQL queries and introduced Redis caching, enabling the platform to handle over a thousand daily API calls without performance bottlenecks.",
        "I set up Kafka-driven workflows to deliver real-time updates for appointments and listings, which brought a more dynamic and engaging experience for users.",
        "On top of that, I integrated Google Maps and Calendar APIs, significantly reducing booking conflicts and improving scheduling reliability.",
        "One of the more exciting aspects of this project was experimenting with generative AI to personalise property recommendations. This feature increased user engagement and gave the platform a competitive edge.",
        "This freelance engagement was end-to-end — from architecting APIs to documenting endpoints with Swagger and testing with Postman — ultimately delivering a full-stack system that was resilient, user-friendly, and AI-enhanced.",
      ],
    },
    {
      company: "Accenture",
      position: "Software Engineer II",
      startDate: "Mar 2021",
      endDate: "Sep 2022",
      summary: [
        "During my time at Accenture, I contributed to building distributed services for a large-scale insurance claims platform. The challenge was balancing throughput with reliability in a system that handled sensitive financial data.",
        "I built and deployed microservices on AWS ECS, designed event pipelines with Kafka, and implemented Redis caching to accelerate fraud detection workflows that processed hundreds of scoring events daily.",
        "Security was a core focus. I enhanced authentication by implementing OAuth2 and JWT, which streamlined logins and reduced errors across clients.",
        "To optimise data fetching, I introduced GraphQL, cutting down unnecessary round-trips and improving performance for client applications.",
        "I also worked extensively on observability — configuring ELK stack for root-cause analysis and building Prometheus + Grafana dashboards to track system health. These measures reduced incident recovery times by nearly a third.",
        "This experience sharpened my ability to design event-driven workflows and instil operational resilience in high-throughput systems.",
      ],
    },
    {
      company: "Capgemini",
      position: "Senior Software Engineer",
      startDate: "Nov 2018",
      endDate: "Mar 2021",
      summary: [
        "At Capgemini, I worked on a policy administration system that covered everything from quote generation to billing and policy issuance.",
        "I developed APIs in Java and Spring Boot to streamline insurance quote and payment processes, cutting average response times by more than a third.",
        "To modernise billing, I integrated Stripe for payments and e-signature services for digital policy delivery, significantly improving customer experience.",
        "Behind the scenes, I fine-tuned PostgreSQL queries used in underwriting modules, boosting system throughput and making day-to-day operations faster.",
        "I also built notification services to improve overdue payment collection and introduced monitoring pipelines with Prometheus and Grafana to resolve integration issues faster.",
        "This role gave me my grounding in backend systems, payments, and process automation — a foundation that shaped my later focus on distributed and event-driven systems.",
      ],
    },
  ],
  about: {
    description: `
      Hi, I’m Ayesha Dash — a backend engineer who thrives on solving complex engineering challenges with clean, scalable, and resilient solutions.

      Over the years, I’ve built systems across domains like property tech, insurance, and financial services. The common thread is scale: ensuring services are fault-tolerant, observable, and ready to evolve as demands grow. Whether it’s tuning Kafka partitions, designing CI/CD pipelines, or orchestrating microservices across multiple databases, I enjoy translating architectural vision into production-ready systems.

      My approach combines deep technical execution with a focus on user impact. For example, optimising a query isn’t just about performance — it’s about ensuring a customer gets their quote in seconds, or their booking goes through without a hiccup. That mindset of aligning engineering detail with real-world value drives the way I work.

      With an M.Sc. from the University of York and industry experience spanning startups to global consultancies, I bring both academic rigour and practical know-how. I’m always looking to push boundaries — whether through experimenting with AI-powered recommendations, refining event-driven workflows, or making cloud-native systems more resilient and observable.
    `,
    image: "/AD.jpg",
  },
};
// #5755ff
