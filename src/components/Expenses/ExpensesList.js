import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";


const ExpensesList = props => {
    const expenseElement = props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ));
    
      if (props.items.length === 0 ) {
        return <h2 className="epenses-List__fallback">No Expenses found.</h2>
      }

      return(
        <ul className="expense-List">
        {expenseElement}
        </ul>
      )
}

export default ExpensesList