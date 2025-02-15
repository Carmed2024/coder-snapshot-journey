
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

export type Skill = {
  category: string;
  items: string[];
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

// Zod Schema Definitions
export const socialLinkSchema = z.object({
  platform: z.enum(['github', 'linkedin', 'email']),
  url: z.string().url(),
  label: z.string(),
});

export const skillSchema = z.object({
  category: z.string(),
  items: z.array(z.string()),
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
