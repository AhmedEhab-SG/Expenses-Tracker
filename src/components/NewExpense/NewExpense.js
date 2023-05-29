import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isShown, setIsShwon] = useState(false);

  const startEdidingHander = () => {
    setIsShwon(true);
  };

  const stopEdittingHander = () => {
    setIsShwon(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsShwon(false)
  };

  return (
    <div className="new-expense">
      {!isShown && (
        <button className="" onClick={startEdidingHander}>
          Add Expense
        </button>
      )}
      {isShown && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEdittingHander}
        />
      )}
    </div>
  );
};

export default NewExpense;
