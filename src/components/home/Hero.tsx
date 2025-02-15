
import { type SocialLink } from '@/types';
import { ProfileSection } from './ProfileSection';
import React from 'react';

const socialLinks: SocialLink[] = [
  {
    platform: 'github',
    url: 'https://github.com/username',
    label: 'Visit GitHub Profile'
  },
  {
    platform: 'linkedin',
    url: 'https://linkedin.com/in/username',
    label: 'Visit LinkedIn Profile'
  },
  {
    platform: 'email',
    url: 'mailto:contact@email.com',
    label: 'Send Email'
  }
];

export const Hero = React.memo(() => {
  return (
    <header className="min-h-screen flex items-start justify-center px-4 mx-24 pt-36 lg:px-8">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 text-left">
        <div className="text-center lg:text-left flex items-center animate-fade-down">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-right">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Software Engineer
              </span>{" "}
              & Creative Developer
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-right">
              Building digital experiences that combine technical excellence
              with creative innovation.
            </p>
          </div>
        </div>
        <ProfileSection socialLinks={socialLinks} />
      </div>
    </header>
  );
});

Hero.displayName = 'Hero';
