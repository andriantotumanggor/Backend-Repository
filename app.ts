import express from "express";
import dotenv from "dotenv";

// Load environment variables dari file .env
dotenv.config();

// Inisialisasi Express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Server is running 🚀" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server listening at http://localhost:${PORT}`);
});
