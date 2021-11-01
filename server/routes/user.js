import express from 'express';
import {
  postUser,
  deleteUser,
  findUser,
  findAllUsers,
  userStats,
} from '../controlers/user.js';
import {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} from '../routes/verifyToken.js';

const router = express.Router();

router.put('/:id', verifyTokenAndAuthorization, postUser);
router.get('/delete/:id', verifyTokenAndAuthorization, deleteUser);
router.get('/find/:id', verifyTokenAndAdmin, findUser);
router.get('/', verifyTokenAndAdmin, findAllUsers);
router.get('/stats', verifyTokenAndAdmin, userStats);

export default router;
