
import { ExternalLink, Github, LayoutGrid, List, Filter, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import React, { useState, useMemo } from 'react';
import { type Project, type ProjectCategory, type ProjectIndustry, type ViewMode, type SortOption } from '@/types';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const projects: Project[] = [
  {
    title: 'AI Image Generator',
    description:
      'An AI-powered image generation tool that creates unique artwork based on text descriptions.',
    tech: ['Python', 'TensorFlow', 'Flask', 'React'],
    github: '#',
    demo: '#',
    image: 'https://images.ctfassets.net/kftzwdyauwt9/3gDBc446Nxn0ByyZMZdFVD/1e993b5470a4fc82279d2099ddef8321/Catcus_Heatmap_2.png?w=1920&q=90&fm=webp',
    category: 'AI',
    industry: 'Technology',
    date: '2024-02-01'
  },
  {
    title: 'E-commerce Platform',
    description:
      'A full-stack e-commerce platform with real-time inventory management and payment processing.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: '#',
    demo: '#',
    image: 'https://images.ctfassets.net/kftzwdyauwt9/4ees89KOlUbxX1vrtf7hTt/3aa15359652b70c1c89314133c408eb1/EF_Fanatics_Website_Card_16.9.png?w=1920&q=90&fm=webp',
    category: 'Web Development',
    industry: 'Commerce',
    date: '2024-01-15'
  },
  {
    title: 'Task Management App',
    description:
      'A collaborative task management application with real-time updates and team features.',
    tech: ['Next.js', 'TypeScript', 'PostgreSQL'],
    github: '#',
    demo: '#',
    image: 'https://images.ctfassets.net/kftzwdyauwt9/7IRbWsHhfHdJjDOIvTtwHr/9f3af506880dfb883a2848a7b96df1df/EF_Wayfair_Website_Card_16.9.png?w=1920&q=90&fm=webp',
    category: 'Web Development',
    industry: 'Technology',
    date: '2024-01-01'
  },
];

const categories: ProjectCategory[] = ['All', 'Web Development', 'AI', 'UX Design', 'Video Games'];
const technologies = ['React', 'Vue', 'TailwindCSS', 'Node.js', 'Django', 'Python', 'TypeScript'];
const industries: ProjectIndustry[] = ['Commerce', 'Education', 'Healthcare', 'Technology', 'Other'];
const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'newest', label: 'Newest -> Oldest' },
  { value: 'oldest', label: 'Oldest -> Newest' },
  { value: 'az', label: 'Alphabetical A-Z' },
  { value: 'za', label: 'Alphabetical Z-A' },
];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<ProjectIndustry[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const filteredAndSortedProjects = useMemo(() => {
    const filtered = projects.filter((project) => {
      const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
      const matchesTech = selectedTechnologies.length === 0 ||
        project.tech.some(tech => selectedTechnologies.includes(tech));
      const matchesIndustry = selectedIndustries.length === 0 ||
        selectedIndustries.includes(project.industry);

      return matchesCategory && matchesTech && matchesIndustry;
    });

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'az':
          return a.title.localeCompare(b.title);
        case 'za':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });
  }, [selectedCategory, selectedTechnologies, selectedIndustries, sortBy]);

  const toggleTechnology = (tech: string) => {
    setSelectedTechnologies(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const toggleIndustry = (industry: ProjectIndustry) => {
    setSelectedIndustries(prev =>
      prev.includes(industry)
        ? prev.filter(i => i !== industry)
        : [...prev, industry]
    );
  };

  const activeFiltersCount = selectedTechnologies.length + selectedIndustries.length;

  return (
    <section
      className="py-20 px-4 bg-soft-gray dark:bg-background"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16 animate-fade-up">
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-soft-blue dark:bg-blue-400/30 dark:text-blue-300 dark:bg-dark-purple inline-block">
            Portfolio
          </span>
          <h2
            id="projects-heading"
            className="text-3xl font-bold mt-4 dark:text-white"
          >
            Featured Projects
          </h2>
        </header>

        <div className="mb-8 flex md:flex-row justify-between w-full gap-6 items-start">
          {/* Left side: Category Tabs */}
          <Tabs defaultValue="All" className="w-full md:w-auto" orientation="vertical">
            <TabsList className="flex h-auto bg-transparent space-x-2 md:space-x-0 md:space-y-2">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setSelectedCategory(category)}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          {/* Right side: Controls */}
          <div className="flex gap-4 ">
            {/* Filters Dropdown */}
            <div className="flex flex-wrap gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="min-w-[120px]" aria-label="Open Filters">
                    <Filter className="w-4 h-4 mr-2" />
                    Filters
                    {activeFiltersCount > 0 && (
                      <span className="ml-2 px-2 py-0.5 bg-primary text-primary-foreground rounded-full text-xs">
                        {activeFiltersCount}
                      </span>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-80" align="start">
                  <div className="p-2">
                    <DropdownMenuLabel>Technologies</DropdownMenuLabel>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {technologies.map((tech) => (
                        <div key={tech} className="flex items-center space-x-2">
                          <Checkbox
                            id={`tech-${tech}`}
                            checked={selectedTechnologies.includes(tech)}
                            onCheckedChange={() => toggleTechnology(tech)}
                          />
                          <label
                            htmlFor={`tech-${tech}`}
                            className="text-sm cursor-pointer"
                          >
                            {tech}
                          </label>
                        </div>
                      ))}
                    </div>

                    <Separator className="my-4" />

                    <DropdownMenuLabel>Industries</DropdownMenuLabel>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {industries.map((industry) => (
                        <div key={industry} className="flex items-center space-x-2">
                          <Checkbox
                            id={`industry-${industry}`}
                            checked={selectedIndustries.includes(industry)}
                            onCheckedChange={() => toggleIndustry(industry)}
                          />
                          <label
                            htmlFor={`industry-${industry}`}
                            className="text-sm cursor-pointer"
                          >
                            {industry}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Sort Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">Sort By</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {sortOptions.map((option) => (
                    <DropdownMenuItem
                      key={option.value}
                      onClick={() => setSortBy(option.value)}
                    >
                      {option.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* View Toggle */}
              <div className="flex gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('grid')}
                >
                  <LayoutGrid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="icon"
                  onClick={() => setViewMode('list')}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className={cn(
          'grid gap-6 animate-fade-up',
          viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
        )}>
          {filteredAndSortedProjects.map((project, index) => (
            <article
              key={project.title}
              className={cn(
                'overflow-hidden backdrop-blur-sm bg-white/50 dark:bg-black  hover:bg-white/80 dark:hover:bg-dark-card/80 transition-colors rounded-lg shadow-sm',
                viewMode === 'list' && 'flex flex-col md:flex-row gap-6'
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={cn(
                'p-6',
                viewMode === 'list' && 'flex-1'
              )}>
                <img
                  src={project.image}
                  className={cn(
                    'w-full mb-4 rounded-sm',
                    viewMode === 'list' && 'md:w-64 md:mb-0'
                  )}
                  alt=""
                />
                <div className={viewMode === 'list' ? 'flex-1' : ''}>
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
