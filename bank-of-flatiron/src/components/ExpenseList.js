import React from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList() {
    const expenses =[
        {id:1,
        date: "2019-12-01",
        description: "Paycheck from Bob's Burgers",
        category: "Income",
        amount: 1000
   }
    ]
    return(
        <div>
            <ul className="List-group">
               {expenses.map(((expense)=>(
                <ExpenseItem
                id= {expense.id}
                //date:{expense.id}
                description={expense.description}
                category= {expense.category}
                amount= {expense.amount}/>
                
                )))}
               </ul>
        </div>
    )
    
}
export default ExpenseList;