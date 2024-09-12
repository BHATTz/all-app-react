import React, { useState } from "react";

export default function Arr() {
  // Initial array
  const initialArray = [1, 2, 3, 4, 5];

  // State to manage the array
  const [array, setArray] = useState(initialArray);

  // Adding elements to the end of the array
  const pushElement = () => {
    setArray([...array, 6]); // Adds element 6 to the end
  };

  // Removing the last element
  const popElement = () => {
    const newArray = [...array];
    newArray.pop();
    setArray(newArray);
  };

  // Removing the first element
  const shiftElement = () => {
    const newArray = [...array];
    newArray.shift();
    setArray(newArray);
  };

  // Adding elements to the beginning of the array
  const unshiftElement = () => {
    setArray([0, ...array]); // Adds element 0 to the beginning
  };

  // Slicing the array
  const sliceArray = () => {
    const newArray = array.slice(1, 4); // Slices the array from index 1 to 4
    console.log("Sliced array:", newArray);
  };

  // Splicing the array
  const spliceArray = () => {
    const newArray = [...array];
    newArray.splice(2, 1, 10, 11); // Removes 1 element at index 2 and adds 10 and 11
    setArray(newArray);
  };

  // For each element in the array
  const forEachElement = () => {
    array.forEach((element) => {
      console.log("ForEach element:", element); // Logs each element
    });
  };

  // Mapping elements
  const mapElements = () => {
    const mapped = array.map((item) => item * 2); // Doubles each element
    console.log("Mapped array:", mapped);
  };

  // Filtering elements
  const filterElements = () => {
    const filtered = array.filter((item) => item % 2 === 0); // Filters even numbers
    console.log("Filtered array:", filtered);
  };

  // Reducing elements
  const reduceElements = () => {
    const sum = array.reduce((acc, curr) => acc + curr, 0); // Calculates the sum of elements
    console.log("Sum of elements:", sum);
  };

  // Finding an element
  const findElement = () => {
    const found = array.find((item) => item > 3); // Finds the first element greater than 3
    console.log("Found element:", found);
  };

  // Sorting elements
  const sortElements = () => {
    const sorted = [...array].sort((a, b) => a - b); // Sorts the array in ascending order
    setArray(sorted);
  };

  // Reversing elements
  const reverseElements = () => {
    const reversed = [...array].reverse(); // Reverses the order of elements
    setArray(reversed);
  };

  // Concatenating arrays
  const concatArrays = () => {
    const additionalArray = [7, 8, 9];
    const concatenated = array.concat(additionalArray); // Merges two arrays
    console.log("Concatenated array:", concatenated);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Array Operations</h1>
      <p className="text-lg mb-4">Current Array: {JSON.stringify(array)}</p>
      <div className="space-y-2">
        <button
          onClick={pushElement}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Push Element
        </button>
        <button
          onClick={popElement}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Pop Element
        </button>
        <button
          onClick={shiftElement}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
        >
          Shift Element
        </button>
        <button
          onClick={unshiftElement}
          className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition"
        >
          Unshift Element
        </button>
        <button
          onClick={sliceArray}
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
        >
          Slice Array
        </button>
        <button
          onClick={spliceArray}
          className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
        >
          Splice Array
        </button>
        <button
          onClick={forEachElement}
          className="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600 transition"
        >
          ForEach Element
        </button>
        <button
          onClick={mapElements}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
        >
          Map Elements
        </button>
        <button
          onClick={filterElements}
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
        >
          Filter Elements
        </button>
        <button
          onClick={reduceElements}
          className="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
        >
          Reduce Elements
        </button>
        <button
          onClick={findElement}
          className="px-4 py-2 bg-lime-500 text-white rounded hover:bg-lime-600 transition"
        >
          Find Element
        </button>
        <button
          onClick={sortElements}
          className="px-4 py-2 bg-cyan-500 text-white rounded hover:bg-cyan-600 transition"
        >
          Sort Elements
        </button>
        <button
          onClick={reverseElements}
          className="px-4 py-2 bg-rose-500 text-white rounded hover:bg-rose-600 transition"
        >
          Reverse Elements
        </button>
        <button
          onClick={concatArrays}
          className="px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition"
        >
          Concat Arrays
        </button>
      </div>
    </div>
  );
}
