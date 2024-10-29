/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import { Link } from "react-router-dom";
import React, {useState} from "react";
const Debits = (props) => {
  const [debitDescription, setDebitDescription] = useState("");
  const [debitAmount, setDebitAmount] = useState(0);

  // adds a new item to debit list once the user clicks the button
  const handleChange = () => {
    const newItem = {
      id: props.debits.length + 1,
      description: debitDescription,
      amount: Number(debitAmount).toFixed(2),
      date: new Date().toISOString(),
    };
    props.addDebit(newItem);
  };

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
          onChange={(e) => setDebitDescription(e.target.value)}
        ></input>
      </label>
      <label>
        Amount:{" "}
        <input
          type="number"
          id="amount"
          name="amount"
          onChange={(e) => setDebitAmount(e.target.value)}
        ></input>
      </label>
      <button type="submit" onClick={handleChange}>
        Add Debit
      </button>
      <br></br>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default Debits;