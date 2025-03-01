const stripe = require("../../config/stripe");
const Order = require("../../models/Order");
const Cart = require("../../models/Cart");
const Product = require("../../models/Product");

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

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: cartItems.map((item) => ({
        price_data: {
          currency: "INR",
          product_data: { name: item.title },
          unit_amount: Math.round(item.price * 100), 
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `http://localhost:5173/shop/stripe-return`,
      cancel_url: "http://localhost:5173/shop/stripe-cancel",
    });

    res.status(201).json({
      success: true,
      checkoutURL: session.url,
      orderId: newlyCreatedOrder._id,
    });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: "Error while creating Stripe payment" });
  }
};

const capturePayment = async (req, res) => {
  try {
    const { orderId, paymentIntentId } = req.body;

    let order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ success: false, message: "Order not found" });
    }

    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    if (paymentIntent.status !== "succeeded") {
      return res.status(400).json({ success: false, message: "Payment not completed" });
    }

    order.paymentStatus = "paid";
    order.orderStatus = "confirmed";
    order.paymentId = paymentIntentId;

    for (let item of order.cartItems) {
      let product = await Product.findById(item.productId);
      if (!product || product.totalStock < item.quantity) {
        return res.status(400).json({ success: false, message: `Not enough stock for ${item.title}` });
      }
      product.totalStock -= item.quantity;
      await product.save();
    }

    await Cart.findByIdAndDelete(order.cartId);
    await order.save();

    res.status(200).json({ success: true, message: "Order confirmed", data: order });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: "Error capturing payment" });
  }
};

const getAllOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const orders = await Order.find({ userId });

    if (!orders.length) {
      return res.status(404).json({ success: false, message: "No orders found!" });
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
      return res.status(404).json({ success: false, message: "Order not found!" });
    }

    res.status(200).json({ success: true, data: order });
  } catch (e) {
    console.error(e);
    res.status(500).json({ success: false, message: "Error fetching order details" });
  }
};

module.exports = {
  createOrder,
  capturePayment,
  getAllOrdersByUser,
  getOrderDetails,
};
