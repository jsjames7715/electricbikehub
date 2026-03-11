export interface EbikeService {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  link: string | null;
  featured: boolean | null;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  proficiency: number;
}

export interface Link {
  id: string;
  title: string;
  url: string;
  description: string | null;
  icon: string | null;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

export const services: EbikeService[] = [
  {
    id: "1",
    title: "Custom E-Bike Conversions",
    description: "Transform your regular bicycle into a powerful electric ride. I specialize in hub motor and mid-drive conversions for any bike type, from road bikes to mountain bikes.",
    icon: "zap",
    category: "conversion"
  },
  {
    id: "2",
    title: "Battery Upgrades & Rebuilds",
    description: "Extend your range with custom battery solutions. I rebuild old packs and design new configurations using high-quality cells for maximum performance.",
    icon: "battery",
    category: "conversion"
  },
  {
    id: "3",
    title: "E-Bike Rentals",
    description: "Try before you buy! I maintain a fleet of converted e-bikes available for daily or weekly rental. Perfect for testing different setups or exploring the city.",
    icon: "bike",
    category: "rental"
  },
  {
    id: "4",
    title: "Scooter & E-Bike Repairs",
    description: "Expert diagnostics and repairs for all makes and models. From motor issues to controller problems, I can troubleshoot and fix any electric mobility device.",
    icon: "wrench",
    category: "repair"
  },
  {
    id: "5",
    title: "Performance Tuning",
    description: "Unlock your e-bike's full potential with custom firmware and controller tuning. Improve acceleration, top speed, and throttle response safely.",
    icon: "settings",
    category: "repair"
  },
  {
    id: "6",
    title: "Maintenance Packages",
    description: "Keep your electric ride in peak condition with regular maintenance. Includes brake adjustments, tire changes, battery health checks, and full system diagnostics.",
    icon: "refresh",
    category: "repair"
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Computer Diagnostics & Repair",
    description: "Full-service PC and laptop diagnostics, hardware repairs, virus removal, OS reinstallation, and performance optimization. I troubleshoot and fix everything from blue screens to failed drives.",
    category: "computer-repair",
    tags: ["Windows", "macOS", "Linux", "Hardware"],
    link: null,
    featured: true
  },
  {
    id: "2",
    title: "Smartphone Screen & Battery Replacement",
    description: "Professional phone repair services including cracked screen replacement, battery swaps, charging port repairs, and water damage recovery for iPhone and Android devices.",
    category: "phone-repair",
    tags: ["iPhone", "Samsung", "Android", "Screen Repair"],
    link: null,
    featured: true
  },
  {
    id: "3",
    title: "Remote Tech Support",
    description: "On-demand remote assistance for software issues, network troubleshooting, email setup, printer problems, and general tech questions. Available via screen sharing and phone.",
    category: "remote-assistance",
    tags: ["Remote Desktop", "TeamViewer", "Troubleshooting"],
    link: null,
    featured: true
  },
  {
    id: "4",
    title: "Gaming Console Repairs",
    description: "Fix your PlayStation, Xbox, or Nintendo Switch. Services include HDMI port repair, thermal paste replacement, disc drive fixes, and controller repairs.",
    category: "electronics-repair",
    tags: ["PlayStation", "Xbox", "Nintendo", "HDMI"],
    link: null,
    featured: false
  },
  {
    id: "5",
    title: "Tablet & iPad Repairs",
    description: "Screen replacements, battery swaps, and charging port repairs for all tablet brands including iPad, Samsung Galaxy Tab, and Amazon Fire devices.",
    category: "phone-repair",
    tags: ["iPad", "Samsung Tab", "Kindle Fire"],
    link: null,
    featured: false
  },
  {
    id: "6",
    title: "Smart Home Device Setup",
    description: "Remote or on-site setup and troubleshooting for smart home devices. Includes WiFi cameras, smart thermostats, voice assistants, and home automation systems.",
    category: "remote-assistance",
    tags: ["Smart Home", "WiFi", "Alexa", "Google Home"],
    link: null,
    featured: false
  }
];

export const skills: Skill[] = [
  { id: "1", name: "Python", category: "languages", proficiency: 95 },
  { id: "2", name: "JavaScript/TypeScript", category: "languages", proficiency: 92 },
  { id: "3", name: "Go", category: "languages", proficiency: 85 },
  { id: "4", name: "Rust", category: "languages", proficiency: 75 },
  { id: "5", name: "C/C++", category: "languages", proficiency: 70 },
  { id: "6", name: "SQL", category: "languages", proficiency: 88 },
  { id: "7", name: "React/Next.js", category: "frameworks", proficiency: 90 },
  { id: "8", name: "Node.js/Express", category: "frameworks", proficiency: 92 },
  { id: "9", name: "FastAPI/Django", category: "frameworks", proficiency: 88 },
  { id: "10", name: "TensorFlow/PyTorch", category: "frameworks", proficiency: 82 },
  { id: "11", name: "PostgreSQL", category: "databases", proficiency: 90 },
  { id: "12", name: "MongoDB", category: "databases", proficiency: 85 },
  { id: "13", name: "Redis", category: "databases", proficiency: 80 },
  { id: "14", name: "InfluxDB", category: "databases", proficiency: 75 },
  { id: "15", name: "Docker/Kubernetes", category: "tools", proficiency: 85 },
  { id: "16", name: "Git/GitHub", category: "tools", proficiency: 95 },
  { id: "17", name: "Linux/Bash", category: "tools", proficiency: 90 },
  { id: "18", name: "AWS/GCP", category: "tools", proficiency: 78 },
  { id: "19", name: "Figma/Design", category: "design", proficiency: 70 },
  { id: "20", name: "UI/UX Principles", category: "design", proficiency: 75 },
  { id: "21", name: "AWS Solutions Architect", category: "certifications", proficiency: 100 },
  { id: "22", name: "Google Cloud Professional", category: "certifications", proficiency: 100 },
  { id: "23", name: "Certified Kubernetes Admin", category: "certifications", proficiency: 100 },
  { id: "24", name: "Windows Troubleshooting", category: "computer-repair", proficiency: 95 },
  { id: "25", name: "macOS Diagnostics", category: "computer-repair", proficiency: 88 },
  { id: "26", name: "Linux Administration", category: "computer-repair", proficiency: 92 },
  { id: "27", name: "Hardware Diagnostics", category: "computer-repair", proficiency: 90 },
  { id: "28", name: "Data Recovery", category: "computer-repair", proficiency: 85 },
  { id: "29", name: "Virus/Malware Removal", category: "computer-repair", proficiency: 95 },
  { id: "30", name: "iPhone Screen Replacement", category: "phone-repair", proficiency: 92 },
  { id: "31", name: "Android Device Repair", category: "phone-repair", proficiency: 90 },
  { id: "32", name: "Micro-Soldering", category: "phone-repair", proficiency: 75 },
  { id: "33", name: "Battery Replacement", category: "phone-repair", proficiency: 95 },
  { id: "34", name: "Charging Port Repair", category: "phone-repair", proficiency: 88 },
  { id: "35", name: "Console Repair (PS/Xbox)", category: "electronics-repair", proficiency: 85 },
  { id: "36", name: "HDMI Port Repair", category: "electronics-repair", proficiency: 80 },
  { id: "37", name: "Soldering & Rework", category: "electronics-repair", proficiency: 82 },
  { id: "38", name: "Power Supply Repair", category: "electronics-repair", proficiency: 78 },
  { id: "39", name: "Circuit Board Diagnostics", category: "electronics-repair", proficiency: 75 },
  { id: "40", name: "Network Troubleshooting", category: "networking", proficiency: 90 },
  { id: "41", name: "WiFi Setup & Optimization", category: "networking", proficiency: 92 },
  { id: "42", name: "Router Configuration", category: "networking", proficiency: 88 },
  { id: "43", name: "VPN Setup", category: "networking", proficiency: 85 },
  { id: "44", name: "Remote Desktop Support", category: "remote-support", proficiency: 95 },
  { id: "45", name: "TeamViewer/AnyDesk", category: "remote-support", proficiency: 92 },
  { id: "46", name: "Phone/Video Support", category: "remote-support", proficiency: 90 },
  { id: "47", name: "Smart Home Setup", category: "remote-support", proficiency: 85 }
];

export const links: Link[] = [
  { id: "1", title: "Scooter Hacking", url: "https://scooterhacking.org", description: "Electric scooter modding, firmware, and community", icon: "zap" },
  { id: "2", title: "r/ElectricScooters", url: "https://reddit.com/r/ElectricScooters", description: "Reddit community for electric scooter enthusiasts", icon: "globe" },
  { id: "3", title: "r/ebikes", url: "https://reddit.com/r/ebikes", description: "Reddit's electric bike community", icon: "bike" },
  { id: "4", title: "Endless Sphere Forums", url: "https://endless-sphere.com", description: "The best e-bike DIY community on the web", icon: "bike" },
  { id: "5", title: "iFixit", url: "https://ifixit.com", description: "Free repair guides for phones, computers, and electronics", icon: "wrench" },
  { id: "6", title: "r/mobilerepair", url: "https://reddit.com/r/mobilerepair", description: "Phone and tablet repair community", icon: "smartphone" },
  { id: "7", title: "r/techsupport", url: "https://reddit.com/r/techsupport", description: "Tech troubleshooting and help community", icon: "monitor" },
  { id: "8", title: "XDA Developers", url: "https://xda-developers.com", description: "Android development and modding community", icon: "smartphone" },
  { id: "9", title: "Hacker News", url: "https://news.ycombinator.com", description: "Tech news and startup community discussions", icon: "globe" },
  { id: "10", title: "GitHub", url: "https://github.com", description: "Where all the code lives", icon: "globe" },
  { id: "11", title: "LowSpecGamer", url: "https://youtube.com/@LowSpecGamer", description: "Gaming on any hardware", icon: "youtube" },
  { id: "12", title: "Louis Rossmann", url: "https://youtube.com/@rossmanngroup", description: "Right to repair advocate and electronics repair expert", icon: "youtube" }
];

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  projectId: string;
}

