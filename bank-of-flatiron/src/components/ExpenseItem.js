import React from "react";
import {TiDelete} from "react-icons/ti"

function ExpenseItem(props){
    return(
    <li className="list item justify-content-between align-item-center ">
    {props.category}
    <div>
       <span className="badge badge-primary badge-pill mr-3">
        ksh{props.amount}
       </span>
       <TiDelete size="1.5cm"></TiDelete>
    </div>
    </li>
    )
}
export default ExpenseItem;