/** CONNECT TO LOWDB */
const db = require("../lib/db-setup");
const Order = require("../models/Order");

exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find();
    res.send(orders);
  } catch (error) {
    next(error);
  }
};

exports.getOrder = async (req, res, next) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) throw new Error(`No order with id: ${req.params.id}`);
    res.send(order);
  } catch (error) {
    next(error);
  }
};

exports.addOrder = async (req, res, next) => {
  try {
    const orders = new Order(req.body);
    const data = await orders.save();

    res.send(data);
  } catch (error) {
    next(error);
  }
};

exports.updateOrder = async (req, res, next) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!order) throw new Error(`No order with id: ${req.params.id}`);

    res.send(order);
  } catch (error) {
    next(error);
  }
};

exports.deleteOrder = async (req, res, next) => {
  const { id } = req.params;
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) throw new Error(`No order with id: ${req.params.id}`);
    res.send(order);
  } catch (error) {
    next(error);
  }
};
