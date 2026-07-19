import {
  Activity,
  BadgeCheck,
  BarChart3,
  Bot,
  Building2,
  Cloud,
  Code2,
  CloudCog,
  Cpu,
  Factory,
  GraduationCap,
  HeartPulse,
  Landmark,
  Lock,
  Network,
  Rocket,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Truck,
  Workflow,
  Zap
} from "lucide-react";

export const stats = [
  { label: "Projects Delivered", value: "240+" },
  { label: "Happy Clients", value: "96+" },
  { label: "AI Solutions Built", value: "75+" },
  { label: "Years of Experience", value: "9+" }
];

export const services = [
  { title: "AI Agent Development", icon: Bot, text: "Role-aware agents for operations, support, research, sales, and internal workflows." },
  { title: "AI Chatbots", icon: Sparkles, text: "Secure conversational experiences trained on your knowledge and connected to your systems." },
  { title: "Web Development", icon: Code2, text: "High-performance SaaS, portals, dashboards, marketplaces, and customer platforms." },
  { title: "Salesforce Solutions", icon: CloudCog, text: "Custom Salesforce builds, integrations, automation, Lightning apps, and CRM modernization." },
  { title: "Python Development", icon: Cpu, text: "Robust Python services for data pipelines, APIs, ML tooling, and backend automation." },
  { title: "Next.js Applications", icon: Rocket, text: "Production-grade Next.js platforms with excellent SEO, speed, and developer velocity." },
  { title: "Data Analytics", icon: BarChart3, text: "Modern BI, dashboards, metric layers, forecasting, and decision intelligence systems." },
  { title: "Automation", icon: Workflow, text: "Workflow orchestration that reduces manual work across sales, finance, HR, and operations." },
  { title: "Cloud Services", icon: Cloud, text: "Cloud-native architecture, migration, observability, security, and scalable infrastructure." },
  { title: "Enterprise Applications", icon: Building2, text: "Secure internal products, ERP extensions, API platforms, and mission-critical tools." }
];

export const industries = [
  { title: "Healthcare", icon: HeartPulse },
  { title: "Finance", icon: Landmark },
  { title: "Insurance", icon: ShieldCheck },
  { title: "Retail", icon: ShoppingCart },
  { title: "E-commerce", icon: ShoppingCart },
  { title: "Manufacturing", icon: Factory },
  { title: "Logistics", icon: Truck },
  { title: "Education", icon: GraduationCap },
  { title: "Telecom", icon: Network },
  { title: "Real Estate", icon: Building2 },
  { title: "Government", icon: BadgeCheck }
];

export const projects = [
  {
    title: "Autonomous Claims Assistant",
    slug: "claims-assistant",
    category: "Insurance",
    technology: "AI Agents",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    description: "A secure AI agent that triages claims, extracts evidence, and routes exceptions to adjusters.",
    stack: ["Next.js", "Python", "PostgreSQL", "OpenAI"]
  },
  {
    title: "Revenue Intelligence Hub",
    slug: "revenue-intelligence",
    category: "Finance",
    technology: "Data Analytics",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
    description: "Executive BI workspace with forecasting, anomaly detection, and board-ready reporting.",
    stack: ["React", "Prisma", "dbt", "Power BI"]
  },
  {
    title: "Global Commerce Platform",
    slug: "commerce-platform",
    category: "E-commerce",
    technology: "Next.js",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    description: "Composable commerce platform with storefront personalization and Salesforce integration.",
    stack: ["Next.js", "Salesforce", "Stripe", "Vercel"]
  },
  {
    title: "Factory Automation Console",
    slug: "factory-automation",
    category: "Manufacturing",
    technology: "Automation",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80",
    description: "Operations console connecting IoT streams, workforce tasks, alerts, and predictive maintenance.",
    stack: ["Python", "Kafka", "PostgreSQL", "React"]
  }
];

export const reasons = [
  { title: "AI-first approach", icon: Sparkles },
  { title: "Experienced engineers", icon: Code2 },
  { title: "Agile delivery", icon: Zap },
  { title: "Enterprise security", icon: Lock },
  { title: "Modern technology stack", icon: Cpu },
  { title: "Scalable architecture", icon: Activity },
  { title: "Continuous support", icon: BadgeCheck }
];

export const testimonials = [
  {
    name: "Maya Chen",
    role: "COO, HelioCare",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    quote: "Solverstreet Technologies transformed a fragmented support process into an AI-assisted operating system our teams actually love.",
    rating: 5
  },
  {
    name: "Arjun Mehta",
    role: "VP Engineering, FinLayer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    quote: "The architecture was clean from day one. We shipped faster without inheriting technical debt.",
    rating: 5
  },
  {
    name: "Elena Rossi",
    role: "Head of Digital, Meridian Retail",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=300&q=80",
    quote: "Their Salesforce and Next.js team delivered a premium customer experience with measurable revenue impact.",
    rating: 5
  }
];
