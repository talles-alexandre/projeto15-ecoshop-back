import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(authRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Servidor iniciado!!!");
});
