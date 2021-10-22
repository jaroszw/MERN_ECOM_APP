import express from "express";
import { postUser, deleteUser, getAdminUser } from "../controlers/user.js";
import {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from "../routes/verifyToken.js";

const router = express.Router();

router.put("/:id", verifyTokenAndAuthorization, postUser);
router.delete("/:id", verifyTokenAndAuthorization, deleteUser);
router.get("/:id", verifyTokenAndAdmin, getAdminUser);

export default router;
