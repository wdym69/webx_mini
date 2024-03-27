const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  id:{
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  type: {
    type: String,
    enum: ["income", "expense"],
    required: true,
  },
});

module.exports = mongoose.model("Expense", expenseSchema);
