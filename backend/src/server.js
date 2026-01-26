import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use(
  cors({
    origin: "*", // later you can restrict this
  }),
);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔹 Load env FIRST
dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

import app from "./app.js";

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
