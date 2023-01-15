import React from "react";


function ExpenseForm() {
    return(
     <form>
        <div className="row">
            <div className="column">
               <label for="name">Name</label>
               <input
               required="required"
               type="text"
               className="form-control"
               id="name"
               ></input>
            </div>
            <div className="column">
                <label for ="amount">Amount</label>
                <input
               required="required"
               type="text"
               className="form-control"
               id="amount"
               ></input>
            </div>
            <div className="column">
                <button type="submit" className="btn">Add
                </button>
            </div>
        </div >
     </form>   
    )
}

export default ExpenseForm;







