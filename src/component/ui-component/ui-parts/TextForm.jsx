import React, { useState } from "react";

export default function TaskListManagement() {
  const [text, setText] = useState("Enter Text To Convert It:");
  const [history, setHistory] = useState([]);

  const updateHistory = (newText) => {
    setHistory([...history, newText]);
    setText(newText);
  };

  const saveB = () => {
    // Save current text to history as lowercase
    const newText = text.toLowerCase();
    updateHistory(newText);
  };

  const convertToUpperCase = () => {
    // Convert current text to uppercase and update history
    const newText = text.toUpperCase();
    updateHistory(newText);
  };

  const convertToLowerCase = () => {
    // Convert current text to lowercase and update history
    const newText = text.toLowerCase();
    updateHistory(newText);
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const changes = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      {/* TaskListManagement section */}
      <section className="text-gray-600 body-font">
        <div className="w-5/6 mx-auto p-12 bg-white rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Task Management Dashboard
          </h1>
          <label htmlFor="message" className="block text-lg font-medium mb-2">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={text}
            onChange={changes}
          ></textarea>
          <div className="flex mt-4 gap-4">
            <button
              onClick={convertToUpperCase}
              className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-md bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
            >
              To Uppercase
            </button>
            <button
              onClick={convertToLowerCase}
              className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-md bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
            >
              To Lowercase
            </button>
            <button
              onClick={saveB}
              className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-md bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
            >
              Save
            </button>
          </div>
          <h2 className="text-2xl font-semibold mt-6 mb-2">History</h2>
          <ul className="list-disc pl-5">
            {history.map((item, index) => (
              <li key={index} className="mb-1 text-gray-800">
                {item}
              </li>
            ))}
          </ul>
          <button
            onClick={clearHistory}
            className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-md bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
          >
            Clear
          </button>
        </div>
      </section>
    </>
  );
}
