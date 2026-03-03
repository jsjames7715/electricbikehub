import { db } from "./db";
import { ebikeServices, projects, skills, links, socialLinks } from "@shared/schema";
import { sql } from "drizzle-orm";

const seedServices = [
  {
    title: "Custom E-Bike Conversions",
    description: "Transform your regular bicycle into a powerful electric ride. I specialize in hub motor and mid-drive conversions for any bike type, from road bikes to mountain bikes.",
    icon: "zap",
    category: "conversion"
  },
  {
    title: "Battery Upgrades & Rebuilds",
    description: "Extend your range with custom battery solutions. I rebuild old packs and design new configurations using high-quality cells for maximum performance.",
    icon: "battery",
    category: "conversion"
  },
  {
    title: "E-Bike Rentals",
    description: "Try before you buy! I maintain a fleet of converted e-bikes available for daily or weekly rental. Perfect for testing different setups or exploring the city.",
    icon: "bike",
    category: "rental"
  },
  {
    title: "Scooter & E-Bike Repairs",
    description: "Expert diagnostics and repairs for all makes and models. From motor issues to controller problems, I can troubleshoot and fix any electric mobility device.",
    icon: "wrench",
    category: "repair"
  },
  {
    title: "Performance Tuning",
    description: "Unlock your e-bike's full potential with custom firmware and controller tuning. Improve acceleration, top speed, and throttle response safely.",
    icon: "settings",
    category: "repair"
  },
  {
    title: "Maintenance Packages",
    description: "Keep your electric ride in peak condition with regular maintenance. Includes brake adjustments, tire changes, battery health checks, and full system diagnostics.",
    icon: "refresh",
    category: "repair"
  }
];

const seedProjects = [
  {
    title: "Computer Diagnostics & Repair",
    description: "Full-service PC and laptop diagnostics, hardware repairs, virus removal, OS reinstallation, and performance optimization. I troubleshoot and fix everything from blue screens to failed drives.",
    category: "computer-repair",
    tags: ["Windows", "macOS", "Linux", "Hardware"],
    link: null,
    featured: true
  },
  {
    title: "Smartphone Screen & Battery Replacement",
    description: "Professional phone repair services including cracked screen replacement, battery swaps, charging port repairs, and water damage recovery for iPhone and Android devices.",
    category: "phone-repair",
    tags: ["iPhone", "Samsung", "Android", "Screen Repair"],
    link: null,
    featured: true
  },
  {
    title: "Remote Tech Support",
    description: "On-demand remote assistance for software issues, network troubleshooting, email setup, printer problems, and general tech questions. Available via screen sharing and phone.",
    category: "remote-assistance",
    tags: ["Remote Desktop", "TeamViewer", "Troubleshooting"],
    link: null,
    featured: true
  },
  {
    title: "Gaming Console Repairs",
    description: "Fix your PlayStation, Xbox, or Nintendo Switch. Services include HDMI port repair, thermal paste replacement, disc drive fixes, and controller repairs.",
    category: "electronics-repair",
    tags: ["PlayStation", "Xbox", "Nintendo", "HDMI"],
    link: null,
    featured: false
  },
  {
    title: "Tablet & iPad Repairs",
    description: "Screen replacements, battery swaps, and charging port repairs for all tablet brands including iPad, Samsung Galaxy Tab, and Amazon Fire devices.",
    category: "phone-repair",
    tags: ["iPad", "Samsung Tab", "Kindle Fire"],
    link: null,
    featured: false
  },
  {
    title: "Smart Home Device Setup",
    description: "Remote or on-site setup and troubleshooting for smart home devices. Includes WiFi cameras, smart thermostats, voice assistants, and home automation systems.",
    category: "remote-assistance",
    tags: ["Smart Home", "WiFi", "Alexa", "Google Home"],
    link: null,
    featured: false
  }
];

