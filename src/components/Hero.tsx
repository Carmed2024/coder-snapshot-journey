
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-3xl mx-auto space-y-6 animate-fade-down">
        <div className="relative inline-block">
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 ring-2 ring-primary/10 bg-white shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200&h=200&auto=format&fit=crop"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-soft-purple inline-block">
          Software Engineer
        </span>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          John Doe
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Passionate software engineer specializing in building exceptional digital experiences.
          With a focus on clean code and user-centric design.
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
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
    </div>
  );
};
