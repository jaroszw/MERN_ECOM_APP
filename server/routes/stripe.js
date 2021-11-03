import express from "express";
import { payWithStripe } from "../controlers/stripe.js";

const router = express.Router();

//Register
router.post("/payment", payWithStripe);

export default router;
