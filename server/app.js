import express from "express";
import cors from "cors";
import { login } from "./controller/auth.controller.js";

const app = express();
app.use(express.json());
app.use(cors());

app.post("/login", login);

export default app;
