// =============================================================================
// TYPE DEFINITIONS FOR YETI DEVELOPMENT CORPORATION WEBSITE
// =============================================================================

export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  imageUrl?: string;
}

export interface FeatureCard {
  icon: string;
  title: string;
  description: string;
}

export interface StatItem {
  number: string;
  label: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: number;
}

export interface ProjectFeature {
  text: string;
  icon?: string;
}

export type Theme = 'light' | 'dark' | 'system';

export interface NavLink {
  label: string;
  href: string;
}
