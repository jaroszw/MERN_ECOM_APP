import express from "express";
import {
  createOrder,
  updateOrder,
  deleteOrder,
  findOrders,
  getAllOrders,
  getIncome,
} from "../controlers/order.js";
import {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken,
} from "../routes/verifyToken.js";

const router = express.Router();

router.post("/", verifyToken, createOrder);
router.put("/:id", verifyTokenAndAdmin, updateOrder);
router.delete("/:id", verifyTokenAndAdmin, deleteOrder);
router.get("/find/:id", verifyTokenAndAuthorization, findOrders);
router.get("/", verifyTokenAndAdmin, getAllOrders);
router.get("/income", verifyTokenAndAdmin, getIncome);

export default router;
