const Expense = require('../models/expenseModel')

async function createExpense(req, res){
  try {
    // console.log(req.body);
    const { id, name, amount, date, type } = req.body;
    const newExpense = await Expense.create({
      id,
      name,
      amount,
      date,
      type,
    });

    res.status(201).json(newExpense);
  } catch (error) {
    console.log("error creating expense", error);
    res.status(500).json({error: 'Internal server error'});
  }
};

module.exports = createExpense;