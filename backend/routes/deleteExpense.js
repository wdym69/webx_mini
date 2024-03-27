const Expense = require("../models/expenseModel");
async function deleteExpense(req, res) {
  try {
    const { id } = req.params; // Remove .id
    console.log(`this is something: ${id}`);

    // Find the expense by ID and delete it
    const expense = await Expense.findById(id);
    console.log(expense);
    await Expense.findByIdAndDelete(id);

    // Send a success message as a response
    res.json({ message: "Expense deleted successfully" });
  } catch (error) {
    // If an error occurs, send an error response
    console.error("Error deleting expense:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = deleteExpense;
