import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Api = () => {
  const [data, setData] = useState([]); // State to store API data

  useEffect(() => {
    // Fetch data from the API
    fetch("https://dummy.restapiexample.com/api/v1/employees") // Replace with your API URL
      .then((response) => response.json())
      .then((data) => setData(data.data)) // Save data in state (assuming 'data' is the correct property)
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Data from API:</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.employee_name}</li> // Replace 'employee_name' with your data property
        ))}
      </ul>
    </div>
  );
};

export default Api;
