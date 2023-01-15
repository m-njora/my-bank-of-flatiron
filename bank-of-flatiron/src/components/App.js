import React from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
//import "bootstrap/dist/css/bootstrap"
//import  './App.css';

function App() {
    return(
        <div className="container">
            <h1>My Bank  </h1>
            <div>
                <h3 className="mt-3">Expenses</h3>
            </div>

            <div className="col-sm">
                <ExpenseList/>
            </div>
            <h3 className="mt-3">Add Transaction</h3>
            <div className="mt-3">
                <div className="column">
                <ExpenseForm/>
                </div>
            </div>
        </div>
        
    )
    
}

export default App;