let app;
let dbConnected = false;

try {
    // Import with error handling
    const serverModule = await import("../backend/src/server.js");
    app = serverModule.default;

    // Connect to DB on cold start
    const { connectDB } = await import("../backend/src/lib/db.js");
    connectDB().then(() => {
        dbConnected = true;
        console.log("DB connected successfully");
    }).catch(err => {
        console.error("DB connection error:", err);
    });
} catch (error) {
    console.error("Failed to initialize app:", error);
    // Create a minimal error handler
    app = (req, res) => {
        res.status(500).json({
            error: "Server initialization failed",
            message: error.message,
            stack: error.stack
        });
    };
}

export default app;
