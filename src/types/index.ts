import { type ReactNode } from 'react';
import { z } from 'zod';

// Component Props Types
export type BaseProps = {
  children?: ReactNode;
  className?: string;
};

export type SocialLink = {
  platform: 'github' | 'linkedin' | 'email';
  url: string;
  label: string;
};

// Skill Types
export type ProficiencyLevel = 'Basic' | 'Intermediate' | 'Advanced' | 'Expert';

export type SkillItem = {
  name: string;
  level: ProficiencyLevel;
};

export type Skill = {
  category: string;
  items: SkillItem[];
};

export type ProjectCategory = 'All' | 'Web Development' | 'AI' | 'UX Design' | 'Video Games';
export type ProjectIndustry = 'Commerce' | 'Education' | 'Healthcare' | 'Technology' | 'Other';
export type ViewMode = 'grid' | 'list';
export type SortOption = 'newest' | 'oldest' | 'az' | 'za';

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  image: string;
  category: ProjectCategory;
  industry: ProjectIndustry;
  date: string;
};

export type Review = {
  name: string;
  role: string;
  content: string;
  image: string;
};

// Navigation Types
export type NavigationItem = {
  name: string;
  href: string;
  sectionId: string;
};

export type ThemeType = 'light' | 'dark';

export type LanguageOption = {
  code: string;
  name: string;
  flag: string;
};

// Zod Schema Definitions
export const socialLinkSchema = z.object({
  platform: z.enum(['github', 'linkedin', 'email']),
  url: z.string().url(),
  label: z.string(),
});

export const skillItemSchema = z.object({
  name: z.string(),
  level: z.enum(['Basic', 'Intermediate', 'Advanced', 'Expert']),
});

export const skillSchema = z.object({
  category: z.string(),
  items: z.array(skillItemSchema),
});

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  tech: z.array(z.string()),
  github: z.string().url(),
  demo: z.string().url(),
  image: z.string(),
  category: z.enum(['All', 'Web Development', 'AI', 'UX Design', 'Video Games']),
  industry: z.enum(['Commerce', 'Education', 'Healthcare', 'Technology', 'Other']),
  date: z.string(),
});

export const reviewSchema = z.object({
  name: z.string(),
  role: z.string(),
  content: z.string(),
  image: z.string().url(),
});

export type ArticleCategory = 'AI' | 'Web Development' | 'Tools' | 'Tutorials';

export type Article = {
  title: string;
  description: string;
  category: ArticleCategory;
  date: string;
  readTime: string;
  image: string;
  url: string;
};

export const articleSchema = z.object({
  title: z.string(),
  description: z.string(),
  category: z.enum(['AI', 'Web Development', 'Tools', 'Tutorials']),
  date: z.string(),
  readTime: z.string(),
  image: z.string(),
  url: z.string().url(),
});
