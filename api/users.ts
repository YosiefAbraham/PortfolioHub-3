import type { VercelRequest, VercelResponse } from "@vercel/node";
import { storage } from "../server/storage";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,DELETE,PATCH,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  try {
    switch (req.method) {
      case "GET":
        if (req.query.id) {
          const user = await storage.getUser(req.query.id as string);
          if (!user) {
            return res.status(404).json({ message: "User not found" });
          }
          return res.status(200).json(user);
        }
        return res.status(400).json({ message: "User ID is required" });

      case "POST":
        const { username, password } = req.body;
        if (!username || !password) {
          return res
            .status(400)
            .json({ message: "Username and password are required" });
        }

        const existingUser = await storage.getUserByUsername(username);
        if (existingUser) {
          return res.status(409).json({ message: "Username already exists" });
        }

        const newUser = await storage.createUser({ username, password });
        return res.status(201).json(newUser);

      default:
        return res.status(405).json({ message: "Method not allowed" });
    }
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
