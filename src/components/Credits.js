/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Credits = (props) => {
  const [credit, setCredit] = useState([]);
  useEffect(() => {
    fetch("https://johnnylaicode.github.io/api/credits.json")
      .then((response) => response.json())
      .then((data) => setCredit(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  console.log(credit);

  return (
    <div>
      <h1>Credits</h1>
      <br />
      <ul>
        { credit.map((item) => {
          return (
            <li key={item.id}>
              {item.amount}{" "}
              {item.description}{" "}
              {item.amount}{" "}
              {item.date}{" "}
            </li>
          );
        })}
      </ul>

      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Credits;