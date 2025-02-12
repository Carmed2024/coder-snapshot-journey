
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 lg:px-8">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column - Introduction */}
        <div className="space-y-6 animate-fade-up">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary">Hello, I'm John</h2>
          <div className="prose prose-lg">
            <p className="text-lg text-muted-foreground">
              With over 6 years of experience in software development, I'm passionate about creating elegant solutions to complex problems. My journey in tech started with a fascination for building things that make a difference in people's lives.
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              I specialize in full-stack development with a particular focus on scalable architecture and user-centric design. Whether it's crafting intuitive user interfaces or optimizing backend performance, I'm driven by the challenge of creating exceptional digital experiences.
            </p>
          </div>
          <div className="flex items-center gap-4 pt-6">
            <Button variant="outline" size="icon">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Right Column - Professional Title */}
        <div className="text-center lg:text-left space-y-8 animate-fade-down">
          <div className="relative inline-block mx-auto lg:mx-0">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-primary/10 bg-white shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&h=200&auto=format&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-soft-purple inline-block">
                Software Engineer
              </span>
              <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-soft-blue inline-block ml-2">
                Creative Developer
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              John Doe
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Building digital experiences that combine technical excellence with creative innovation.
            </p>
            <div className="pt-4">
              <Button size="lg" className="shadow-lg">
                View Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
