
import { type Skill } from '@/types';
import { SkillCard } from './SkillCard';
import React from 'react';
import { motion } from 'framer-motion';

const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Redux", level: "Intermediate" }
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "Django", level: "Intermediate" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MongoDB", level: "Basic" }
    ],
  },
  {
    category: "DevOps",
    items: [
      { name: "Docker", level: "Advanced" },
      { name: "AWS", level: "Intermediate" },
      { name: "CI/CD", level: "Advanced" },
      { name: "Kubernetes", level: "Basic" },
      { name: "Linux", level: "Advanced" }
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", level: "Expert" },
      { name: "VS Code", level: "Expert" },
      { name: "Figma", level: "Intermediate" },
      { name: "Postman", level: "Advanced" },
      { name: "Jest", level: "Advanced" }
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const Skills = React.memo(() => {
  return (
    <section className="py-20 px-4 bg-slate-100 dark:bg-background" id="skills" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16 animate-fade-up">
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-soft-blue inline-block dark:bg-blue-400/30 dark:text-blue-300">
            Skills & Expertise
          </span>
          <h2 id="skills-heading" className="text-3xl font-bold mt-4">Technical Proficiencies</h2>
        </header>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-auto gap-6"
        >
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.category}
              {...skill}
              animationDelay={index * 100}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';
