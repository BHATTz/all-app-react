import React from "react";

export default function spreadMap() {
  const arr = ["a", "b", "c", 1];
  let newArr = [...arr, 4];

  const arr2 = ["a", "b", "c", "d"];

  return (
    <div className="min-h-screen content-center">
      {newArr}

      <ul>
        {arr2.map((name, index) => (
          <li>
            {index}, {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
