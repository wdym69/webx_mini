const Expense = require("../models/expenseModel");

async function getExpenses(req, res) {
  try {
    // Fetch all expenses from the database
    const expenses = await Expense.find();

    // Send the expenses as a response
    res.json(expenses);
  } catch (error) {
    // If an error occurs, send an error response
    console.error("error retreiving expenses", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = getExpenses;
