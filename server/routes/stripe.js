import express from 'express';
import { payWithStripe } from '../controlers/stripe.js';

const router = express.Router();

//Register
router.post('/stripe', payWithStripe);

export default router;
