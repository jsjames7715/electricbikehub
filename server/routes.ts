import type { Express } from "express";
import { createServer, type Server } from "http";
import { dbStorage } from "./dbStorage";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.get("/api/services", async (req, res) => {
    try {
      const services = await dbStorage.getServices();
      res.json(services);
    } catch (error) {
      console.error("Error fetching services:", error);
      res.status(500).json({ error: "Failed to fetch services" });
    }
  });

  app.get("/api/projects", async (req, res) => {
    try {
      const projects = await dbStorage.getProjects();
      res.json(projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).json({ error: "Failed to fetch projects" });
    }
  });

  app.get("/api/skills", async (req, res) => {
    try {
      const skills = await dbStorage.getSkills();
      res.json(skills);
    } catch (error) {
      console.error("Error fetching skills:", error);
      res.status(500).json({ error: "Failed to fetch skills" });
    }
  });

  app.get("/api/links", async (req, res) => {
    try {
      const links = await dbStorage.getLinks();
      res.json(links);
    } catch (error) {
      console.error("Error fetching links:", error);
      res.status(500).json({ error: "Failed to fetch links" });
    }
  });

  app.get("/api/social-links", async (req, res) => {
    try {
      const socialLinks = await dbStorage.getSocialLinks();
      res.json(socialLinks);
    } catch (error) {
      console.error("Error fetching social links:", error);
      res.status(500).json({ error: "Failed to fetch social links" });
    }
  });

  return httpServer;
}
