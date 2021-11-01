import express from 'express';
import {
  createProduct,
  updateProduct,
  deleteProduct,
  findProduct,
  findAllProducts,
} from '../controlers/products.js';
import {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from '../routes/verifyToken.js';

const router = express.Router();

router.post('/', verifyTokenAndAdmin, createProduct);
router.put('/:id', verifyTokenAndAdmin, updateProduct);
router.delete('/:id', verifyTokenAndAdmin, deleteProduct);
router.get('/find/:id', findProduct);
router.get('/', findAllProducts);

export default router;
