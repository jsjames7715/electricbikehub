import { build as viteBuild } from "vite";
import { cp } from "fs/promises";
import path from "path";

async function buildAll() {
  console.log("building client...");
  await viteBuild();

  const rootDir = path.resolve(import.meta.dirname, "..");
  const publicDir = path.resolve(rootDir, "public");
  const outDir = path.resolve(rootDir, "dist/public");

  console.log("copying Cloudflare config files...");
  await cp(path.join(publicDir, "_redirects"), path.join(outDir, "_redirects"));
  await cp(path.join(publicDir, "_headers"), path.join(outDir, "_headers"));
  
  console.log("done!");
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
