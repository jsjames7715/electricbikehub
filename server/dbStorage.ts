import { db } from "./db";
import { eq } from "drizzle-orm";
import { 
  users, ebikeServices, projects, skills, links, socialLinks,
  type User, type InsertUser,
  type EbikeService, type InsertEbikeService,
  type Project, type InsertProject,
  type Skill, type InsertSkill,
  type Link, type InsertLink,
  type SocialLink, type InsertSocialLink
} from "@shared/schema";
import { IStorage } from "./storage";

export class DbStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(user: InsertUser): Promise<User> {
    const result = await db.insert(users).values(user).returning();
    return result[0];
  }

  async getServices(): Promise<EbikeService[]> {
    return await db.select().from(ebikeServices);
  }

  async createService(service: InsertEbikeService): Promise<EbikeService> {
    const result = await db.insert(ebikeServices).values(service).returning();
    return result[0];
  }

  async getProjects(): Promise<Project[]> {
    return await db.select().from(projects);
  }

  async createProject(project: InsertProject): Promise<Project> {
    const result = await db.insert(projects).values(project).returning();
    return result[0];
  }

  async getSkills(): Promise<Skill[]> {
    return await db.select().from(skills);
  }

  async createSkill(skill: InsertSkill): Promise<Skill> {
    const result = await db.insert(skills).values(skill).returning();
    return result[0];
  }

  async getLinks(): Promise<Link[]> {
    return await db.select().from(links);
  }

  async createLink(link: InsertLink): Promise<Link> {
    const result = await db.insert(links).values(link).returning();
    return result[0];
  }

  async getSocialLinks(): Promise<SocialLink[]> {
    return await db.select().from(socialLinks);
  }

  async createSocialLink(socialLink: InsertSocialLink): Promise<SocialLink> {
    const result = await db.insert(socialLinks).values(socialLink).returning();
    return result[0];
  }
}

export const dbStorage = new DbStorage();
