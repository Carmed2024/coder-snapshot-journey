
import { type Skill } from '@/types';
import { SkillCard } from './SkillCard';
import React from 'react';

const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "Django", "PostgreSQL", "MongoDB"],
  },
  {
    category: "DevOps",
    items: ["Docker", "AWS", "CI/CD", "Kubernetes", "Linux"],
  },
  {
    category: "Tools",
    items: ["Git", "VS Code", "Figma", "Postman", "Jest"],
  },
];

export const Skills = React.memo(() => {
  return (
    <section className="py-20 px-4 bg-slate-100 dark:bg-background" id="skills" aria-labelledby="skills-heading">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16 animate-fade-up">
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-soft-blue inline-block">
            Skills & Expertise
          </span>
          <h2 id="skills-heading" className="text-3xl font-bold mt-4">Technical Proficiencies</h2>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.category}
              {...skill}
              animationDelay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
});

Skills.displayName = 'Skills';
