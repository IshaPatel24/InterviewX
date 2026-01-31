import app from "../backend/src/server.js";
import { connectDB } from "../backend/src/lib/db.js";

// Ensure DB is connected
connectDB();

export default app;
