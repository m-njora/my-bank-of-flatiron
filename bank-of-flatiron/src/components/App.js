import React from "react";
// import { BasicTable } from "./BasicTable";
// import ExpenseForm from "./ExpenseForm";
// import ExpenseList from "./ExpenseList";
import AccountContainer from "./AccountContainer";

//import "bootstrap/dist/css/bootstrap"
//import  './App.css';
function App() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer />
      </div>
    );
  }
// function App() {
//     return(
//         <div className="container">
//             <h1>My Bank  </h1>
//             <div>
//                 <h3 className="mt-3">Expenses</h3>
//             </div>
//             <div>
//              <BasicTable/>
//             </div>
            
//             <div className="col-sm">
//                 <ExpenseList/>
//             </div>
//             <h3 className="mt-3">Add Transaction</h3>
//             <div className="mt-3">
//                 <div className="column">
//                 <ExpenseForm/>
//                 </div>
//             </div>
//         </div>
        
//     )
    
// }

export default App;