export interface GalleryProject {
  id: string;
  name: string;
  description: string;
}

export const galleryProjects: GalleryProject[] = [
  {
    id: "project-1",
    name: "Controller & Wiring",
    description: "Brushless motor controllers, wiring harnesses, connectors, and XT60 power connections for e-scooter builds."
  },
  {
    id: "project-2",
    name: "Scooter Builds",
    description: "Bird and Lyft scooter conversions, full workshop builds, and custom electric scooter projects."
  },
  {
    id: "project-3",
    name: "Internal Electronics",
    description: "Controller installations, internal wiring, chassis work, and component mounting inside scooter decks."
  },
  {
    id: "project-4",
    name: "Cybersecurity & OSINT",
    description: "Cheat sheets, security scanners, OSINT reconnaissance tools, and ethical hacking resources."
  },
  {
    id: "project-5",
    name: "Workstation & Lab",
    description: "Custom PC builds, multi-monitor setups, and workshop workstations."
  },
  {
    id: "project-6",
    name: "AI Tools & Prompts",
    description: "AI platforms, prompt marketplaces, AI coding assistants, and generative AI tools."
  },
  {
    id: "project-7",
    name: "Privacy & Anonymity",
    description: "VPNs, encrypted services, temporary emails, privacy-focused frontends, and anonymity tools."
  },
  {
    id: "project-8",
    name: "Downloads & Streaming",
    description: "Torrent indexes, streaming sites, cracked software, game repacks, and file search engines."
  },
  {
    id: "project-9",
    name: "Developer, Learning & Tech Tips",
    description: "Coding education, dev tools, cheat sheets, research databases, and curated tech resource lists."
  },
  {
    id: "project-10",
    name: "Software & Web Tools",
    description: "Useful websites, productivity apps, converters, media tools, and online utilities."
  }
];

export interface GuideCategory {
  id: string;
  name: string;
  description: string;
}

export interface GuideItem {
  id: string;
  title: string;
  description: string;
  categoryId: string;
  fileType: string;
  fileSize: string;
  downloadUrl: string;
}

