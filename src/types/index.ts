
export interface SocialLink {
  platform: 'github' | 'linkedin' | 'email';
  url: string;
  label: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
}

export interface Review {
  name: string;
  role: string;
  content: string;
  image: string;
}
