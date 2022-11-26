
import { Router } from "express";
import { envProducts } from "../controllers/prodoctsController.js";
import { userMiddleware } from "../middleware/userMiddeware.js";

const router = Router();

router.use(userMiddleware);
router.get("/products", envProducts);
router.get("/requests", envRequests);
router.post("/payment", processPayment);

export default router;  