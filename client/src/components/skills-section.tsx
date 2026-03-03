import { motion } from "framer-motion";
import { Code, Database, Server, Wrench, Award, Palette, Monitor, Smartphone, Cpu, Wifi, Headphones } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills, type Skill } from "@/data/static-data";

const categoryIcons: Record<string, React.ReactNode> = {
  languages: <Code className="h-5 w-5" />,
  frameworks: <Server className="h-5 w-5" />,
  databases: <Database className="h-5 w-5" />,
  tools: <Wrench className="h-5 w-5" />,
  design: <Palette className="h-5 w-5" />,
  certifications: <Award className="h-5 w-5" />,
  "computer-repair": <Monitor className="h-5 w-5" />,
  "phone-repair": <Smartphone className="h-5 w-5" />,
  "electronics-repair": <Headphones className="h-5 w-5" />,
  networking: <Wifi className="h-5 w-5" />,
  "remote-support": <Cpu className="h-5 w-5" />,
};

const categoryColors: Record<string, string> = {
  languages: "from-primary to-primary/50",
  frameworks: "from-chart-2 to-chart-2/50",
  databases: "from-chart-3 to-chart-3/50",
  tools: "from-chart-4 to-chart-4/50",
  design: "from-chart-5 to-chart-5/50",
  certifications: "from-primary to-chart-2",
  "computer-repair": "from-blue-500 to-blue-500/50",
  "phone-repair": "from-green-500 to-green-500/50",
  "electronics-repair": "from-purple-500 to-purple-500/50",
  networking: "from-orange-500 to-orange-500/50",
  "remote-support": "from-cyan-500 to-cyan-500/50",
};

const categoryNames: Record<string, string> = {
  languages: "Programming Languages",
  frameworks: "Frameworks & Libraries",
  databases: "Databases",
  tools: "DevOps & Tools",
  design: "Design",
  certifications: "Certifications",
  "computer-repair": "Computer Repair",
  "phone-repair": "Phone & Mobile Repair",
  "electronics-repair": "Electronics Repair",
  networking: "Networking",
  "remote-support": "Remote Support",
};

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="flex items-center justify-between p-3 rounded-md bg-muted/50 hover-elevate transition-all">
        <div className="flex items-center gap-3">
          <div className="text-muted-foreground group-hover:text-primary transition-colors">
            {categoryIcons[skill.category] || <Code className="h-4 w-4" />}
          </div>
          <span className="font-medium">{skill.name}</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-24 hidden sm:block">
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.proficiency}%` }}
                transition={{ duration: 1, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`h-full rounded-full bg-gradient-to-r ${categoryColors[skill.category] || "from-primary to-primary/50"}`}
              />
            </div>
          </div>
          <span className="text-sm text-muted-foreground w-10 text-right">
            {skill.proficiency}%
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function CategoryGroup({ category, categorySkills, index }: { category: string; categorySkills: Skill[]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-md bg-gradient-to-br ${categoryColors[category] || "from-primary to-primary/50"} text-white`}>
              {categoryIcons[category] || <Code className="h-5 w-5" />}
            </div>
            <CardTitle className="text-lg">{categoryNames[category] || category}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          {categorySkills.map((skill, skillIndex) => (
            <SkillCard key={skill.id} skill={skill} index={skillIndex} />
          ))}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function SkillsSection() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryOrder = [
    "computer-repair",
    "phone-repair",
    "electronics-repair",
    "networking",
    "remote-support",
    "languages",
    "frameworks",
    "databases",
    "tools",
    "design",
    "certifications",
  ];

  const sortedCategories = Object.keys(groupedSkills).sort(
    (a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b)
  );

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Award className="h-3 w-3 mr-1" />
            Expertise
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Skills & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From computer repair to programming, here's what I bring to the table. 
            Proficiency levels based on years of hands-on experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedCategories.map((category, index) => (
            <CategoryGroup
              key={category}
              category={category}
              categorySkills={groupedSkills[category]}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