export const guideCategories: GuideCategory[] = [
  {
    id: "ebike-guides",
    name: "E-Bike Guides",
    description: "Step-by-step guides for e-bike conversions, battery care, and wiring."
  },
  {
    id: "repair-guides",
    name: "Repair Guides",
    description: "Phone repair tutorials, PC troubleshooting flowcharts, and soldering basics."
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    description: "Penetration testing guides, threat hunting, and security research resources."
  },
  {
    id: "downloads",
    name: "Fun Downloads",
    description: "Wallpapers, 3D print files, network diagrams, and other useful goodies."
  }
];

export const guideItems: GuideItem[] = [
  {
    id: "1",
    title: "E-Bike Conversion Guide",
    description: "Complete walkthrough for converting a regular bicycle to electric. Covers hub motors, mid-drives, battery mounting, and display setup.",
    categoryId: "ebike-guides",
    fileType: "PDF",
    fileSize: "4.2 MB",
    downloadUrl: "#"
  },
  {
    id: "2",
    title: "Battery Care & Safety Manual",
    description: "Everything you need to know about lithium battery maintenance, safe charging practices, storage tips, and extending battery life.",
    categoryId: "ebike-guides",
    fileType: "PDF",
    fileSize: "2.8 MB",
    downloadUrl: "#"
  },
  {
    id: "3",
    title: "Motor Controller Wiring Diagrams",
    description: "Color-coded wiring diagrams for popular e-bike controllers. Includes pinout charts, connector types, and troubleshooting tips.",
    categoryId: "ebike-guides",
    fileType: "PDF",
    fileSize: "3.5 MB",
    downloadUrl: "#"
  },
  {
    id: "4",
    title: "Phone Screen Replacement Guide",
    description: "Step-by-step teardown and screen replacement instructions for iPhone and Samsung Galaxy devices. Includes tool list and adhesive tips.",
    categoryId: "repair-guides",
    fileType: "PDF",
    fileSize: "5.1 MB",
    downloadUrl: "#"
  },
  {
    id: "5",
    title: "PC Troubleshooting Flowchart",
    description: "Printable diagnostic flowchart for common PC problems. Blue screens, boot failures, overheating, and performance issues covered.",
    categoryId: "repair-guides",
    fileType: "PDF",
    fileSize: "1.8 MB",
    downloadUrl: "#"
  },
  {
    id: "6",
    title: "Beginner's Soldering Tutorial",
    description: "Learn through-hole and basic SMD soldering techniques. Covers iron selection, flux usage, desoldering, and common mistakes to avoid.",
    categoryId: "repair-guides",
    fileType: "PDF",
    fileSize: "3.2 MB",
    downloadUrl: "#"
  },
  {
    id: "7",
    title: "Home Network Setup Guide",
    description: "Optimize your WiFi coverage, configure your router for best performance, set up VLANs, and secure your home network.",
    categoryId: "repair-guides",
    fileType: "PDF",
    fileSize: "2.4 MB",
    downloadUrl: "#"
  },
  {
    id: "8",
    title: "Tech Wallpaper Pack",
    description: "Collection of 20 dark-themed desktop wallpapers featuring circuit board patterns, neon accents, and minimal tech designs. 4K resolution.",
    categoryId: "downloads",
    fileType: "ZIP",
    fileSize: "45 MB",
    downloadUrl: "#"
  },
  {
    id: "9",
    title: "3D Print Files - Phone Stands & Tool Holders",
    description: "STL files for 3D-printable phone stands, screwdriver holders, and parts trays. Designed for FDM printers, no supports needed.",
    categoryId: "downloads",
    fileType: "ZIP",
    fileSize: "12 MB",
    downloadUrl: "#"
  },
  {
    id: "10",
    title: "Google Dorking Guide",
    description: "Master advanced Google search operators for OSINT and security research. Learn how to find exposed credentials, vulnerable sites, and hidden information.",
    categoryId: "cybersecurity",
    fileType: "PDF",
    fileSize: "283 KB",
    downloadUrl: "https://files.catbox.moe/1a6ot5.pdf"
  },
  {
    id: "11",
    title: "AI Pentesting with HexStrike & KALI MCP",
    description: "Watch an AI pentest a lab environment in just 45 minutes. Learn how to use HexStrike AI and KALI MCP to identify vulnerabilities and gain shell access.",
    categoryId: "cybersecurity",
    fileType: "PDF",
    fileSize: "439 KB",
    downloadUrl: "https://files.catbox.moe/sos649.pdf"
  },
  {
    id: "12",
    title: "Public Information Gathering",
    description: "Comprehensive guide to OSINT techniques for gathering public information. Covers passive reconnaissance, social media profiling, and metadata analysis.",
    categoryId: "cybersecurity",
    fileType: "PDF",
    fileSize: "416 KB",
    downloadUrl: "https://files.catbox.moe/rrewjv.pdf"
  },
  {
    id: "13",
    title: "SOCKS vs HTTPS Proxies for Beginners",
    description: "Understand the differences between SOCKS and HTTPS proxies. Learn when to use each type, security implications, and setup instructions for various use cases.",
    categoryId: "cybersecurity",
    fileType: "PDF",
    fileSize: "332 KB",
    downloadUrl: "https://files.catbox.moe/07loxm.pdf"
  },
  {
    id: "14",
    title: "The Fastest Way To Clean Your Crypto",
    description: "Step-by-step guide to securely cleaning cryptocurrency wallets and removing traces. Essential for privacy-conscious crypto users and security researchers.",
    categoryId: "cybersecurity",
    fileType: "PDF",
    fileSize: "442 KB",
    downloadUrl: "https://files.catbox.moe/d1p7rm.pdf"
  },
  {
    id: "15",
    title: "ARP Poisoning Threat Hunting",
    description: "Learn how to detect and investigate ARP poisoning attacks in network traffic. Includes Wireshark filters, detection techniques, and threat hunting methodologies.",
    categoryId: "cybersecurity",
    fileType: "PDF",
    fileSize: "1.7 MB",
    downloadUrl: "https://files.catbox.moe/hr5ppm.pdf"
  },
  {
    id: "12",
    title: "Public Information Gathering",
    description: "Comprehensive guide to OSINT techniques for gathering public information. Covers passive reconnaissance, social media profiling, and metadata analysis.",
    categoryId: "cybersecurity",
    fileType: "PDF",
    fileSize: "416 KB",
    downloadUrl: "https://files.catbox.moe/rrewjv.pdf"
  },
  {
    id: "13",
    title: "SOCKS vs HTTPS Proxies for Beginners",
    description: "Understand the differences between SOCKS and HTTPS proxies. Learn when to use each type, security implications, and setup instructions for various use cases.",
    categoryId: "cybersecurity",
    fileType: "PDF",
    fileSize: "332 KB",
    downloadUrl: "https://files.catbox.moe/07loxm.pdf"
  },
  {
    id: "14",
    title: "The Fastest Way To Clean Your Crypto",
    description: "Step-by-step guide to securely cleaning cryptocurrency wallets and removing traces. Essential for privacy-conscious crypto users and security researchers.",
    categoryId: "cybersecurity",
    fileType: "PDF",
    fileSize: "442 KB",
    downloadUrl: "/pdfs/The Fastest Way To Clean Your Crypto.pdf"
  },
  {
    id: "15",
    title: "ARP Poisoning Threat Hunting",
    description: "Learn how to detect and investigate ARP poisoning attacks in network traffic. Includes Wireshark filters, detection techniques, and threat hunting methodologies.",
    categoryId: "cybersecurity",
    fileType: "PDF",
    fileSize: "1.7 MB",
    downloadUrl: "/pdfs/When ARP Goes Wrong_ Threat Hunting ARP Poisoning in Network Traffic.pdf"
  }
];

