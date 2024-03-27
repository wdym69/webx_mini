// const express = require("express");
// const mongoose = require("mongoose");
// console.log("");

const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const getExpenses = require("./routes/getAllExpense");
const deleteExpense = require("./routes/deleteExpense");
const createExpense = require("./routes/createExpense");
const updateExpense = require("./routes/updateExpense");

const app = express();

app.use(express.json())
app.use(express.static(path.join(__dirname, '../')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../', 'index.html'));
});

app.get("/api/expenses", getExpenses);
app.delete("/api/deleteExpense/:id", deleteExpense);
app.put("/api/updateExpense/:id", updateExpense);
app.post("/api/createExpense", createExpense);

app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb+srv://2021raghvendratripathi:A8A4LYTPi9xyAmya@cluster0.sehpeyp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

const Expense = require("./models/expenseModel");

// async function insert() {
//   await Expense.create({
//     name: "smth",
//     amount: "1354",
//     date: "2024-03-12",
//     type: "income",
//   });
// }
// insert();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