const seedSkills = [
  // Programming Languages
  { name: "Python", category: "languages", proficiency: 95 },
  { name: "JavaScript/TypeScript", category: "languages", proficiency: 92 },
  { name: "Go", category: "languages", proficiency: 85 },
  { name: "Rust", category: "languages", proficiency: 75 },
  { name: "C/C++", category: "languages", proficiency: 70 },
  { name: "SQL", category: "languages", proficiency: 88 },
  
  // Frameworks
  { name: "React/Next.js", category: "frameworks", proficiency: 90 },
  { name: "Node.js/Express", category: "frameworks", proficiency: 92 },
  { name: "FastAPI/Django", category: "frameworks", proficiency: 88 },
  { name: "TensorFlow/PyTorch", category: "frameworks", proficiency: 82 },
  
  // Databases
  { name: "PostgreSQL", category: "databases", proficiency: 90 },
  { name: "MongoDB", category: "databases", proficiency: 85 },
  { name: "Redis", category: "databases", proficiency: 80 },
  { name: "InfluxDB", category: "databases", proficiency: 75 },
  
  // Tools
  { name: "Docker/Kubernetes", category: "tools", proficiency: 85 },
  { name: "Git/GitHub", category: "tools", proficiency: 95 },
  { name: "Linux/Bash", category: "tools", proficiency: 90 },
  { name: "AWS/GCP", category: "tools", proficiency: 78 },
  
  // Design
  { name: "Figma/Design", category: "design", proficiency: 70 },
  { name: "UI/UX Principles", category: "design", proficiency: 75 },
  
  // Certifications
  { name: "AWS Solutions Architect", category: "certifications", proficiency: 100 },
  { name: "Google Cloud Professional", category: "certifications", proficiency: 100 },
  { name: "Certified Kubernetes Admin", category: "certifications", proficiency: 100 },

  // Computer Repair
  { name: "Windows Troubleshooting", category: "computer-repair", proficiency: 95 },
  { name: "macOS Diagnostics", category: "computer-repair", proficiency: 88 },
  { name: "Linux Administration", category: "computer-repair", proficiency: 92 },
  { name: "Hardware Diagnostics", category: "computer-repair", proficiency: 90 },
  { name: "Data Recovery", category: "computer-repair", proficiency: 85 },
  { name: "Virus/Malware Removal", category: "computer-repair", proficiency: 95 },

  // Phone & Mobile Repair
  { name: "iPhone Screen Replacement", category: "phone-repair", proficiency: 92 },
  { name: "Android Device Repair", category: "phone-repair", proficiency: 90 },
  { name: "Micro-Soldering", category: "phone-repair", proficiency: 75 },
  { name: "Battery Replacement", category: "phone-repair", proficiency: 95 },
  { name: "Charging Port Repair", category: "phone-repair", proficiency: 88 },

  // Electronics Repair
  { name: "Console Repair (PS/Xbox)", category: "electronics-repair", proficiency: 85 },
  { name: "HDMI Port Repair", category: "electronics-repair", proficiency: 80 },
  { name: "Soldering & Rework", category: "electronics-repair", proficiency: 82 },
  { name: "Power Supply Repair", category: "electronics-repair", proficiency: 78 },
  { name: "Circuit Board Diagnostics", category: "electronics-repair", proficiency: 75 },

  // Networking
  { name: "Network Troubleshooting", category: "networking", proficiency: 90 },
  { name: "WiFi Setup & Optimization", category: "networking", proficiency: 92 },
  { name: "Router Configuration", category: "networking", proficiency: 88 },
  { name: "VPN Setup", category: "networking", proficiency: 85 },

  // Remote Support
  { name: "Remote Desktop Support", category: "remote-support", proficiency: 95 },
  { name: "TeamViewer/AnyDesk", category: "remote-support", proficiency: 92 },
  { name: "Phone/Video Support", category: "remote-support", proficiency: 90 },
  { name: "Smart Home Setup", category: "remote-support", proficiency: 85 }
];

