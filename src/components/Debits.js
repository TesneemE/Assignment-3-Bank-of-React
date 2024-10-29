/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import React, {useState} from "react"
import reactRouter from 'react-router';
const Debits = (props) => {
  const [debitData, setDebitData]= useState({
    debitDescription: "",
    debitAmount: 0,
  });
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setDebitData((prevData) => ({
      ...prevData,
      [name]: name === "amount" ? Number(value) : value, 
    }));
  }
  const handleAddDebit =()=> { 
    const newItem= {
      id: props.debits.length+1,
      description: debitData.debitDescription,
      amount: debitData.debitAmount.toFixed(2),
      date: new Date.toISOString()
    }
    props.addDebit(newItem);

  }
  // Create the list of Debit items
  // let debitsView = () => {
  //   const { debits } = props;
  //   return debits.map((debit) => {  // Extract "id", "amount", "description" and "date" properties of each debits JSON array element
  //     let date = debit.date.slice(0,10);
  //     return <li key={debit.id}>{debit.amount} {debit.description} {date}</li>
  //   });
  // }
  // Render the list of Debit items and a form to input new Debit item
  return (
    <div>
      <h1>Debits</h1>
      <br />
      <p>Balance: {Number(props.accountBalance).toFixed(2)}</p>
      <ul>
        {props.debits.map((item) => {
          return (
            <li key={item.id}>
              {item.amount} {item.description} {item.amount}{" "}
              {new Date(item.date).toISOString().split("T")[0]}{" "}
            </li>
          );
        })}
      </ul>
      Description:{" "}
      <label>
        {" "}
        <input
          type="text"
          id="description"
          name="description"
          value={debitData.debitDescription}
          onChange={handleChange}
        ></input>
      </label>
      <label>
        Amount:{" "}
        <input
          type="number"
          id="amount"
          name="amount"
          value={debitData.debitAmount}
          onChange={handleChange}
        ></input>
      </label>
      <button type="submit" onClick={handleAddDebit}>
        Add Debit
      </button>
      <br></br>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default Debits;