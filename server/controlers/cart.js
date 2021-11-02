import Cart from '../models/Cart.js';
import CryptoJS from 'crypto-js';

export const createCart = async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    return res.status(200).json('Cart has been deleted sucesfully');
  } catch (error) {
    res.status(400).json(err);
  }
};

export const findUserCart = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    return res.status(200).json(cart);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find();
    return res.status(200).json(carts);
  } catch (error) {
    res.status(400).json(error);
  }
};
