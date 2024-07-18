import express from "express";
import noteRoutes from "./routes/notes.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/", noteRoutes);
app.listen(8800);
