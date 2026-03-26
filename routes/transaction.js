const express = require("express");
const router = express.Router();
const Transaction = require("../models/transaction");

router.get("/", async (req, res) => {
  const transactions = await Transaction.find();
  res.json(transactions);
});

router.post("/add", async (req, res) => {
  const { userId, type, amount } = req.body;
  const newTransaction = new Transaction({ userId, type, amount });
  await newTransaction.save();
  res.json({ message: "Transaction added!" });
});

module.exports = router;