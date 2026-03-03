import { motion } from "framer-motion";
import { Monitor, Smartphone, Headphones, Wifi, ExternalLink, Sparkles, Wrench } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects, type Project } from "@/data/static-data";

const categoryIcons: Record<string, React.ReactNode> = {
  "computer-repair": <Monitor className="h-5 w-5" />,
  "phone-repair": <Smartphone className="h-5 w-5" />,
  "electronics-repair": <Headphones className="h-5 w-5" />,
  "remote-assistance": <Wifi className="h-5 w-5" />,
  other: <Wrench className="h-5 w-5" />,
};

const categoryBgColors: Record<string, string> = {
  "computer-repair": "bg-primary/10 text-primary",
  "phone-repair": "bg-chart-2/10 text-chart-2",
  "electronics-repair": "bg-chart-3/10 text-chart-3",
  "remote-assistance": "bg-chart-4/10 text-chart-4",
  other: "bg-chart-5/10 text-chart-5",
};

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="h-full hover-elevate transition-all duration-300">
        <CardHeader>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <div className={`p-2 rounded-md ${categoryBgColors[project.category] || "bg-primary/10 text-primary"}`}>
                {categoryIcons[project.category] || <Wrench className="h-5 w-5" />}
              </div>
              {project.featured && (
                <Badge className="bg-gradient-to-r from-primary to-chart-2 text-primary-foreground border-0">
                  <Sparkles className="h-3 w-3 mr-1" />
                  Featured
                </Badge>
              )}
            </div>
          </div>
          <CardTitle className="mt-2">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <CardDescription className="text-base leading-relaxed">
            {project.description}
          </CardDescription>
          <div className="flex flex-wrap gap-2">
            {project.tags?.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          {project.link && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="mt-2"
            >
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-project-${project.id}`}
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                View Project
              </a>
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Wrench className="h-3 w-3 mr-1" />
            Repair Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Tech Repair & Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional repair services for computers, phones, and electronics. 
            Plus remote assistance for all your tech needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
