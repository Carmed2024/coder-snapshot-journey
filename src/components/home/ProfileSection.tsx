
import { type SocialLink } from '@/types';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '../ui/button';
import Profile from '@/assets/profile-pic 67.png';
import React from 'react';

interface ProfileSectionProps {
  socialLinks: SocialLink[];
}

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
};

export const ProfileSection = React.memo(({ socialLinks }: ProfileSectionProps) => {
  return (
    <section className="space-y-4 animate-fade-up mt-32 md:mt-32 lg:mt-0" aria-label="Introduction">
      <figure className="relative">
        <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-primary/10 shadow-xl mx-auto lg:mr-auto lg:ml-0 ">
          <img
            src={Profile}
            alt="Christian RG - Software Engineer"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </figure>

      <div className="space-y-2 text-center lg:text-left">
        <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-soft-purple inline-block dark:bg-purple-400/30 dark:text-purple-300">
          Software Engineer
        </span>
        <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-soft-blue inline-block ml-2 dark:bg-blue-400/30 dark:text-blue-300">
          Tech Lead
        </span>
      </div>

      <h2 className="text-2xl md:text-3xl font-semibold text-primary text-center lg:text-left">
        Hello, I'm Christian 👋
      </h2>

      <div className="prose prose-lg text-center lg:text-left pt-4">
        <p className="text-lg text-muted-foreground">
          With over 6 years of experience in software development, I'm
          passionate about creating elegant solutions to complex problems.
        </p>
      </div>

      <div className="flex items-center gap-2 pt-6 justify-center lg:justify-start ">
        {socialLinks.map((link) => {
          const Icon = iconMap[link.platform];
          return (
            <Button
              key={link.platform}
              variant="outline"
              size="icon"
              aria-label={link.label}
              onClick={() => window.open(link.url, '_blank', 'noopener noreferrer')}
            >
              <Icon className="w-5 h-5" aria-hidden="true" />
            </Button>
          );
        })}
      </div>
    </section>
  );
});

ProfileSection.displayName = 'ProfileSection';
