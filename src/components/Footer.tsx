
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from './ui/button';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-2">
            <span className="text-lg font-semibold text-foreground">Christian RG</span>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <nav className="flex items-center space-x-4" aria-label="Social media links">
            <Button variant="ghost" size="icon" aria-label="Visit GitHub profile">
              <Github className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Visit LinkedIn profile">
              <Linkedin className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Send email">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </Button>
          </nav>

          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </footer>
  );
};
