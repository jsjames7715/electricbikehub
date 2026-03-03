import { motion } from "framer-motion";
import { Zap, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="font-semibold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              SnacksALot
            </span>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <span>&copy; {currentYear} SnacksALot. Made with</span>
            <Heart className="h-4 w-4 text-destructive fill-destructive" />
            <span>and lots of caffeine.</span>
          </p>

          <div className="text-sm text-muted-foreground">
            snacksalot.org
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
