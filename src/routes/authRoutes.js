import { Router } from "express";
import { loginUser, createUser } from "../controllers/authController.js";
const router = Router();
router.post("/sign-in", loginUser);
router.post("/", createUser);

export default router;
