const Order = require("../../models/Order");

// ✅ Get all orders
const getAllOrdersOfAllUsers = async (req, res) => {
  try {
    const orders = await Order.find().lean(); // .lean() improves performance by returning plain JS objects

    if (!orders.length) {
      return res.status(404).json({
        success: false,
        message: "No orders found!",
      });
    }

    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};

// ✅ Get order details (Admin)
const getOrderDetailsForAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Order ID is required!",
      });
    }

    const order = await Order.findById(id).lean();

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    }

    res.status(200).json({
      success: true,
      data: order,
    });
  } catch (error) {
    console.error(`Error fetching order [ID: ${req.params.id}]:`, error);
    res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};

// ✅ Update order status
const updateOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { orderStatus } = req.body;

    if (!id || !orderStatus) {
      return res.status(400).json({
        success: false,
        message: "Order ID and new status are required!",
      });
    }

    const order = await Order.findByIdAndUpdate(
      id,
      { orderStatus },
      { new: true } // Returns updated order
    ).lean();

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Order status updated successfully!",
      updatedOrder: order,
    });
  } catch (error) {
    console.error(`Error updating order [ID: ${req.params.id}]:`, error);
    res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};

module.exports = {
  getAllOrdersOfAllUsers,
  getOrderDetailsForAdmin,
  updateOrderStatus,
};
