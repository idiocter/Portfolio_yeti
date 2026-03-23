// =============================================================================
// ENVIRONMENT CONFIGURATION LOADER
// All website configuration is loaded from .env file
// =============================================================================

import type { TeamMember, FeatureCard, StatItem, SocialLink, NavLink } from '@/types';

import bipulImg from '@/assets/Bipul.png';
import ritikaImg from '@/assets/reetika.webp';
import swornimKarkiImg from '@/assets/swornim_karki.webp';
import swornimShresthaImg from '@/assets/Swornim_shrestha.jpg';
import magishImg from '@/assets/magish.png';
import nikeshImg from '@/assets/nikesh.webp';

// Helper function to safely get env variables
const getEnv = (key: string, defaultValue: string = ''): string => {
  return import.meta.env[key] || defaultValue;
};

// Parse semicolon-separated values
const parseSemicolonList = (value: string): string[] => {
  if (!value) return [];
  return value.split(';').map(item => item.trim()).filter(Boolean);
};

// Parse double-semicolon separated values
const parseDoubleSemicolonList = (value: string): string[] => {
  if (!value) return [];
  return value.split(';;').map(item => item.trim()).filter(Boolean);
};

// Parse comma-separated values
const parseCommaList = (value: string): string[] => {
  if (!value) return [];
  return value.split(',').map(item => item.trim()).filter(Boolean);
};

// =============================================================================
// COMPANY CONFIGURATION
// =============================================================================
export const companyConfig = {
  name: getEnv('VITE_COMPANY_NAME', 'Yeti Development Corporation'),
  tagline: getEnv('VITE_COMPANY_TAGLINE', 'Engineering Digital Peaks'),
  subtitle: getEnv('VITE_COMPANY_SUBTITLE', 'Crafting robust digital solutions from the heart of the Himalayas'),
  email: getEnv('VITE_COMPANY_EMAIL', 'hello@yetidev.com'),
  location: getEnv('VITE_COMPANY_LOCATION', 'Kathmandu, Nepal'),
  responseTime: getEnv('VITE_COMPANY_RESPONSE_TIME', 'Usually responds in 24 hours'),
};

// =============================================================================
// NAVIGATION CONFIGURATION
// =============================================================================
export const navConfig: NavLink[] = (() => {
  const links = parseCommaList(getEnv('VITE_NAV_LINKS', 'About,Team,BhatBhatify,Contact'));
  return links.map(label => ({
    label,
    href: `#${label.toLowerCase()}`,
  }));
})();

// =============================================================================
// HERO SECTION CONFIGURATION
// =============================================================================
export const heroConfig = {
  tagline: getEnv('VITE_HERO_TAGLINE', 'Engineering Digital Peaks'),
  heading: getEnv('VITE_HERO_HEADING', 'Yeti Development Corporation'),
  subtitle: getEnv('VITE_HERO_SUBTITLE', 'Crafting robust digital solutions from the heart of the Himalayas'),
  ctaPrimary: getEnv('VITE_HERO_CTA_PRIMARY', 'Explore Our Work'),
  ctaSecondary: getEnv('VITE_HERO_CTA_SECONDARY', 'Meet the Team'),
};

// =============================================================================
// ABOUT SECTION CONFIGURATION
// =============================================================================
export const aboutConfig = {
  label: getEnv('VITE_ABOUT_LABEL', 'ABOUT US'),
  heading: getEnv('VITE_ABOUT_HEADING', 'Rooted in the Himalayas, Reaching Global Heights'),
  description: getEnv('VITE_ABOUT_DESCRIPTION', 'We are a team of passionate developers based in Kathmandu, Nepal, dedicated to creating exceptional digital experiences.'),
  stats: ((): StatItem[] => {
    const statsStr = getEnv('VITE_ABOUT_STATS', '5+|Projects Delivered;6|Expert Developers;24/7|Support Available');
    return parseSemicolonList(statsStr).map(stat => {
      const [number, label] = stat.split('|').map(s => s.trim());
      return { number: number || '0', label: label || '' };
    });
  })(),
  features: ((): FeatureCard[] => {
    const featuresStr = getEnv('VITE_ABOUT_FEATURES', 'Mountain|Himalayan Roots|Deeply connected to Nepali culture;;Code|Clean Code|Modern, maintainable solutions');
    return parseDoubleSemicolonList(featuresStr).map(feature => {
      const [icon, title, description] = feature.split('|').map(s => s.trim());
      return { icon: icon || 'Mountain', title: title || '', description: description || '' };
    });
  })(),
};

