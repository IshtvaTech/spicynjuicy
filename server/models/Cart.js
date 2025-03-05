const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, "Quantity must be at least 1"],
        },
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false, // ✅ Removes `__v` field from documents
  }
);

// ✅ Prevent duplicate product entries in the cart
CartSchema.index({ userId: 1, "items.productId": 1 }, { unique: true });

module.exports = mongoose.model("Cart", CartSchema);
