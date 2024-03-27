const Expense = require('../models/expenseModel')

async function updateExpense(req, res){
  try {
      const { id } = req.params;
      const { name, amount, date, type } = req.body;

      // Find the expense by ID and update its properties
      const updatedExpense = await Expense.findByIdAndUpdate(id, {
          name,
          amount,
          date,
          type
      }, { new: true });

      // Send the updated expense as a response
      res.json(updatedExpense);
  } catch (error) {
      // If an error occurs, send an error response
      console.error('Error updating expense:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = updateExpense;
