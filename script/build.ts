import { build as viteBuild } from "vite";
import { cp, access } from "fs/promises";
import path from "path";

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function buildAll() {
  console.log("building client...");
  await viteBuild();

  const rootDir = path.resolve(import.meta.dirname, "..");
  const publicDir = path.resolve(rootDir, "public");
  const outDir = path.resolve(rootDir, "dist/public");

  console.log("copying Cloudflare config files...");
  
  if (await fileExists(path.join(publicDir, "_redirects"))) {
    await cp(path.join(publicDir, "_redirects"), path.join(outDir, "_redirects"));
  }
  if (await fileExists(path.join(publicDir, "_headers"))) {
    await cp(path.join(publicDir, "_headers"), path.join(outDir, "_headers"));
  }
  
  console.log("done!");
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
