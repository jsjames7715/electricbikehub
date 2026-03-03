import { motion } from "framer-motion";
import { Mail, MapPin, Send, Zap, Github, Linkedin, Youtube, MessageCircle, Twitter, Instagram, Facebook } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { socialLinks, type SocialLink } from "@/data/static-data";

const socialIcons: Record<string, React.ReactNode> = {
  github: <Github className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  twitter: <Twitter className="h-5 w-5" />,
  youtube: <Youtube className="h-5 w-5" />,
  instagram: <Instagram className="h-5 w-5" />,
  discord: <MessageCircle className="h-5 w-5" />,
  telegram: <Send className="h-5 w-5" />,
  facebook: <Facebook className="h-5 w-5" />,
  reddit: <MessageCircle className="h-5 w-5" />,
  email: <Mail className="h-5 w-5" />,
};

function SocialButton({ social }: { social: SocialLink }) {
  const isEmail = social.platform === "email";
  const href = isEmail ? `mailto:${social.url}` : social.url;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Button
        variant="outline"
        size="lg"
        asChild
      >
        <a
          href={href}
          target={isEmail ? undefined : "_blank"}
          rel={isEmail ? undefined : "noopener noreferrer"}
          className="flex items-center gap-2"
          data-testid={`link-social-${social.platform}`}
        >
          {socialIcons[social.icon] || socialIcons[social.platform] || <Send className="h-5 w-5" />}
          <span className="capitalize">{social.platform}</span>
        </a>
      </Button>
    </motion.div>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            <Send className="h-3 w-3 mr-1" />
            Get in Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Need an e-bike conversion or repair? 
            Reach out through any of these channels.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-chart-2/5" />
            <CardHeader className="relative text-center pb-4">
              <div className="mx-auto mb-4 p-4 rounded-full bg-gradient-to-br from-primary to-chart-2 text-white">
                <Zap className="h-8 w-8" />
              </div>
              <CardTitle className="text-2xl">Ready to Electrify?</CardTitle>
              <CardDescription className="text-base">
                Whether it's e-bike services or tech collaborations, I'm always open to new opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative space-y-8">
              <div className="flex flex-wrap justify-center gap-4">
                {socialLinks.map((social) => (
                  <SocialButton key={social.id} social={social} />
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>Available Worldwide</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>jsjames@snacksalot.org</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
