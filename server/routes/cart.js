import express from 'express';
import {
  createCart,
  updateCart,
  deleteCart,
  findUserCart,
  getAllCarts,
} from '../controlers/cart.js';
import {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
  verifyToken,
} from '../routes/verifyToken.js';

const router = express.Router();

router.post('/', verifyToken, createCart);
router.put('/:id', verifyTokenAndAuthorization, updateCart);
router.delete('/:id', verifyTokenAndAuthorization, deleteCart);
router.get('/find/:id', findUserCart);
router.get('/', verifyTokenAndAdmin, getAllCarts);

export default router;
