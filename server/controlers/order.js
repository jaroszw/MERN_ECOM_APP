import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteOrder = async (req, res) => {
  try {
    const deleted = await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order has been deleted sucesfully");
  } catch (error) {
    res.status(400).json(err);
  }
};

export const findOrders = async (req, res) => {
  try {
    const orders = await Order.find(req.params.id);
    res.status(200).json(orders);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(400).json(error);
  }
};

// GET MONTHLY INCOME

export const getIncome = async (req, res) => {
  const productId = req.query.pid;

  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: prevMonth },
          ...(productId && {
            products: { $elemMatch: { productId: productId } },
          }),
        },
      },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);

    res.status(200).json(income);
  } catch (error) {
    res.status(200).json(error);
  }
};
