require("dotenv").config(); // Only this line

const Stripe = require("stripe");

// Validate that the environment variable exists
const stripeSecretKey = process.env.VITE_STRIPE_SECRET_KEY;
if (!stripeSecretKey) {
  console.error("❌ STRIPE_SECRET_KEY is missing in the .env file");
  process.exit(1); // Stop the server if the key is missing
}

// Initialize Stripe with the secret key
const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2023-10-16", // Set a specific API version to avoid breaking changes
});

// Log a success message (optional)
console.log("✅ Stripe initialized successfully");

module.exports = stripe;
