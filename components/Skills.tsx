import { Badge } from "@/components/ui/badge"

const skills = [
  {
    category: "Programming Languages",
    items: ["JavaScript", "TypeScript", "PHP", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    items: ["React", "Angular", "Laravel", "Node.js", "CodeIgniter", "Yii"],
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools & Technologies",
    items: ["Git", "Docker", "RESTful APIs"],
  },
  {
    category: "Soft Skills",
    items: ["Leadership", "Team Collaboration", "Problem-Solving", "Analytical Thinking", "Effective Communication"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="mb-6">
              <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

