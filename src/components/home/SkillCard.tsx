
import { type Skill, type ProficiencyLevel } from '@/types';
import React from 'react';
import { Progress } from "@/components/ui/progress";

interface SkillCardProps extends Skill {
  animationDelay: number;
}

const getProficiencyColor = (level: ProficiencyLevel): string => {
  switch (level) {
    case 'Expert':
      return 'bg-green-500/20 text-green-700 dark:bg-green-500/30 dark:text-green-300';
    case 'Advanced':
      return 'bg-blue-500/20 text-blue-700 dark:bg-blue-500/30 dark:text-blue-300';
    case 'Intermediate':
      return 'bg-yellow-500/20 text-yellow-700 dark:bg-yellow-500/30 dark:text-yellow-300';
    default:
      return 'bg-purple-500/20 text-purple-700 dark:bg-purple-500/30 dark:text-purple-300';
  }
};

const getProficiencyValue = (level: ProficiencyLevel): number => {
  switch (level) {
    case 'Expert':
      return 100;
    case 'Advanced':
      return 80;
    case 'Intermediate':
      return 60;
    default:
      return 40;
  }
};

export const SkillCard = React.memo(({ category, items, animationDelay }: SkillCardProps) => {
  return (
    <article
      className="p-6 backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all animate-fade-up rounded-lg shadow-sm"
      style={{ animationDelay: `${animationDelay}ms` }}
    >
      <h3 className="font-semibold mb-4 text-lg">{category}</h3>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getProficiencyColor(item.level)}`}>
                {item.name}
              </span>
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                {item.level}
              </span>
            </div>
            <Progress value={getProficiencyValue(item.level)} className="h-1.5" />
          </div>
        ))}
      </div>
    </article>
  );
});

SkillCard.displayName = 'SkillCard';
