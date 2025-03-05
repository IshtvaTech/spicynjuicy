require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is not defined in .env file");
    }

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    process.exit(1);
  }
};

// Event listeners for better debugging
mongoose.connection.on("connected", () => console.log("✅ MongoDB Connected"));
mongoose.connection.on("error", (err) =>
  console.error("❌ MongoDB Error:", err)
);
mongoose.connection.on("disconnected", () =>
  console.warn("⚠️ MongoDB Disconnected")
);

module.exports = connectDB;
