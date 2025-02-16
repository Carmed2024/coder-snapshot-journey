import { type Skill, type ProficiencyLevel } from '@/types';
import React from 'react';
import { 
  Code2, 
  Server, 
  Database, 
  Container, 
  GitBranch, 
  Globe, 
  Workflow,
  TestTube,
  type LucideIcon
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface SkillCardProps extends Skill {
  animationDelay: number;
}

const getTechIcon = (name: string): LucideIcon => {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('react') || lowerName.includes('typescript') || lowerName.includes('javascript')) {
    return Code2;
  }
  if (lowerName.includes('node') || lowerName.includes('django')) {
    return Server;
  }
  if (lowerName.includes('sql') || lowerName.includes('mongo')) {
    return Database;
  }
  if (lowerName.includes('docker') || lowerName.includes('kubernetes')) {
    return Container;
  }
  if (lowerName.includes('git')) {
    return GitBranch;
  }
  if (lowerName.includes('aws') || lowerName.includes('cloud')) {
    return Globe;
  }
  if (lowerName.includes('ci') || lowerName.includes('cd')) {
    return Workflow;
  }
  if (lowerName.includes('jest') || lowerName.includes('test')) {
    return TestTube;
  }
  return Code2;
};

const getProficiencyColor = (level: ProficiencyLevel): string => {
  switch (level) {
    case 'Expert':
      return 'text-green-700 dark:text-green-300';
    case 'Advanced':
      return 'text-blue-700 dark:text-blue-300';
    case 'Intermediate':
      return 'text-yellow-700 dark:text-yellow-300';
    default:
      return 'text-purple-700 dark:text-purple-300';
  }
};

const getExperienceYears = (level: ProficiencyLevel): string => {
  switch (level) {
    case 'Expert':
      return '+5 yrs exp';
    case 'Advanced':
      return '+3 yrs exp';
    case 'Intermediate':
      return '+2 yrs exp';
    default:
      return '+1 yr exp';
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
};

export const SkillCard = React.memo(({ category, items, animationDelay }: SkillCardProps) => {
  return (
    <motion.div
      variants={itemVariants}
      className="h-fit transform hover:scale-[1.02] transition-transform duration-200"
    >
      <Card className="overflow-hidden backdrop-blur-sm bg-white/50 dark:bg-gray-800/50 hover:bg-white/80 dark:hover:bg-gray-800/80">
        <div className="p-6">
          <h3 className="font-semibold mb-4 text-lg">{category}</h3>
          <ul className="space-y-4">
            {items.map((item, index) => {
              const Icon = getTechIcon(item.name);
              return (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    duration: 0.2, 
                    delay: (animationDelay * 0.001) + (index * 0.1),
                    ease: "easeOut"
                  }}
                  className="flex items-start space-x-3 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-colors group"
                >
                  <Icon className="w-5 h-5 mt-1 text-gray-600 dark:text-gray-300 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <span className="font-medium">{item.name}</span>
                      <span className={`text-sm font-medium ${getProficiencyColor(item.level)}`}>
                        {item.level}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {getExperienceYears(item.level)}
                    </span>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </Card>
    </motion.div>
  );
});

SkillCard.displayName = 'SkillCard';
