import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import Auth from "./routes/auth.route.js";
import publicationRoutes from "./routes/publicationRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(Auth);
app.use(publicationRoutes);

const port = process.env.PORT;
app.listen(port, () => console.log(`Server running in port: ${port}`));