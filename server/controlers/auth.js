import User from '../models/User.js';
import CryptoJS from 'crypto-js';

export const registerUser = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json('No user found');

    const hashPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SECRET
    );
    const OryginalPassword = hashPassword.toString(CryptoJS.enc.Utf8);

    OryginalPassword !== req.body.password &&
      res.status(401).json('Wrong credentials');

    const { password, ...others } = user._doc;
    console.log(others);

    res.status(200).json(others);
  } catch (error) {
    console.log(error);
  }
};
