const Transaction = require("../models/transaction");
const User = require("../models/user");

// Transfer money
exports.transferMoney = async (req, res) => {
  try {
    const { fromUserId, toUserId, amount } = req.body;

    const sender = await User.findById(fromUserId);
    const receiver = await User.findById(toUserId);

    if (!sender || !receiver) {
      return res.status(404).json({ message: "User not found" });
    }

    if (sender.balance < amount) {
      return res.status(400).json({ message: "Insufficient balance" });
    }

    // Update balances
    sender.balance -= amount;
    receiver.balance += amount;

    await sender.save();
    await receiver.save();

    // Save transaction
    const transaction = new Transaction({
      userId: fromUserId,
      type: "transfer",
      amount
    });

    await transaction.save();

    res.json({ message: "Transfer successful" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get transactions
exports.getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.find({ userId: req.params.userId });
    res.json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};