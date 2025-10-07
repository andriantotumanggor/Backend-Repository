import { Router } from "express";
import temperatureRoutes from "./temperatureRoutes";

const router = Router();

router.use("/temperatures", temperatureRoutes);

router.get("/", (req, res) => {
  res.json({ message: "API is up and running 🚀" });
});

export default router;
