import { Router } from "express";
import { loginUser, createUser } from "../controllers/authController.js";
const router = Router();
router.post("/sign-in", loginUser);
router.post("/sign-up", createUser);

export default router;
