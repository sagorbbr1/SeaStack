import "dotenv/config";

import dns from "node:dns/promises";
import app from "./app.js";
import connectDB from "./config/db.js";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

console.log("🔧 Environment Variables Loaded:");
console.log(`PORT: ${process.env.PORT}`);
console.log(`MONGO_URI: ${process.env.MONGO_URI}`);
console.log(`CLIENT_URL: ${process.env.CLIENT_URL}`);

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`🌐 http://localhost:${PORT}`);
      console.log(`🔗 Client URL: ${process.env.CLIENT_URL}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();