const seedLinks = [
  {
    title: "Scooter Hacking",
    url: "https://scooterhacking.org",
    description: "Electric scooter modding, firmware, and community",
    icon: "zap"
  },
  {
    title: "r/ElectricScooters",
    url: "https://reddit.com/r/ElectricScooters",
    description: "Reddit community for electric scooter enthusiasts",
    icon: "globe"
  },
  {
    title: "r/ebikes",
    url: "https://reddit.com/r/ebikes",
    description: "Reddit's electric bike community",
    icon: "bike"
  },
  {
    title: "Endless Sphere Forums",
    url: "https://endless-sphere.com",
    description: "The best e-bike DIY community on the web",
    icon: "bike"
  },
  {
    title: "iFixit",
    url: "https://ifixit.com",
    description: "Free repair guides for phones, computers, and electronics",
    icon: "wrench"
  },
  {
    title: "r/mobilerepair",
    url: "https://reddit.com/r/mobilerepair",
    description: "Phone and tablet repair community",
    icon: "smartphone"
  },
  {
    title: "r/techsupport",
    url: "https://reddit.com/r/techsupport",
    description: "Tech troubleshooting and help community",
    icon: "monitor"
  },
  {
    title: "XDA Developers",
    url: "https://xda-developers.com",
    description: "Android development and modding community",
    icon: "smartphone"
  },
  {
    title: "Hacker News",
    url: "https://news.ycombinator.com",
    description: "Tech news and startup community discussions",
    icon: "globe"
  },
  {
    title: "GitHub",
    url: "https://github.com",
    description: "Where all the code lives",
    icon: "globe"
  },
  {
    title: "LowSpecGamer",
    url: "https://youtube.com/@LowSpecGamer",
    description: "Gaming on any hardware",
    icon: "youtube"
  },
  {
    title: "Louis Rossmann",
    url: "https://youtube.com/@rossmanngroup",
    description: "Right to repair advocate and electronics repair expert",
    icon: "youtube"
  }
];

const seedSocialLinks = [
  { platform: "linkedin", url: "https://www.linkedin.com/in/jared-james-65b916293/", icon: "linkedin" },
  { platform: "twitter", url: "https://x.com/Jaredsnacks65", icon: "twitter" },
  { platform: "discord", url: "https://discord.com/users/snacksalot_80013", icon: "discord" },
  { platform: "email", url: "jsjames@snacksalot.org", icon: "email" },
  { platform: "telegram", url: "#", icon: "telegram" },
  { platform: "facebook", url: "#", icon: "facebook" },
  { platform: "instagram", url: "#", icon: "instagram" },
  { platform: "github", url: "#", icon: "github" },
  { platform: "youtube", url: "#", icon: "youtube" }
];

export async function seedDatabase() {
  try {
    // Check if we have the new data by looking for computer-repair category
    const existingSkills = await db.select().from(skills);
    const hasNewCategories = existingSkills.some(s => s.category === "computer-repair");
    
    if (existingSkills.length > 0 && hasNewCategories) {
      console.log("Database already has updated data, skipping seed...");
      return;
    }

    // If we have old data without new categories, clear and reseed
    if (existingSkills.length > 0 && !hasNewCategories) {
      console.log("Detected old data, clearing and reseeding...");
      await db.delete(ebikeServices);
      await db.delete(projects);
      await db.delete(skills);
      await db.delete(links);
      await db.delete(socialLinks);
    }

    console.log("Seeding database...");

    await db.insert(ebikeServices).values(seedServices);
    console.log("Seeded e-bike services");

    await db.insert(projects).values(seedProjects);
    console.log("Seeded projects");

    await db.insert(skills).values(seedSkills);
    console.log("Seeded skills");

    await db.insert(links).values(seedLinks);
    console.log("Seeded links");

    await db.insert(socialLinks).values(seedSocialLinks);
    console.log("Seeded social links");

    console.log("Database seeding complete!");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}
