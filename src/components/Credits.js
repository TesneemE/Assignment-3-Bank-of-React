/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Credits = (props) => {
  const [credit, setCredit] = useState([]);
  const [creditDescription, setCreditDescription] = useState("");
  const [creditAmount, setCreditAmount] = useState();

  useEffect(() => {
    fetch("https://johnnylaicode.github.io/api/credits.json")
      .then((response) => response.json())
      .then((data) => setCredit(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString();
  };

  const handleChange = () => {
    const newItem = {
      id: credit.length + 1,
      description: creditDescription,
      amount: creditAmount,
      date: new Date().toISOString()
    };
    
    setCredit([...credit, newItem]);
    console.log(credit);
  };

  console.log(credit);

  return (
    <div>
      <h1>Credits</h1>
      <br />
      <p>Balance: </p>
      <ul>
        {credit.map((item) => {
          return (
            <li key={item.id}>
              {item.amount} {item.description} {item.amount}{" "}
              {formatDate(item.date)}{" "}
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
      <button type="submit" onClick={handleChange}>Add Credit</button>
      <Link to="/">Return to Home</Link>
    </div>
  );
};

export default Credits;
