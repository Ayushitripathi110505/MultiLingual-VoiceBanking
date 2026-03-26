const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

// ✅ Create user
router.post("/create", userController.createUser);

// ✅ Get balance
router.get("/balance/:id", userController.getBalance);

module.exports = router;