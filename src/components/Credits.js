/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import { Link } from "react-router-dom";
import React, {useState } from "react";

const Credits = (props) => {
  const [creditDescription, setCreditDescription] = useState("");
  const [creditAmount, setCreditAmount] = useState(0);

  const handleChange = () => {
    const newItem = {
      id: props.credits.length + 1,
      description: creditDescription,
      amount: Number(creditAmount).toFixed(2),
      date: new Date().toISOString(),
    };
    props.addCredit(newItem);
    
  };

  return (
    <div>
      <h1>Credits</h1>
      <br />
      <p>Balance: {Number(props.accountBalance).toFixed(2)}</p>
      <ul>
        {props.credits.map((item) => {
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
          onChange={(e) => setCreditDescription(e.target.value)}
        ></input>
      </label>
      <label>
        Amount:{" "}
        <input
          type="number"
          id="amount"
          name="amount"
          onChange={(e) => setCreditAmount(e.target.value)}
        ></input>
      </label>
      <button type="submit" onClick={handleChange}>
        Add Credit
      </button>
      <br></br>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default Credits;
