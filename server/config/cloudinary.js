require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const multer = require("multer");

// Validate environment variables
if (
  !process.env.CLOUDINARY_CLOUD_NAME ||
  !process.env.CLOUDINARY_API_KEY ||
  !process.env.CLOUDINARY_API_SECRET
) {
  console.error(
    "❌ Cloudinary environment variables are missing in the .env file"
  );
  process.exit(1); // Stop execution if credentials are missing
}

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Set up memory storage for Multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Utility function to upload images
const imageUploadUtil = async (fileBuffer, fileFormat) => {
  try {
    const result = await cloudinary.uploader
      .upload_stream(
        { resource_type: "auto", format: fileFormat },
        (error, result) => {
          if (error) throw error;
          return result;
        }
      )
      .end(fileBuffer);

    return result;
  } catch (error) {
    console.error("❌ Cloudinary upload failed:", error);
    throw new Error("Image upload failed");
  }
};

module.exports = { upload, imageUploadUtil };
