const { imageUploadUtil } = require("../../config/cloudinary");
const Product = require("../../models/Product");

// ✅ Handle Image Upload with Cloudinary
const handleImageUpload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded!",
      });
    }

    const result = await imageUploadUtil(req.file.path);

    res.json({
      success: true,
      url: result.secure_url, // Return only the URL
    });
  } catch (error) {
    console.error("Image Upload Error:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred during image upload",
    });
  }
};

// ✅ Add New Product
const addProduct = async (req, res) => {
  try {
    const {
      image,
      title,
      description,
      category,
      price,
      salePrice,
      totalStock,
    } = req.body;

    if (!title || !category || !price || !totalStock) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields!",
      });
    }

    if (salePrice && salePrice > price) {
      return res.status(400).json({
        success: false,
        message: "Sale price cannot be greater than actual price",
      });
    }

    const newProduct = await Product.create({
      image,
      title,
      description,
      category,
      price,
      salePrice,
      totalStock,
    });

    res.status(201).json({
      success: true,
      data: newProduct,
    });
  } catch (error) {
    console.error("Add Product Error:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while adding product",
    });
  }
};

// ✅ Fetch All Products
const fetchAllProducts = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.error("Fetch Products Error:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while fetching products",
    });
  }
};

// ✅ Edit Product
const editProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      image,
      title,
      description,
      category,
      price,
      salePrice,
      totalStock,
    } = req.body;

    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    if (salePrice && salePrice > price) {
      return res.status(400).json({
        success: false,
        message: "Sale price cannot be greater than actual price",
      });
    }

    // ✅ Efficient update
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { image, title, description, category, price, salePrice, totalStock },
      { new: true, runValidators: true }
    );

    res.status(200).json({
      success: true,
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Edit Product Error:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while updating product",
    });
  }
};

// ✅ Delete Product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Delete Product Error:", error);
    res.status(500).json({
      success: false,
      message: "Error occurred while deleting product",
    });
  }
};

module.exports = {
  handleImageUpload,
  addProduct,
  fetchAllProducts,
  editProduct,
  deleteProduct,
};
