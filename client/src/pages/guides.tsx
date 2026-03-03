import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Download, FileText, FolderOpen, Archive, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "wouter";
import { guideCategories, guideItems, type GuideItem } from "@/data/static-data";

import guideEbikeConversion from "@/assets/images/guides/guide-ebike-conversion.png";
import guideBatteryCare from "@/assets/images/guides/guide-battery-care.png";
import guideWiringDiagram from "@/assets/images/guides/guide-wiring-diagram.png";
import guidePhoneRepair from "@/assets/images/guides/guide-phone-repair.png";
import guidePcTroubleshoot from "@/assets/images/guides/guide-pc-troubleshoot.png";
import guideSoldering from "@/assets/images/guides/guide-soldering.png";
import guideNetworkSetup from "@/assets/images/guides/guide-network-setup.png";
import downloadWallpapers from "@/assets/images/guides/download-wallpapers.png";
import download3dprints from "@/assets/images/guides/download-3dprints.png";

const thumbnailMap: Record<string, string> = {
  "1": guideEbikeConversion,
  "2": guideBatteryCare,
  "3": guideWiringDiagram,
  "4": guidePhoneRepair,
  "5": guidePcTroubleshoot,
  "6": guideSoldering,
  "7": guideNetworkSetup,
  "8": downloadWallpapers,
  "9": download3dprints,
};

const fileTypeIcon: Record<string, typeof FileText> = {
  PDF: FileText,
  ZIP: Archive,
};

function GuideCard({ item, index }: { item: GuideItem; index: number }) {
  const thumbnail = thumbnailMap[item.id];
  const IconComponent = fileTypeIcon[item.fileType] || FileText;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, delay: index * 0.06 }}
      layout
    >
      <Card className="overflow-visible hover-elevate h-full flex flex-col" data-testid={`card-guide-${item.id}`}>
        {thumbnail && (
          <div className="aspect-[4/3] overflow-hidden rounded-t-md">
            <img
              src={thumbnail}
              alt={item.title}
              className="w-full h-full object-cover"
              loading="lazy"
              data-testid={`img-guide-${item.id}`}
            />
          </div>
        )}
        <CardHeader className="pb-2 flex-1">
          <div className="flex items-center gap-2 mb-1 flex-wrap">
            <Badge variant="secondary">
              <IconComponent className="h-3 w-3 mr-1" />
              {item.fileType}
            </Badge>
            <Badge variant="outline">{item.fileSize}</Badge>
          </div>
          <CardTitle className="text-base">{item.title}</CardTitle>
          <CardDescription className="line-clamp-3">{item.description}</CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <Button
            variant="outline"
            className="w-full"
            asChild
            data-testid={`button-download-${item.id}`}
          >
            <a href={item.downloadUrl} download={item.downloadUrl !== "#"}>
              <Download className="h-4 w-4 mr-2" />
              Download
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Guides() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredItems = activeCategory
    ? guideItems.filter((item) => item.categoryId === activeCategory)
    : guideItems;

  const activeCategoryData = guideCategories.find((c) => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <div className="flex items-center gap-3">
              <Link href="/">
                <Button variant="ghost" size="icon" data-testid="button-back-home">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-primary" />
                <span className="text-lg font-bold">Guides & Downloads</span>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">
            <BookOpen className="h-3 w-3 mr-1" />
            Free Resources
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">Guides & Downloads</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Free guides, tutorials, and downloadable resources. From e-bike conversion manuals to tech wallpapers, grab whatever you find useful.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <Button
            variant={activeCategory === null ? "default" : "outline"}
            onClick={() => setActiveCategory(null)}
            data-testid="button-filter-all"
          >
            All Items
          </Button>
          {guideCategories.map((cat) => (
            <Button
              key={cat.id}
              variant={activeCategory === cat.id ? "default" : "outline"}
              onClick={() => setActiveCategory(cat.id)}
              data-testid={`button-filter-${cat.id}`}
            >
              <FolderOpen className="h-4 w-4 mr-1.5" />
              {cat.name}
            </Button>
          ))}
        </motion.div>

        {activeCategoryData && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="text-center mb-8"
          >
            <p className="text-muted-foreground">{activeCategoryData.description}</p>
          </motion.div>
        )}

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <GuideCard key={item.id} item={item} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-30" />
            <p>No items in this category yet.</p>
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="max-w-lg mx-auto">
            <CardContent className="py-8">
              <p className="text-muted-foreground mb-1">
                More guides and downloads coming soon.
              </p>
              <p className="text-sm text-muted-foreground/70">
                All downloads are free. Real files will replace placeholders as they're completed.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
