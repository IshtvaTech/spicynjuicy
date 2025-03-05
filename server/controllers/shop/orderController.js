const stripe = require("../../config/stripe");
const mongoose = require("mongoose");
const Order = require("../../models/Order");
const Cart = require("../../models/Cart");
const Product = require("../../models/Product");

const FRONTEND_URL = process.env.VITE_API_URL || "http://localhost:5173";
const CURRENCY = "INR";

const createOrder = async (req, res) => {
  try {
    const {
      userId,
      cartItems,
      addressInfo,
      orderStatus,
      paymentMethod,
      paymentStatus,
      totalAmount,
      orderDate,
      orderUpdateDate,
      cartId,
    } = req.body;

    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ success: false, message: "Cart is empty" });
    }

    if (!userId || !cartId) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid user or cart ID" });
    }

    for (let item of cartItems) {
      let product = await Product.findById(item.productId);
      if (!product || product.totalStock < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `Not enough stock for ${item.title}`,
        });
      }
    }

    const newlyCreatedOrder = new Order({
      userId,
      cartId,
      cartItems,
      addressInfo,
      orderStatus,
      paymentMethod,
      paymentStatus,
      totalAmount,
      orderDate,
      orderUpdateDate,
    });

    await newlyCreatedOrder.save();

    let session;
    try {
      session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: cartItems.map((item) => ({
          price_data: {
            currency: CURRENCY,
            product_data: { name: item.title },
            unit_amount: Math.round(item.price * 100),
          },
          quantity: item.quantity,
        })),
        mode: "payment",
        success_url: `${FRONTEND_URL}/shop/stripe-return`,
        cancel_url: `${FRONTEND_URL}/shop/stripe-cancel`,
      });
    } catch (error) {
      console.error("Stripe key:", process.env.VITE_STRIPE_SECRET_KEY );
      console.error("Stripe Error:", error.message, error);

      return res
        .status(500)
        .json({ success: false, message: "Stripe session creation failed" });
    }

    res.status(201).json({
      success: true,
      checkoutURL: session.url,
      orderId: newlyCreatedOrder._id,
    });
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .json({ success: false, message: "Error while creating Stripe payment" });
  }
};

const capturePayment = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const { orderId, paymentIntentId } = req.body;

    const order = await Order.findById(orderId).session(session);
    if (!order) {
      throw new Error("Order not found");
    }

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    if (paymentIntent.status !== "succeeded") {
      throw new Error("Payment not completed");
    }

    order.paymentStatus = "paid";
    order.orderStatus = "confirmed";
    order.paymentId = paymentIntentId;
    await order.save({ session });

    for (let item of order.cartItems) {
      const product = await Product.findById(item.productId).session(session);
      if (!product || product.totalStock < item.quantity) {
        throw new Error(`Not enough stock for ${item.title}`);
      }
      product.totalStock -= item.quantity;
      await product.save({ session });
    }

    await Cart.findByIdAndDelete(order.cartId, { session });
    await session.commitTransaction();
    session.endSession();

    res
      .status(200)
      .json({ success: true, message: "Order confirmed", data: order });
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    res.status(500).json({ success: false, message: error.message });
  }
};

const getAllOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ userId });

    if (!orders.length) {
      return res
        .status(404)
        .json({ success: false, message: "No orders found!" });
    }

    res.status(200).json({ success: true, data: orders });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: "Error fetching orders" });
  }
};

const getOrderDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await Order.findById(id);

    if (!order) {
      return res
        .status(404)
        .json({ success: false, message: "Order not found!" });
    }

    res.status(200).json({ success: true, data: order });
  } catch (e) {
    console.error(e);
    res
      .status(500)
      .json({ success: false, message: "Error fetching order details" });
  }
};

module.exports = {
  createOrder,
  capturePayment,
  getAllOrdersByUser,
  getOrderDetails,
};
