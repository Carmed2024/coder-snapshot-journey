
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import Profile from '../assets/profile-pic 67.png';

export const Hero = () => {
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

        <section className="space-y-4 animate-fade-up" aria-label="Introduction">
          <figure className="relative">
            <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-primary/10 shadow-xl mr-auto">
              <img
                src={Profile}
                alt="Christian RG - Software Engineer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </figure>

          <div className="space-y-2">
            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-soft-purple inline-block dark:bg-purple-400/30 dark:text-purple-300">
              Software Engineer
            </span>
            <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-soft-blue inline-block ml-2 dark:bg-blue-400/30 dark:text-blue-300">
              Tech Lead
            </span>
          </div>

          <h2 className="text-2xl md:text-3xl font-semibold text-primary">
            Hello, I'm Christian 👋
          </h2>

          <div className="prose prose-lg">
            <p className="text-lg text-muted-foreground">
              With over 6 years of experience in software development, I'm
              passionate about creating elegant solutions to complex problems.
            </p>
          </div>

          <div className="flex items-center gap-2 pt-6 justify-start">
            <Button 
              variant="outline" 
              size="icon"
              aria-label="Visit GitHub Profile"
              onClick={() => window.open('https://github.com/username', '_blank', 'noopener noreferrer')}
            >
              <Github className="w-5 h-5" aria-hidden="true" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              aria-label="Visit LinkedIn Profile"
              onClick={() => window.open('https://linkedin.com/in/username', '_blank', 'noopener noreferrer')}
            >
              <Linkedin className="w-5 h-5" aria-hidden="true" />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              aria-label="Send Email"
              onClick={() => window.location.href = 'mailto:contact@email.com'}
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
            </Button>
          </div>
        </section>
      </div>
    </header>
  );
};
