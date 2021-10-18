import express from 'express';
import { postUser } from '../controlers/user.js';
import {
  verifyTokenAndAuthorization,
  verifyToken,
} from '../routes/verifyToken.js';

const router = express.Router();

router.put('/:id', verifyToken, postUser);

export default router;
