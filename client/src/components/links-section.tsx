import { motion } from "framer-motion";
import { ExternalLink, Link as LinkIcon, Globe, BookOpen, Youtube, Music, Gamepad2, Wrench, Smartphone, Zap, Monitor, Bike } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { links, type Link } from "@/data/static-data";

const iconMap: Record<string, React.ReactNode> = {
  globe: <Globe className="h-5 w-5" />,
  book: <BookOpen className="h-5 w-5" />,
  youtube: <Youtube className="h-5 w-5" />,
  music: <Music className="h-5 w-5" />,
  game: <Gamepad2 className="h-5 w-5" />,
  link: <LinkIcon className="h-5 w-5" />,
  wrench: <Wrench className="h-5 w-5" />,
  smartphone: <Smartphone className="h-5 w-5" />,
  zap: <Zap className="h-5 w-5" />,
  monitor: <Monitor className="h-5 w-5" />,
  bike: <Bike className="h-5 w-5" />,
};

function LinkCard({ link, index }: { link: Link; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      viewport={{ once: true }}
    >
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block group"
        data-testid={`link-external-${link.id}`}
      >
        <Card className="hover-elevate transition-all duration-300 group-hover:border-primary/50">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-md bg-muted group-hover:bg-primary/10 transition-colors">
                {iconMap[link.icon || "link"] || <LinkIcon className="h-5 w-5" />}
              </div>
              <div className="flex-1 min-w-0">
                <CardTitle className="text-base group-hover:text-primary transition-colors flex items-center gap-2">
                  {link.title}
                  <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </CardTitle>
              </div>
            </div>
          </CardHeader>
          {link.description && (
            <CardContent className="pt-0">
              <CardDescription className="line-clamp-2">
                {link.description}
              </CardDescription>
            </CardContent>
          )}
        </Card>
      </a>
    </motion.div>
  );
}

export function LinksSection() {
  return (
    <section id="links" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <LinkIcon className="h-3 w-3 mr-1" />
            Resources
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Links & Resources
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Curated collection of helpful communities, forums, and resources 
            for e-bike enthusiasts and tech repair.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {links.map((link, index) => (
            <LinkCard key={link.id} link={link} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
