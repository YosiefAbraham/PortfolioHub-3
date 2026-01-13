import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Gallery images directory
const galleryDir = path.join(__dirname, "../client/public/images/gallery");

// Ensure gallery directory exists
if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

interface GalleryImage {
  id: string;
  url: string;
  alt?: string;
}

// Function to read images from the gallery directory
function getGalleryImages(): GalleryImage[] {
  try {
    const files = fs.readdirSync(galleryDir);
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg'];
    
    const images = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return imageExtensions.includes(ext) && file !== 'README.md';
      })
      .map((file, index) => ({
        id: `img-${index}`,
        url: `/images/gallery/${file}`,
        alt: file.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " "),
      }));
    
    return images;
  } catch (error) {
    console.error("Error reading gallery directory:", error);
    return [];
  }
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Gallery API routes
  
  // Get all gallery images
  app.get("/api/gallery/images", (req, res) => {
    const images = getGalleryImages();
    res.json(images);
  });

  const httpServer = createServer(app);

  return httpServer;
}
