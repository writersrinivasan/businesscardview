/**
 * ============================================================
 *  YOUR DIGITAL BUSINESS CARD — SINGLE SOURCE OF TRUTH
 * ============================================================
 *  Edit everything about your card here. Nothing else needs
 *  to change. Replace the values below with your real details,
 *  then re-run / re-deploy.
 * ============================================================
 */

export type SocialLink = {
  label: string;
  /** Full URL, e.g. https://instagram.com/yourhandle */
  url: string;
  /** Icon key — see ICONS in src/components/Icon.tsx */
  icon: SocialIcon;
};

export type SocialIcon =
  | "instagram"
  | "linkedin"
  | "twitter"
  | "facebook"
  | "youtube"
  | "whatsapp"
  | "github"
  | "tiktok"
  | "website"
  | "email"
  | "phone";

export type Product = {
  name: string;
  description: string;
  /** Optional price label, e.g. "From ₹4,999" */
  price?: string;
  /** Optional link to a product/service page or booking */
  url?: string;
  /** Emoji or short tag shown on the card */
  badge?: string;
};

export type CardConfig = {
  /** Used for absolute links, QR codes, and share URL. No trailing slash. */
  siteUrl: string;

  profile: {
    name: string;
    title: string;
    tagline: string;
    /** Path in /public, e.g. "/avatar.png". Leave "" to show initials. */
    avatar: string;
    /** Accent color used across the theme */
    accent: string;
    accentSoft: string;
  };

  company: {
    name: string;
    website: string;
    description: string;
    location: string;
    email: string;
    phone: string;
  };

  socials: SocialLink[];
  products: Product[];
};

export const card: CardConfig = {
  siteUrl: "https://oneyoto.in",

  profile: {
    name: "Srinivasan Ramanujam",
    title: "GenAI & Agentic AI Consultant · Founder, One Yoto",
    tagline:
      "25+ years in software engineering. I build production Agentic AI systems and train the teams that run them. 40,000+ professionals & 1,000+ educators trained globally.",
    avatar: "/avatar.png",
    /** Brand amber/gold from the One Yoto logo */
    accent: "#f5a800",
    accentSoft: "#fff4d6",
  },

  company: {
    name: "One Yoto (An Agentic AI Product Development Company)",
    website: "https://oneyoto.in",
    description:
      "We design and ship production Agentic AI systems — multi-agent pipelines (LangGraph, CrewAI), RAG architectures, and enterprise search (Azure AI Search) — and train the teams that run them. Most AI projects fail on execution, not technology; we build both the system and the team.",
    location: "Chennai, Tamil Nadu, India",
    email: "srinivasan@oneyoto.in",
    phone: "+91-8056010125",
  },

  socials: [
    { label: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/in/writersrinivasan" },
    { label: "Instagram", icon: "instagram", url: "https://www.instagram.com/writersrinivasan/" },
    { label: "Facebook", icon: "facebook", url: "https://www.facebook.com/writersrinivasan" },
    { label: "X (Twitter)", icon: "twitter", url: "https://x.com/writersrini" },
    { label: "YouTube", icon: "youtube", url: "https://www.youtube.com/@writersrinivasan" },
    { label: "Website", icon: "website", url: "https://oneyoto.in" },
    { label: "WhatsApp", icon: "whatsapp", url: "https://wa.me/918056010125" },
    { label: "Email", icon: "email", url: "mailto:srinivasan@oneyoto.in" },
    { label: "Call", icon: "phone", url: "tel:+918056010125" },
  ],

  products: [
    {
      name: "Agentic AI Product Development",
      description:
        "End-to-end architecture, prototyping, and deployment of LLM-powered products — multi-agent pipelines, RAG, and enterprise search — moving you from experimentation to production.",
      badge: "🤖",
    },
    {
      name: "GenAI & Agentic AI Training (40hr / 5-day)",
      description:
        "Foundations & prompt engineering → LangChain/RAG → LangGraph agentic workflows & HITL → enterprise RAG (Azure AI Search) & CrewAI → capstone. Adapted for corporate and academic cohorts.",
      badge: "🎓",
    },
    {
      name: "AI Strategy & Tool-Selection Advisory",
      description:
        "Advisory for founders and CTOs on AI strategy, framework and tool selection, and responsible AI adoption.",
      badge: "🧭",
    },
    {
      name: "Workflow Automation Solutions",
      description:
        "AI-powered workflow automation that reduces operational overhead across IT, education, healthcare, and finance.",
      badge: "⚙️",
    },
  ],
};
