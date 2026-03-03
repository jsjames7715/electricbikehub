import { motion } from "framer-motion";
import { Zap, Settings, Battery, Bike, Wrench, RefreshCw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { services, type EbikeService } from "@/data/static-data";

const iconMap: Record<string, React.ReactNode> = {
  zap: <Zap className="h-8 w-8" />,
  settings: <Settings className="h-8 w-8" />,
  battery: <Battery className="h-8 w-8" />,
  bike: <Bike className="h-8 w-8" />,
  wrench: <Wrench className="h-8 w-8" />,
  refresh: <RefreshCw className="h-8 w-8" />,
};

const categoryColors: Record<string, string> = {
  conversion: "bg-primary/10 text-primary",
  rental: "bg-chart-2/10 text-chart-2",
  repair: "bg-chart-3/10 text-chart-3",
};

function ServiceCard({ service, index }: { service: EbikeService; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full hover-elevate transition-all duration-300 group">
        <CardHeader>
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className={`p-3 rounded-md ${categoryColors[service.category] || "bg-primary/10 text-primary"}`}>
              {iconMap[service.icon] || <Zap className="h-8 w-8" />}
            </div>
            <Badge variant="secondary" className="capitalize">
              {service.category}
            </Badge>
          </div>
          <CardTitle className="mt-4 group-hover:text-primary transition-colors">
            {service.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base leading-relaxed">
            {service.description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Zap className="h-3 w-3 mr-1" />
            E-Bike Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Electric Mobility Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From custom conversions to expert repairs, I offer comprehensive e-bike and scooter services 
            for all makes and models.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
