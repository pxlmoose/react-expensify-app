import React from 'react';
import { Link } from 'react-router-dom'


const ExpenseListItem = ({  id, description, amount, createdAt }) => (
    <div> 
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>  
);


export default ExpenseListItem;

// 1. Import action you want to use 
// 2. You destructured props to use in html
// 3 On click you use imported action with given prop