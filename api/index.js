import app from "../backend/src/server.js";
import { connectDB } from "../backend/src/lib/db.js";

// Connect to DB on cold start (non-blocking)
connectDB().catch(err => console.error("DB connection error:", err));

export default app;
