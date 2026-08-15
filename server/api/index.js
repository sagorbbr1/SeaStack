import "dotenv/config";
import dns from "node:dns";

import app from "../src/app.js";
import connectDB from "../src/config/db.js";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

let isConnected = false;

const handler = async (req, res) => {
  try {
    if (!isConnected) {
      await connectDB();
      isConnected = true;
      console.log("✅ Database connected");
    }

    return app(req, res);
  } catch (error) {
    console.error("❌ Server error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export default handler;