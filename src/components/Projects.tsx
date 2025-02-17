import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'AI Image Generator',
    description:
      'An AI-powered image generation tool that creates unique artwork based on text descriptions.',
    tech: ['Python', 'TensorFlow', 'Flask', 'React'],
    github: '#',
    demo: '#',
    image: 'https://images.ctfassets.net/kftzwdyauwt9/3gDBc446Nxn0ByyZMZdFVD/1e993b5470a4fc82279d2099ddef8321/Catcus_Heatmap_2.png?w=1920&q=90&fm=webp'
  },
  {
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce platform with real-time inventory management and payment processing.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    demo: '#',
    image: 'https://images.ctfassets.net/kftzwdyauwt9/4ees89KOlUbxX1vrtf7hTt/3aa15359652b70c1c89314133c408eb1/EF_Fanatics_Website_Card_16.9.png?w=1920&q=90&fm=webp'
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates and team features.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
    github: '#',
    demo: '#',
    image: 'https://images.ctfassets.net/kftzwdyauwt9/7IRbWsHhfHdJjDOIvTtwHr/9f3af506880dfb883a2848a7b96df1df/EF_Wayfair_Website_Card_16.9.png?w=1920&q=90&fm=webp'
  },

];

export const Projects = () => {
  return (
    <section
      className="py-20 px-4 bg-soft-gray dark:bg-background"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16 animate-fade-up">
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-soft-blue dark:bg-blue-400/30 dark:text-blue-300 dark:bg-dark-purple inline-block">
            Portfolio
          </span>
          <h2
            id="projects-heading"
            className="text-3xl font-bold mt-4 dark:text-white "
          >
            Featured Projects
          </h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="overflow-hidden backdrop-blur-sm bg-white/50 dark:bg-black dark:bg-dark-card/50 hover:bg-white/80 dark:hover:bg-dark-card/80 transition-colors animate-fade-up rounded-lg shadow-sm"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">


                {/* <video
                  playsInline
                  autoPlay
                  loop
                  className=" rounded mb-4 min-w-full left-0 top-0 h-2/3 w-full"
                >
                  <source
                    src="//videos.ctfassets.net/kftzwdyauwt9/703OcfTBsCqNzLIj5vKIzz/f3a847c7100da0e46943f8acee91d18c/Research_16x9.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video> */}

                <img src={project.image} className='w-full mb-4 rounded-sm' alt="" />
                <h3 className="font-semibold text-lg mb-2 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-muted-foreground dark:text-muted-dark mb-4">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <li
                      key={tech}
                      className="px-3 py-1 rounded-full bg-soft-blue dark:bg-dark-blue text-sm dark:bg-blue-400/30 dark:text-blue-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <footer className="flex gap-4">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.github}
                      className="dark:text-white"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <Github className="w-4 h-4 mr-2" aria-hidden="true" />
                      <span>Code</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={project.demo}
                      className="dark:text-white"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <ExternalLink
                        className="w-4 h-4 mr-2"
                        aria-hidden="true"
                      />
                      <span>Demo</span>
                    </a>
                  </Button>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
