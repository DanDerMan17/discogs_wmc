import app from "./app"
import {connectDB, initDB} from "./db/db";

const PORT = 3000;

async function startServer() {
    try {
        await connectDB();
        await initDB();

        app.listen(PORT, () => {
            console.log("Server running on port", PORT);
        });
    } catch (e) {
        console.log("Failed to run Server! ", e);
        process.exit();
    }
}

startServer();