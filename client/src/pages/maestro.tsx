import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, GraduationCap, Clock, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/theme-toggle";
import { Link } from "wouter";
import { maestroEntries, type MaestroEntry } from "@/data/static-data";

function EntryCard({ entry, index }: { entry: MaestroEntry; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="hover-elevate cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                Week {entry.weekNumber}
              </Badge>
              <Badge variant="secondary">{entry.date}</Badge>
            </div>
          </div>
          <CardTitle className="text-lg mt-2">{entry.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className={`text-muted-foreground ${!isExpanded ? 'line-clamp-2' : ''}`}>
            {entry.content}
          </p>
          <Button variant="ghost" size="sm" className="mt-2">
            {isExpanded ? "Show Less" : "Read More"}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Maestro() {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border">
        <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <div className="flex items-center gap-3">
              <Link href="/">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                <span className="text-lg font-bold">Maestro University</span>
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
            <GraduationCap className="h-3 w-3 mr-1" />
            My Education Journey
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">My Experience with Maestro AI University</h1>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Badge variant="secondary" className="flex items-center gap-1">
              <GraduationCap className="h-3 w-3" />
              Associate of Applied Science - AI Software Engineering
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              Expected Graduation: February 13, 2028
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1">
              <BookOpen className="h-3 w-3" />
              100% Online
            </Badge>
          </div>

          <Card className="text-left max-w-2xl mx-auto mb-8">
            <CardContent className="pt-6">
              <p className="text-muted-foreground mb-4">
                Maestro AI University represents a groundbreaking approach to higher education. As a first-of-its-kind institution, Maestro is revolutionizing how we think about university degrees by fully integrating artificial intelligence into the learning experience.
              </p>
              <p className="text-muted-foreground mb-4">
                What sets Maestro apart is its commitment to providing a fully accredited education that stands alongside traditional universities. The degree I'm pursuing - Associate of Applied Science in AI Software Engineering - is recognized and respected just like any degree from a mainstream university.
              </p>
              <p className="text-muted-foreground">
                After completing my Associate's degree, I'll continue into the Bachelor of Science (BS) program at Maestro University. All classes are conducted online, giving me the flexibility to learn at my own pace while building practical skills in AI and software development.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-center mb-6">Weekly Entries</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="default">
              <Calendar className="h-4 w-4 mr-1.5" />
              All Weeks
            </Button>
          </div>
        </motion.div>

        <div className="space-y-4">
          {maestroEntries.map((entry, index) => (
            <EntryCard key={entry.id} entry={entry} index={index} />
          ))}
        </div>

        {maestroEntries.length === 0 && (
          <div className="text-center py-16 text-muted-foreground">
            <GraduationCap className="h-12 w-12 mx-auto mb-4 opacity-30" />
            <p>No entries yet. Check back soon for weekly updates!</p>
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
                More weekly entries coming soon.
              </p>
              <p className="text-sm text-muted-foreground/70">
                I'll be sharing my experiences at Maestro AI University every week.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
