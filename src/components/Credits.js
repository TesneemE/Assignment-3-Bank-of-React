/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import { Link } from "react-router-dom";
import React, {useState } from "react";
import '../components/Credits.css';

const Credits = (props) => {
  const [creditDescription, setCreditDescription] = useState("");
  const [creditAmount, setCreditAmount] = useState(0);

  // adds a new item to credit list once the user clicks the button
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
    <div className="credits-page">  
    <div className="credits-container">
      <h1>Credits</h1>
      <p>Balance: {Number(props.accountBalance).toFixed(2)}</p>
      <ul>
        {props.credits.map((item) => (
          <li key={item.id}>
            {item.amount} {item.description} {new Date(item.date).toISOString().split("T")[0]}
          </li>
        ))}
      </ul>
      <label>Description:</label>
      <input
        type="text"
        id="description"
        name="description"
        onChange={(e) => setCreditDescription(e.target.value)}
      />
      <label>Amount:</label>
      <input
        type="number"
        id="amount"
        name="amount"
        onChange={(e) => setCreditAmount(e.target.value)}
      />
      <button type="submit" onClick={handleChange}>Add Credit</button>
      <Link to="/">Return to Home</Link>
    </div>
    </div>
  );
};

export default Credits;
