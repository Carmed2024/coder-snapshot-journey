
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

export type Project = {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
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
});

export const reviewSchema = z.object({
  name: z.string(),
  role: z.string(),
  content: z.string(),
  image: z.string().url(),
});
