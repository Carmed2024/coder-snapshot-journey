
import { type Skill } from '@/types';
import React from 'react';

interface SkillCardProps extends Skill {
  animationDelay: number;
}

export const SkillCard = React.memo(({ category, items, animationDelay }: SkillCardProps) => {
  return (
    <article
      className="p-6 backdrop-blur-sm bg-white/50 dark:bg-gray-800 hover:bg-white/80 transition-colors animate-fade-up rounded-lg shadow-sm"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <h3 className="font-semibold mb-4">{category}</h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="px-3 py-1 rounded-full bg-soft-purple text-sm dark:bg-purple-400/30 dark:text-purple-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
});

SkillCard.displayName = 'SkillCard';