// =============================================================================
// TEAM SECTION CONFIGURATION
// =============================================================================
export const teamConfig = {
  label: getEnv('VITE_TEAM_LABEL', 'OUR TEAM'),
  heading: getEnv('VITE_TEAM_HEADING', 'Meet the Minds Behind the Magic'),
  subtitle: getEnv('VITE_TEAM_SUBTITLE', 'Our diverse team of experts brings together years of experience.'),
  members: ((): TeamMember[] => {
    const membersStr = getEnv('VITE_TEAM_MEMBERS', '');
    if (!membersStr) {
      // Default team members
      return [
        { name: 'Bipul Regmi', role: 'Project Manager', specialty: 'Strategic Vision & Delivery', imageUrl: bipulImg },
        { name: 'Ritika Shrestha', role: 'Business Analyst', specialty: 'Requirements & Insights', imageUrl: ritikaImg },
        { name: 'Swornim Karki', role: 'Backend Developer', specialty: 'Architecture & Systems', imageUrl: swornimKarkiImg },
        { name: 'Swornim Shrestha', role: 'Full Stack Developer', specialty: 'End-to-End Solutions', imageUrl: swornimShresthaImg },
        { name: 'Magish Gautam', role: 'Frontend Developer', specialty: 'UI/UX & Interaction', imageUrl: magishImg },
        { name: 'Nikesh Deuja', role: 'Frontend Developer', specialty: 'Components & Styling', imageUrl: nikeshImg },
      ];
    }
    return parseDoubleSemicolonList(membersStr).map(member => {
      const [name, role, specialty, imageUrl] = member.split('|').map(s => s.trim());
      return { name: name || '', role: role || '', specialty: specialty || '', imageUrl };
    });
  })(),
};

// =============================================================================
// PROJECT SECTION CONFIGURATION
// =============================================================================
export const projectConfig = {
  label: getEnv('VITE_PROJECT_LABEL', 'CURRENT PROJECT'),
  name: getEnv('VITE_PROJECT_NAME', 'BhatBhatify'),
  tagline: getEnv('VITE_PROJECT_TAGLINE', 'Revolutionizing Tours & Travel in Nepal'),
  description: getEnv('VITE_PROJECT_DESCRIPTION', 'BhatBhatify is our flagship project—a comprehensive tours and travel platform designed specifically for Nepal.'),
  techStack: parseCommaList(getEnv('VITE_PROJECT_TECH_STACK', 'Next.js,T3 Stack,Prisma ORM,MongoDB')),
  features: parseCommaList(getEnv('VITE_PROJECT_FEATURES', 'Curated Nepali tour packages,Local guide connections,Secure booking system,Multi-language support')),
  cta: getEnv('VITE_PROJECT_CTA', 'View Live Demo'),
  ctaLink: getEnv('VITE_PROJECT_CTA_LINK', 'https://bhatbhatify.demo'),
};

// =============================================================================
// CONTACT SECTION CONFIGURATION
// =============================================================================
export const contactConfig = {
  heading: getEnv('VITE_CONTACT_HEADING', 'Start Your Project'),
  subtitle: getEnv('VITE_CONTACT_SUBTITLE', "Let's build something extraordinary together"),
  formSubjects: parseCommaList(getEnv('VITE_CONTACT_FORM_SUBJECTS', 'General Inquiry,Project Collaboration,Job Opportunity')),
  apiEndpoint: getEnv('VITE_CONTACT_API_ENDPOINT', '/api/contact'),
};

// =============================================================================
// CHATBOT CONFIGURATION
// =============================================================================
export const chatbotConfig = {
  name: getEnv('VITE_CHATBOT_NAME', 'Yeti Assistant'),
  welcomeMessage: getEnv('VITE_CHATBOT_WELCOME_MESSAGE', "Namaste! I'm your Yeti Assistant. How can I help you today?"),
  quickReplies: parseCommaList(getEnv('VITE_CHATBOT_QUICK_REPLIES', 'Services?,Pricing?,Team?,Contact')),
};

// =============================================================================
// FOOTER CONFIGURATION
// =============================================================================
export const footerConfig = {
  tagline: getEnv('VITE_FOOTER_TAGLINE', 'Engineering Digital Peaks from the Himalayas'),
  copyright: getEnv('VITE_FOOTER_COPYRIGHT', `© ${new Date().getFullYear()} Yeti Development Corporation. All rights reserved.`),
  madeWith: getEnv('VITE_FOOTER_MADE_WITH', 'Made with ❤️ in the Himalayas'),
  socialLinks: ((): SocialLink[] => {
    const linksStr = getEnv('VITE_SOCIAL_LINKS', '');
    if (!linksStr) return [];
    return parseDoubleSemicolonList(linksStr).map(link => {
      const [platform, url] = link.split('|').map(s => s.trim());
      return { platform: platform || '', url: url || '' };
    }).filter(l => l.platform && l.url);
  })(),
};

// =============================================================================
// THEME CONFIGURATION
// =============================================================================
export const themeConfig = {
  defaultTheme: getEnv('VITE_DEFAULT_THEME', 'system') as 'light' | 'dark' | 'system',
};

// =============================================================================
// META CONFIGURATION
// =============================================================================
export const metaConfig = {
  title: getEnv('VITE_META_TITLE', 'Yeti Development Corporation | Engineering Digital Peaks'),
  description: getEnv('VITE_META_DESCRIPTION', 'Premium software development services from Kathmandu, Nepal.'),
  keywords: getEnv('VITE_META_KEYWORDS', 'software development, Nepal, Kathmandu, web development'),
};