export interface PdfItem {
  id: string;
  title: string;
  description: string;
  fileSize: string;
  downloadUrl: string;
}

export const pdfItems: PdfItem[] = [
  {
    id: "1",
    title: "The Threat Hunter's Cookbook",
    description: "A comprehensive guide to threat hunting by Dr. Ryan Fetterman and Sydney Marrone from Splunk's SURGe team. Packed with step-by-step recipes for threat hunting, covering grouping, anomaly detection, clustering, forecasting, and practical SPL techniques. Great resource for anyone getting into cybersecurity or looking to sharpen their defensive skills.",
    fileSize: "4.4 MB",
    downloadUrl: "/pdfs/threat-hunters-cookbook.pdf"
  },
  {
    id: "2",
    title: "Real-World Bug Hunting: A Field Guide to Web Hacking",
    description: "By Peter Yaworski. A hands-on guide to finding security vulnerabilities in web applications through real bug bounty examples. Covers open redirects, XSS, SQL injection, SSRF, CSRF, race conditions, IDOR, OAuth flaws, subdomain takeovers, and more. Each chapter breaks down actual disclosed vulnerability reports with clear takeaways. Essential reading for anyone interested in bug bounties or web application security.",
    fileSize: "6.1 MB",
    downloadUrl: "/pdfs/real-world-bug-hunting.pdf"
  },
  {
    id: "3",
    title: "Kali Linux Revealed: Mastering the Penetration Testing Distribution",
    description: "By Raphael Hertzog, Jim O'Gorman, and Mati Aharoni. The official Kali Linux book covering everything from installation and configuration to advanced penetration testing workflows. Includes Linux fundamentals, package management, network services, securing Kali deployments, and customizing your own Kali ISO. A must-have for anyone serious about pentesting.",
    fileSize: "27 MB",
    downloadUrl: "/pdfs/kali-linux-revealed.pdf"
  },
  {
    id: "4",
    title: "Honeypots and Routers: Collecting Internet Attacks",
    description: "By Mohssen Mohammed and Habib-ur Rehman. Covers computer networks, information security fundamentals, intrusion detection systems, malware analysis, and honeypot deployment. Includes a deep dive into double-honeynet architectures for collecting zero-day polymorphic worms. Great for understanding how defenders set traps to study real-world attacks.",
    fileSize: "2.4 MB",
    downloadUrl: "https://files.catbox.moe/6r5brz.pdf"
  },
  {
    id: "5",
    title: "CompTIA Security+ Certification Guide (SY0-501)",
    description: "By Ian Neil. A comprehensive study guide for the CompTIA Security+ SY0-501 exam covering security fundamentals, risk analysis, identity and access management, network components, cryptography, threat management, and more. Includes review questions and hands-on exercises. Perfect for anyone preparing for Security+ certification.",
    fileSize: "13 MB",
    downloadUrl: "https://files.catbox.moe/m9s40v.pdf"
  },
  {
    id: "6",
    title: "Linux Basics for Hackers: Getting Started with Networking, Scripting, and Security in Kali",
    description: "By OccupyTheWeb. An excellent starting point for aspiring hackers and pentesters. Covers Linux fundamentals using Kali Linux, including text manipulation, file permissions, process management, bash scripting, Python scripting, networking, wireless security, anonymity with Tor and VPNs, and managing the Linux kernel. Practical exercises throughout.",
    fileSize: "7.3 MB",
    downloadUrl: "https://files.catbox.moe/lcexr4.pdf"
  },
  {
    id: "7",
    title: "Linux Firewalls: Attack Detection and Response with iptables, psad, and fwsnort",
    description: "By Michael Rash. A thorough guide to building and managing Linux firewalls using iptables, with advanced coverage of attack detection using psad and fwsnort. Covers network, transport, and application layer attacks, port scan detection, Snort rule translation, single packet authorization, and log visualization. Essential for Linux network security.",
    fileSize: "4.1 MB",
    downloadUrl: "https://files.catbox.moe/7nb5bx.pdf"
  },
  {
    id: "8",
    title: "Foundations of Python Network Programming",
    description: "A comprehensive guide to network programming with Python. Covers sockets, HTTP, email protocols, SSH, FTP, and building networked applications. Ideal for developers looking to understand how network protocols work under the hood and build robust network tools with Python.",
    fileSize: "7.9 MB",
    downloadUrl: "https://files.catbox.moe/6ck9pm.pdf"
  },
  {
    id: "9",
    title: "Gray Hat Hacking",
    description: "A comprehensive guide covering ethical hacking, penetration testing, and vulnerability analysis. Explores the gray area between white hat and black hat hacking, with practical techniques for finding and exploiting vulnerabilities while staying within legal and ethical boundaries. Covers exploit development, reverse engineering, and advanced attack techniques.",
    fileSize: "13 MB",
    downloadUrl: "https://files.catbox.moe/1fq7iz.pdf"
  },
  {
    id: "10",
    title: "Metasploit for Beginners",
    description: "By Sagar Rahalkar. A beginner-friendly introduction to the Metasploit penetration testing framework. Covers setting up your environment, Metasploit components, information gathering, vulnerability hunting, client-side attacks, web application scanning, antivirus evasion, anti-forensics, and managing cyber attacks with Armitage.",
    fileSize: "23 MB",
    downloadUrl: "/pdfs/metasploit-for-beginners.pdf"
  },
  {
    id: "11",
    title: "Practical Mobile Forensics (3rd Edition)",
    description: "By Rohit Tamma, Oleg Skulkin, Heather Mahalik, and Satish Bommisetty. A hands-on guide to mastering mobile forensics for iOS, Android, and Windows Phone platforms. Covers evidence extraction, data acquisition methods, filesystem analysis, app forensics, and working with forensic tools. Essential for digital forensics professionals.",
    fileSize: "18 MB",
    downloadUrl: "https://files.catbox.moe/qwl9wd.pdf"
  },
  {
    id: "12",
    title: "Crypto 101",
    description: "By Laurens Van Houtven (lvh). An introductory course on cryptography for programmers. Starts with simple primitives like XOR and block ciphers, then builds up to complete cryptosystems including TLS, GPG, and OTR. Covers key exchange, public-key encryption, hash functions, MACs, signature algorithms, and common attacks. Clear and practical.",
    fileSize: "16 MB",
    downloadUrl: "https://files.catbox.moe/cm8rd4.pdf"
  },
  {
    id: "13",
    title: "Metasploit Penetration Testing Cookbook (3rd Edition)",
    description: "By Daniel Teixeira, Abhinav Singh, and Monika Agarwal. A recipe-based guide to mastering Metasploit for penetration testing. Covers information gathering, scanning, exploitation, post-exploitation, antivirus evasion, firewall bypassing, and integration with tools like Nmap, Nessus, and OpenVAS. Packed with practical step-by-step instructions.",
    fileSize: "19 MB",
    downloadUrl: "https://files.catbox.moe/ra65n2.pdf"
  },
  {
    id: "14",
    title: "SANS SOC Survey 2025",
    description: "By Christopher Crowley. The annual SANS Institute survey covering how security operations centers are built, staffed, and run. Key findings include 79% of SOCs operating 24/7, 85% using endpoint alerts as primary triggers, 42% using AI/ML out-of-box with no customization, and staffing insights showing 2-10 people as the most common SOC size with 3-5 year average tenure.",
    fileSize: "2.1 MB",
    downloadUrl: "https://files.catbox.moe/hp5ggh.pdf"
  },
  {
    id: "15",
    title: "100 SQL Commands",
    description: "A compact reference covering 100 essential SQL commands for database management. Includes queries for data manipulation, table creation, joins, aggregation, indexing, and administration. Perfect quick-reference cheat sheet for developers and database administrators.",
    fileSize: "1.2 MB",
    downloadUrl: "https://files.catbox.moe/rcuqdh.pdf"
  },
  {
    id: "16",
    title: "101 Linux Commands - Open Source eBook",
    description: "A comprehensive open-source ebook covering 101 essential Linux commands from ls and cd to advanced tools like gzip, awk, sed, iptables, and systemctl. Each command includes syntax, options, and practical examples. An excellent desktop reference for system administrators, developers, and anyone working in a Linux environment.",
    fileSize: "768 KB",
    downloadUrl: "https://files.catbox.moe/1mrgat.pdf"
  },
  {
    id: "17",
    title: "Cybersecurity Incident Disclosures: A 13-Year Review (2024)",
    description: "A thorough analysis of cybersecurity incident disclosures by public companies from 2011-2023. Covers trends in incident types, records accessed, information compromised, costs, and discovery timelines. Key finding: 196 incidents disclosed in 2023 (all-time high), with ransomware rising to 20% and average discovery window dropping to 38 days.",
    fileSize: "5.5 MB",
    downloadUrl: "https://files.catbox.moe/ytw9tb.pdf"
  },
  {
    id: "18",
    title: "DoD Cybersecurity-Related Policies and Issuances (2024)",
    description: "A comprehensive reference chart of Department of Defense cybersecurity policies, mapped across NIST CSF categories including Organize, Enable, Anticipate, Prepare, and Authorities. Covers FIPS standards, NIST Special Publications, CNSSP/CNSSI directives, and DoD Instructions for building and operating a trusted DoDIN.",
    fileSize: "724 KB",
    downloadUrl: "https://files.catbox.moe/s8mxq2.pdf"
  },
  {
    id: "19",
    title: "OSINT Investigation Report - SDR Frequency Analysis",
    description: "An OSINT investigation report analyzing suspicious social media activity surrounding a major incident. Demonstrates open-source intelligence gathering techniques including social media profiling, phone number tracking, and digital footprint analysis. Useful case study for understanding practical OSINT methodology.",
    fileSize: "120 KB",
    downloadUrl: "https://files.catbox.moe/5gdpyu.pdf"
  },
  {
    id: "20",
    title: "Active Man-in-the-Middle Detection for the Signal Protocol",
    description: "An academic paper from the University of Oxford presenting an in-band active MitM detection method for the Signal Protocol. Addresses the threat of government coercion and mass surveillance by automating key confirmation without user intervention. Includes proof-of-concept implementation based on the open-source Signal library with minimal performance overhead.",
    fileSize: "1.2 MB",
    downloadUrl: "https://files.catbox.moe/lhte81.pdf"
  },
  {
    id: "21",
    title: "Advanced API Security: OAuth 2.0 and Beyond",
    description: "By Prabath Siriwardena (Apress). A deep dive into securing APIs from HTTP Basic/Digest Authentication through OAuth 1.0, OAuth 2.0, OpenID Connect, UMA, and JWT/JWS/JWE. Covers identity delegation, federation, MAC tokens, and security patterns with real-world examples from Google, Twitter, Facebook, and Salesforce APIs.",
    fileSize: "4.8 MB",
    downloadUrl: "https://files.catbox.moe/nske6k.pdf"
  },
  {
    id: "22",
    title: "Advancing Malicious Website Identification: A Machine Learning Approach",
    description: "An academic paper proposing 77 features and a dataset of 441,701 samples across 9 website classifications to train ML models for malicious website detection. Achieves 95.89% accuracy classifying phishing, spam, malware hosting, C2 servers, and more. Details the top 10 most relevant features including URL embeddings and content-based analysis.",
    fileSize: "864 KB",
    downloadUrl: "https://files.catbox.moe/uwk6g9.pdf"
  },
  {
    id: "23",
    title: "Advanced Python for Cybersecurity",
    description: "Techniques in malware analysis, exploit development, and custom tool creation. Covers network traffic analysis, web security scanning, incident response, forensic analysis, working with threat intelligence APIs, data encryption, cryptography, and ethical hacking with Python. Each chapter blends theory with hands-on implementation.",
    fileSize: "1.6 MB",
    downloadUrl: "https://files.catbox.moe/nzxj4d.pdf"
  },
  {
    id: "24",
    title: "GPS Spoofing Attacks on Wi-Fi 6E AFC Systems",
    description: "An academic paper demonstrating GPS spoofing attacks against the FCC-mandated Automated Frequency Coordination system used in Wi-Fi 6E and Wi-Fi 7. Shows how inexpensive off-the-shelf radio equipment can manipulate AP locations to gain unauthorized spectrum access, cause interference to mission-critical incumbent services, or disable APs entirely.",
    fileSize: "4.1 MB",
    downloadUrl: "https://files.catbox.moe/i6nfcr.pdf"
  },
  {
    id: "25",
    title: "OWASP Multi-Agentic System Threat Modelling Guide",
    description: "The OWASP GenAI Security Project guide for threat modeling multi-agent AI systems using the MAESTRO framework. Covers distributed autonomy, inter-agent communication, emergent behavior, and seven architectural layers of threats. Includes detailed case studies on RPA expense agents, Eliza OS, and Anthropic's MCP Protocol.",
    fileSize: "2.3 MB",
    downloadUrl: "https://files.catbox.moe/safra4.pdf"
  },
  {
    id: "26",
    title: "AMD Sinkclose: Universal SMM Privilege Escalation",
    description: "By Enrique Nissim and Krzysztof Okupski (IOActive). A presentation on a universal privilege escalation vulnerability in AMD processors targeting System Management Mode (SMM). Covers SMM security architecture, TSEG region protection, remapping attacks, and exploit development techniques for achieving the highest execution privilege level on x86 systems.",
    fileSize: "3.1 MB",
    downloadUrl: "https://files.catbox.moe/3w8tsp.pdf"
  },
  {
    id: "27",
    title: "AndroCon: Conning Location Services in Android",
    description: "An academic paper from IIT Delhi demonstrating how semi-processed GPS data (39 features) accessible to Android apps since Android 7 can be used as a covert channel for ambient sensing, human activity recognition, and indoor floor mapping with 99%+ accuracy. A comprehensive longitudinal study across 40,000 sq. km.",
    fileSize: "3.8 MB",
    downloadUrl: "https://files.catbox.moe/0zssl3.pdf"
  },
  {
    id: "28",
    title: "HackerOne Hacker-Powered Security Report 2025/2026 (9th Edition)",
    description: "HackerOne's annual report covering the rise of AI in offensive security. Key stats: 210% increase in valid AI vulnerability reports, $81M total bounty payouts, 84.9K valid reports, and the emergence of bionic hackers combining human creativity with AI speed. Covers AI attack surfaces, prompt injection, MCP security, and industry benchmarks.",
    fileSize: "7.2 MB",
    downloadUrl: "https://files.catbox.moe/7tle5z.pdf"
  },
  {
    id: "29",
    title: "REST API Penetration Testing Report",
    description: "A professional grey-box REST API penetration testing report template following OWASP methodology. Includes executive summary, severity scoring criteria, detailed findings for medium and low severity issues, business risk analysis, and high-level remediation recommendations. A useful reference for understanding API security assessment deliverables.",
    fileSize: "912 KB",
    downloadUrl: "https://files.catbox.moe/dzueh0.pdf"
  },
  {
    id: "30",
    title: "API Security Cheatsheet: 97 JSON Tests for Authentication",
    description: "A practical cheatsheet with 97 JSON test payloads for testing authentication endpoints. Covers empty credentials, null values, SQL injection, Unicode escapes, control characters, nested objects, type confusion, environment variable injection, and more. Essential reference for API security testing and bug bounty hunting.",
    fileSize: "84 KB",
    downloadUrl: "https://files.catbox.moe/1jjx5h.pdf"
  },
  {
    id: "31",
    title: "API Security Checklist (OWASP Top 10)",
    description: "A concise security checklist mapped to the OWASP API Security Top 10. Covers object-level authorization, broken authentication, excessive data exposure, rate limiting, functional-level authorization, mass assignment, security misconfiguration, injection, improper asset management, and insufficient logging and monitoring.",
    fileSize: "24 KB",
    downloadUrl: "https://files.catbox.moe/3m20q8.pdf"
  },
  {
    id: "32",
    title: "API Security Quick Audit Checklist",
    description: "A quick-reference audit checklist by CYTAD for evaluating API security posture. Designed for rapid security assessments covering authentication, authorization, input validation, rate limiting, and common API vulnerability patterns. Compact format ideal for printing or keeping on hand during security reviews.",
    fileSize: "1.7 MB",
    downloadUrl: "https://files.catbox.moe/gshzmx.pdf"
  },
  {
    id: "33",
    title: "APIs Fuzzing for Bug Bounty",
    description: "A comprehensive guide to API fuzzing techniques for bug bounty hunters. Covers REST, GraphQL, and SOAP APIs with tools, wordlists, common vulnerabilities (IDOR, BOLA, injection, race conditions), endpoint bypass techniques, and practical checklists for access, input, processing, and output testing. Packed with actionable tips and tool links.",
    fileSize: "200 KB",
    downloadUrl: "https://files.catbox.moe/sps8yf.pdf"
  },
  {
    id: "34",
    title: "Bug Bounty Playbook v1",
    description: "By Ghostlulz (Alex Thomas). A complete bug bounty methodology covering infrastructure setup, organization workflows, knowledge base building, platform selection, and detailed recon and exploit workflows. Includes traditional, GitHub, cloud, Google dorking, and leaked credentials reconnaissance, plus CVE, CMS, OWASP, and brute force exploit techniques. Essential playbook for anyone serious about bug bounties.",
    fileSize: "9.8 MB",
    downloadUrl: "https://files.catbox.moe/hh3g6o.pdf"
  },
  {
    id: "35",
    title: "Cybersecurity AI: Hacking the AI Hackers via Prompt Injection",
    description: "By Victor Mayoral-Vilches and Per Mannermaa Rynning. Demonstrates how AI-powered cybersecurity tools can be turned against themselves through prompt injection attacks. Presents proof-of-concept exploits against the CAI framework with 100% exploitation success across 14 attack variants, plus a validated four-layer defense architecture achieving complete mitigation. Cutting-edge AI security research.",
    fileSize: "316 KB",
    downloadUrl: "https://files.catbox.moe/ze5oaf.pdf"
  },
  {
    id: "36",
    title: "CAMP: Compositional Amplification Attacks against DNS",
    description: "From USENIX Security 2024 by ETH Zurich researchers. A systematic investigation of application-layer DNS amplification vulnerabilities. Establishes a taxonomy of amplification primitives and discovers a large family of compositional amplification (CAMP) vulnerabilities with message amplification factors reaching thousands. Tested against BIND, Unbound, PowerDNS, and 50+ open resolvers.",
    fileSize: "1.7 MB",
    downloadUrl: "https://files.catbox.moe/dbf2bs.pdf"
  },
  {
    id: "37",
    title: "CCNP Switching Guide",
    description: "By Abhishek Kumar. A comprehensive CCNP-level switching reference covering switching fundamentals, VLANs, trunking and DTP, inter-VLAN routing, VTP, Spanning Tree Protocol (STP/RSTP/MSTP), EtherChannel, switch security (port security, DHCP snooping, DAI), wireless LAN fundamentals, and FHRP redundancy protocols. Packed with configuration examples and troubleshooting commands.",
    fileSize: "5.0 MB",
    downloadUrl: "https://files.catbox.moe/dsfhyy.pdf"
  },
  {
    id: "38",
    title: "CEH v10 Module 00: Introduction & Table of Contents",
    description: "The introduction and complete table of contents for the Certified Ethical Hacker v10 training guide by EC-Council / IPSpecialist. Provides a full overview of all 20 CEH modules, from ethical hacking fundamentals through cryptography. A great starting point to understand the scope and structure of the CEH certification.",
    fileSize: "456 KB",
    downloadUrl: "https://files.catbox.moe/jeakjs.pdf"
  },
  {
    id: "39",
    title: "CEH v10 Module 01: Introduction to Ethical Hacking",
    description: "Covers information security fundamentals, the CIA triad, real-world data breaches (eBay, Home Depot), essential security terminology, hacking phases, attack types, and ethical hacking concepts. Includes labs on NMAP scanning and NetBIOS enumeration. Foundation module for understanding how and why ethical hacking is performed.",
    fileSize: "3.0 MB",
    downloadUrl: "https://files.catbox.moe/zp8yj7.pdf"
  },
  {
    id: "40",
    title: "CEH v10 Module 06: System Hacking",
    description: "Deep dive into system hacking methodology including password cracking (dictionary, brute force, hash injection), privilege escalation, executing applications via trojans and backdoors, hiding files with rootkits and steganography, and covering tracks by clearing logs. Covers both Windows and Linux attack techniques with practical tool examples.",
    fileSize: "8.9 MB",
    downloadUrl: "https://files.catbox.moe/xytns9.pdf"
  },
  {
    id: "41",
    title: "CEH v10 Module 07: Malware Threats",
    description: "Comprehensive coverage of malware including viruses, worms, trojans, ransomware, keyloggers, and spyware. Covers malware propagation methods, trojan construction kits, known trojan ports, infection processes, virus lifecycle, worm analysis, fileless malware, and countermeasures. Includes details on anti-AV evasion techniques and malware analysis approaches.",
    fileSize: "2.6 MB",
    downloadUrl: "https://files.catbox.moe/hdprmu.pdf"
  },
  {
    id: "42",
    title: "CEH v10 Module 08: Sniffing",
    description: "Covers packet sniffing concepts, active vs passive sniffing, hardware protocol analyzers, SPAN port configuration, MAC attacks, DHCP attacks, ARP poisoning, DNS poisoning, MAC spoofing, and sniffing countermeasures. Explains how attackers intercept network traffic and extract credentials from protocols like HTTP, FTP, SMTP, and Telnet.",
    fileSize: "3.0 MB",
    downloadUrl: "https://files.catbox.moe/15ugl2.pdf"
  },
  {
    id: "43",
    title: "CEH v10 Module 09: Social Engineering",
    description: "Explores the non-technical side of hacking through social engineering techniques. Covers human-based attacks (impersonation, eavesdropping, shoulder surfing, dumpster diving), computer-based attacks (phishing, spear phishing, whaling), mobile-based attacks, and insider threats. Includes phases of social engineering attacks and practical countermeasures.",
    fileSize: "2.6 MB",
    downloadUrl: "https://files.catbox.moe/4asc2m.pdf"
  },
  {
    id: "44",
    title: "CEH v10 Module 11: Session Hijacking",
    description: "Covers session hijacking concepts including stealing, guessing, and brute-forcing session IDs. Explains application-level and network-level hijacking, TCP/IP hijacking, cross-site scripting (XSS) for session theft, the difference between spoofing and hijacking, and session hijacking tools and countermeasures. Includes practical attack scenarios.",
    fileSize: "1.1 MB",
    downloadUrl: "https://files.catbox.moe/nhdcd7.pdf"
  },
  {
    id: "45",
    title: "CEH v10 Module 13: Hacking Web Servers",
    description: "Covers web server concepts, security issues, and attack techniques including DoS/DDoS, DNS hijacking, DNS amplification, directory traversal, man-in-the-middle attacks, phishing, website defacement, and web cache poisoning. Explores both open-source (Apache, Nginx) and IIS architectures, plus web server hardening and defense strategies.",
    fileSize: "1.1 MB",
    downloadUrl: "https://files.catbox.moe/c2wwzj.pdf"
  },
  {
    id: "46",
    title: "CEH v10 Module 14: Hacking Web Applications",
    description: "Explores web application security including application architecture, OWASP Top 10 threats, unvalidated inputs, parameter tampering, SQL injection, XSS, CSRF, broken session management, buffer overflows, and security misconfiguration. Covers web application pentesting methodology, vulnerability scanning tools, and defense techniques.",
    fileSize: "768 KB",
    downloadUrl: "https://files.catbox.moe/9o3awq.pdf"
  },
  {
    id: "47",
    title: "CEH v10 Module 15: SQL Injection",
    description: "In-depth coverage of SQL injection attacks including in-band (error-based, union-based), inferential/blind (boolean, time-based), and out-of-band techniques. Covers SQL query fundamentals, injection tools (sqlmap, Havij), evasion techniques, and defense strategies. Includes practical examples of SELECT, DELETE, UPDATE, and INSERT injection payloads.",
    fileSize: "748 KB",
    downloadUrl: "/pdfs/ceh-v10-module-15-sql-injection.pdf"
  },
  {
    id: "48",
    title: "CEH v10 Module 16: Hacking Wireless Networks",
    description: "Covers wireless networking concepts (GSM, Wi-Fi, Bluetooth), 802.11 standards, SSID, authentication modes, wireless encryption (WEP, WPA, WPA2), wireless attack techniques (rogue APs, evil twin, deauthentication, cracking), wireless hacking tools (Aircrack-ng), and wireless security best practices. Includes Bluetooth hacking and countermeasures.",
    fileSize: "1.4 MB",
    downloadUrl: "/pdfs/ceh-v10-module-16-wireless-networks.pdf"
  },
  {
    id: "49",
    title: "CEH v10 Module 17: Hacking Mobile Platforms",
    description: "Covers mobile platform attack vectors, OWASP Top 10 Mobile risks, Android and iOS architecture and security models, jailbreaking, rooting, mobile device management (MDM), mobile malware, app sandboxing, reverse engineering mobile apps, and mobile security tools. Addresses threats from open Wi-Fi, Bluetooth, SMS phishing, and malicious apps.",
    fileSize: "1.1 MB",
    downloadUrl: "/pdfs/ceh-v10-module-17-mobile-platforms.pdf"
  },
  {
    id: "50",
    title: "CEH v10 Module 18: IoT Hacking",
    description: "Covers Internet of Things concepts, IoT architecture (5-layer model), communication models (device-to-device, device-to-cloud, device-to-gateway), IoT technologies and protocols, OWASP IoT Top 10 vulnerabilities, IoT attack surfaces, hacking methodology for IoT devices, and security tools for IoT pentesting. Explores threats to smart homes, industrial systems, and connected devices.",
    fileSize: "856 KB",
    downloadUrl: "/pdfs/ceh-v10-module-18-iot-hacking.pdf"
  },
  {
    id: "51",
    title: "CEH v10 Module 19: Cloud Computing",
    description: "Covers cloud computing fundamentals including IaaS, PaaS, and SaaS models, deployment types (public, private, hybrid, community), NIST reference architecture, cloud security benefits and threats, container technology (Docker, Kubernetes), serverless computing, and cloud pentesting tools. Addresses side-channel attacks, wrapping attacks, and cloud-specific vulnerabilities.",
    fileSize: "1.1 MB",
    downloadUrl: "/pdfs/ceh-v10-module-19-cloud-computing.pdf"
  },
  {
    id: "52",
    title: "CEH v10 Module 20: Cryptography",
    description: "Covers cryptography concepts including symmetric (DES, AES, 3DES) and asymmetric (RSA, DSA, Diffie-Hellman) encryption, hashing algorithms (MD5, SHA), PKI and certificate authorities, digital signatures, email encryption (PGP, S/MIME), disk encryption, SSL/TLS, cryptanalysis techniques, and cryptographic attack methods. Essential foundations for understanding modern security.",
    fileSize: "1.4 MB",
    downloadUrl: "/pdfs/ceh-v10-module-20-cryptography.pdf"
  }
];

