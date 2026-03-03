import { 
  type User, type InsertUser,
  type EbikeService, type InsertEbikeService,
  type Project, type InsertProject,
  type Skill, type InsertSkill,
  type Link, type InsertLink,
  type SocialLink, type InsertSocialLink
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  getServices(): Promise<EbikeService[]>;
  createService(service: InsertEbikeService): Promise<EbikeService>;
  
  getProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  
  getSkills(): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  
  getLinks(): Promise<Link[]>;
  createLink(link: InsertLink): Promise<Link>;
  
  getSocialLinks(): Promise<SocialLink[]>;
  createSocialLink(socialLink: InsertSocialLink): Promise<SocialLink>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private services: Map<string, EbikeService>;
  private projects: Map<string, Project>;
  private skills: Map<string, Skill>;
  private links: Map<string, Link>;
  private socialLinks: Map<string, SocialLink>;

  constructor() {
    this.users = new Map();
    this.services = new Map();
    this.projects = new Map();
    this.skills = new Map();
    this.links = new Map();
    this.socialLinks = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getServices(): Promise<EbikeService[]> {
    return Array.from(this.services.values());
  }

  async createService(insertService: InsertEbikeService): Promise<EbikeService> {
    const id = randomUUID();
    const service: EbikeService = { ...insertService, id };
    this.services.set(id, service);
    return service;
  }

  async getProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }

  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = randomUUID();
    const project: Project = { 
      ...insertProject, 
      id,
      link: insertProject.link ?? null,
      featured: insertProject.featured ?? false
    };
    this.projects.set(id, project);
    return project;
  }

  async getSkills(): Promise<Skill[]> {
    return Array.from(this.skills.values());
  }

  async createSkill(insertSkill: InsertSkill): Promise<Skill> {
    const id = randomUUID();
    const skill: Skill = { ...insertSkill, id };
    this.skills.set(id, skill);
    return skill;
  }

  async getLinks(): Promise<Link[]> {
    return Array.from(this.links.values());
  }

  async createLink(insertLink: InsertLink): Promise<Link> {
    const id = randomUUID();
    const link: Link = { 
      ...insertLink, 
      id,
      description: insertLink.description ?? null,
      icon: insertLink.icon ?? null
    };
    this.links.set(id, link);
    return link;
  }

  async getSocialLinks(): Promise<SocialLink[]> {
    return Array.from(this.socialLinks.values());
  }

  async createSocialLink(insertSocialLink: InsertSocialLink): Promise<SocialLink> {
    const id = randomUUID();
    const socialLink: SocialLink = { ...insertSocialLink, id };
    this.socialLinks.set(id, socialLink);
    return socialLink;
  }
}

export const storage = new MemStorage();
