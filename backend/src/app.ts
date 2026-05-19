import express, {Application} from "express";
import cors from "cors";
import recordRouter from "./routes/records.routes";

const app:Application = express();

// Middleware
app.use(cors());
app.use(express.json());

app.use("/api/records", recordRouter);


export default app;