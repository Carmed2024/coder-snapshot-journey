
import { Card } from "./ui/card";

const skills = [
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

export const Skills = () => {
  return (
    <section className="py-20 px-4" id="skills">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <span className="px-4 py-1.5 rounded-full text-sm font-medium bg-soft-blue inline-block">
            Skills & Expertise
          </span>
          <h2 className="text-3xl font-bold mt-4">Technical Proficiencies</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill.category}
              className="p-6 backdrop-blur-sm bg-white/50 hover:bg-white/80 transition-colors animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="font-semibold mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-soft-purple text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
