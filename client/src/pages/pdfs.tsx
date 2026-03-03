import { motion } from "framer-motion";
import { ArrowLeft, Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "wouter";
import { pdfItems, type PdfItem } from "@/data/static-data";

function PdfCard({ item, index }: { item: PdfItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.08 }}
    >
      <Card className="overflow-visible hover-elevate" data-testid={`card-pdf-${item.id}`}>
        <CardHeader className="flex flex-row items-start gap-4">
          <div className="rounded-md bg-primary/10 p-3 mt-1 shrink-0">
            <FileText className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <Badge variant="secondary">
                <FileText className="h-3 w-3 mr-1" />
                PDF
              </Badge>
              <Badge variant="outline">{item.fileSize}</Badge>
            </div>
            <CardTitle className="text-lg mb-1" data-testid={`text-pdf-title-${item.id}`}>{item.title}</CardTitle>
            <CardDescription className="text-sm leading-relaxed" data-testid={`text-pdf-desc-${item.id}`}>
              {item.description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="pt-0 pl-[4.5rem]">
          <Button
            variant="outline"
            asChild
            data-testid={`button-download-pdf-${item.id}`}
          >
            <a href={item.downloadUrl} download target="_blank" rel="noopener noreferrer">
              <Download className="h-4 w-4 mr-2" />
              Download PDF
            </a>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Pdfs() {
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
                <FileText className="h-5 w-5 text-primary" />
                <span className="text-lg font-bold">PDFs</span>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4">
            <FileText className="h-3 w-3 mr-1" />
            Free Downloads
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold mb-3" data-testid="text-pdfs-heading">PDFs</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Downloadable PDF documents covering cybersecurity, tech guides, and reference materials. All free to download.
          </p>
        </motion.div>

        <div className="flex flex-col gap-6">
          {pdfItems.map((item, index) => (
            <PdfCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {pdfItems.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <FileText className="h-12 w-12 mx-auto mb-4 opacity-30" />
            <p>No PDFs available yet.</p>
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
                More PDFs will be added as they become available.
              </p>
              <p className="text-sm text-muted-foreground/70">
                Have a PDF you'd like to see here? Reach out through the contact section.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
