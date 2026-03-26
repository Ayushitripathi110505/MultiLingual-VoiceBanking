const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json()); // no need for body-parser now

// ✅ Test route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running!");
});

// ✅ MongoDB Connection
console.log("Connecting to MongoDB...");

mongoose.connect(process.env.MONGO_URI, {
  serverSelectionTimeoutMS: 5000 // prevents hanging
})
.then(() => {
  console.log("✅ MongoDB connected successfully");
})
.catch((err) => {
  console.error("❌ MongoDB connection failed:");
  console.error(err.message);
});
const userRoutes = require("./routes/user");
const transactionRoutes = require("./routes/transaction");

app.use("/users", userRoutes);
app.use("/transactions", transactionRoutes);
// ✅ Port setup (important for deployment)
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});