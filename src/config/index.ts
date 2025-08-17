import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Ayesha Dash — Backend Engineer & Distributed Systems Specialist",
  author: "Ayesha Dash",
  description:
    "Backend Engineer with 4+ years of experience in Java, Spring Boot, Kafka, and AWS. Specialized in building scalable microservices, event-driven systems, and CI/CD automation.",
  lang: "en",
  siteLogo: "/AD_small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "http://www.linkedin.com/in/ayesha-dash" },
    { text: "Github", href: "https://github.com/Ayesha-Dash96" }, 
  ],
 socialImage: "/AD.jpg",
  canonicalURL: "https://ayesha-dash.vercel.app/",
};
export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Ayesha Dash",
    specialty: "Backend Engineer & Distributed Systems Specialist",
    summary:
      "Backend Engineer with 4.10 years of experience in Java, Spring Boot, Kafka, and AWS. Skilled in building scalable microservices, event-driven systems, and CI/CD pipelines. Holds an M.Sc. in Advanced Computer Science from the University of York.",
    email: "dashayesha17@gmail.com",
  },
  experience: [
    {
      company: "Let Sell Properties",
      position: "Backend Developer (Freelance)",
      startDate: "Jul 2024",
      endDate: "Jul 2025",
      summary: [
        "Built REST APIs using Java and Spring Boot for property listings and bookings, handling 100+ daily requests.",
        "Optimized MySQL queries and implemented Redis caching to support 1,000+ daily API calls.",
        "Configured Kafka to process 200+ daily events for real-time updates on appointments and listings.",
        "Integrated Google Maps and Calendar APIs to reduce booking conflicts by 25%.",
        "Trained a generative AI model for personalized property recommendations, improving engagement by 15%.",
        "Documented 30+ endpoints with Swagger and validated functionality using Postman.",
      ],
    },
    {
      company: "Accenture",
      position: "Software Engineer II",
      startDate: "Mar 2021",
      endDate: "Sep 2022",
      summary: [
        "Built distributed services for insurance claims using Java and Spring Boot, deployed on AWS ECS.",
        "Integrated Kafka pipelines and Redis for fraud detection workflows handling 600+ scoring events daily.",
        "Secured authentication with OAuth2 and JWT, reducing login errors by 15%.",
        "Implemented GraphQL for optimized data fetching and used ELK Stack for root-cause analysis.",
        "Monitored system health with Prometheus and Grafana, reducing incident recovery time by 30%.",
      ],
    },
    {
      company: "Capgemini",
      position: "Senior Software Engineer",
      startDate: "Nov 2018",
      endDate: "Mar 2021",
      summary: [
        "Developed REST APIs for quote and payment processing, reducing response time by 35%.",
        "Integrated Stripe for automated billing and e-signature APIs for digital policy delivery.",
        "Optimized PostgreSQL queries for underwriting, improving throughput by 20%.",
        "Built notification systems for overdue payments, improving collection rates by 10%.",
        "Resolved 30+ integration issues with payment gateways and risk scorers using Prometheus and Grafana.",
      ],
    },
  ],
  projects: [
    {
      name: "Property Booking Platform",
      summary: "A real estate platform with booking, messaging, and AI-powered recommendations.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen", // Replace with your actual repo
      image: "/property.jpg",
    },
    {
      name: "Insurance Claims Engine",
      summary: "A distributed backend system for fraud detection and claims processing.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/claims.jpg",
    },
    {
      name: "Policy Administration System",
      summary: "A quote-to-policy issuance platform with billing and document automation.",
      linkPreview: "/",
      linkSource: "https://github.com/immois/astro-zen",
      image: "/policy.jpg",
    },
  ],
  about: {
    description: `
      Hi, I’m Ayesha Dash, a backend engineer with a passion for building resilient, high-performance systems. With hands-on experience in distributed architectures, event-driven workflows, and cloud-native deployments, I specialize in solving complex engineering challenges.

      My work spans property platforms, insurance engines, and real-time data pipelines—each built with a focus on scalability, security, and operational excellence. Whether it's Kafka partitioning, CI/CD automation, or multi-database orchestration, I thrive on turning architectural vision into production-grade reality.
    `,
    image: "/AD.jpg",
  },
};
// #5755ff
