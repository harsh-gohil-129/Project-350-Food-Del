import authMiddleware from "../middleware/auth.js";
import express from "express";
import { placeOrder } from "../controllers/order";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);

export default orderRouter;
