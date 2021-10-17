import express from 'express';
import { registerUser, loginUser } from '../controlers/auth.js';

const router = express.Router();

//Register
router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;
