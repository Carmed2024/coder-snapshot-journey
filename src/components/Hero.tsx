import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import Profile from '../assets/profile-pic 67.png'

export const Hero = () => {
  return (
    <div className="min-h-screen flex items-start justify-center px-4 mx-24 pt-36 lg:px-8">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 text-left">
        {/* Left Column - Introduction */}

        <div className="text-center lg:text-left flex items-center animate-fade-down">
          <div className="relative inline-block mx-auto lg:mx-0"></div>
          <div className="space-y-6">

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-right">
            <span className='bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent'> Software Engineer </span> &  Creative Developer
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 text-right">
              Building digital experiences that combine technical excellence
              with creative innovation.
            </p>
            {/* <div className="pt-4">
              <Button size="lg" className="shadow-lg">
                View Projects
              </Button>
            </div> */}
          </div>
        </div>


        {/* Right Column - Professional Title */}
        <div className="space-y-4 animate-fade-up">
            <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-primary/10  shadow-xl mr-auto">
            <img
              src={Profile}
              alt="Profile"
              className="w-full h-full object-cover "
            />
            </div>
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
    </div>
  );
};