export const socialLinks: SocialLink[] = [
  { id: "1", platform: "linkedin", url: "https://www.linkedin.com/in/jared-james-65b916293/", icon: "linkedin" },
  { id: "2", platform: "twitter", url: "https://x.com/Jaredsnacks65", icon: "twitter" },
  { id: "3", platform: "discord", url: "https://discord.com/users/snacksalot_80013", icon: "discord" },
  { id: "4", platform: "email", url: "jsjames@snacksalot.org", icon: "email" },
  { id: "5", platform: "telegram", url: "#", icon: "telegram" },
  { id: "6", platform: "facebook", url: "#", icon: "facebook" },
  { id: "7", platform: "instagram", url: "#", icon: "instagram" },
  { id: "8", platform: "github", url: "#", icon: "github" },
  { id: "9", platform: "youtube", url: "#", icon: "youtube" }
];

export interface MaestroEntry {
  id: string;
  weekNumber: number;
  title: string;
  date: string;
  content: string;
}

export const maestroEntries: MaestroEntry[] = [
  {
    id: "1",
    weekNumber: 1,
    title: "Getting Started",
    date: "Week 1",
    content: "My journey at Maestro AI University begins! This first week has been all about orientation and getting familiar with the platform. The AI-powered learning system is incredibly intuitive, and I'm impressed by how personalized the experience already feels. Can't wait to dive deeper into the coursework!"
  }
];
