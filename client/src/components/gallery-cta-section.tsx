import { motion } from "framer-motion";
import { Images, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

import img33 from "@/assets/images/gallery/IMG_0033.jpg";
import img37 from "@/assets/images/gallery/IMG_0037.jpg";
import img40 from "@/assets/images/gallery/IMG_0040.jpg";

const previewImages = [
  { src: img33, alt: "Controller wiring" },
  { src: img37, alt: "Scooter build" },
  { src: img40, alt: "Internal electronics" },
];

export function GalleryCtaSection() {
  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
                  <Badge variant="outline" className="mb-4 w-fit">
                    <Images className="h-3 w-3 mr-1" />
                    Project Gallery
                  </Badge>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                    See My Work
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Browse photos from e-bike builds, tech repairs, and electronics projects. 
                    New project photos added regularly.
                  </p>
                  <Link href="/gallery">
                    <Button data-testid="button-view-gallery">
                      View Gallery
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </div>
                <div className="grid grid-cols-3 gap-1 p-2 md:w-[45%]">
                  {previewImages.map((img, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="aspect-square overflow-hidden rounded-md"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        data-testid={`img-gallery-preview-${i}`}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
