import React, { useState } from "react";
import { useDarkMode } from "./DarkModeContext"; // Import the useDarkMode hook

export default function TaskListManagement() {
  const [text, setText] = useState("Enter Text To Convert It:");
  const [history, setHistory] = useState([]);
  const { isDarkMode } = useDarkMode(); // Access isDarkMode from context

  const updateHistory = (newText) => {
    setHistory([...history, newText]);
    setText(newText);
  };

  const saveB = () => {
    const newText = text.toLowerCase();
    updateHistory(newText);
  };

  const convertToUpperCase = () => {
    const newText = text.toUpperCase();
    updateHistory(newText);
  };

  const convertToLowerCase = () => {
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
      <section
        className={`text-gray-600 body-font ${
          isDarkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
        }`}
      >
        <div
          className={`w-full sm:w-5/6 md:w-4/6 lg:w-3/6 mx-auto p-6 md:p-12 rounded-lg shadow-md ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
            Task Management Dashboard
          </h1>
          <label htmlFor="message" className="block text-lg font-medium mb-2">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className={`w-full p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
              isDarkMode
                ? "border-gray-700 bg-gray-700 text-gray-100 focus:ring-blue-500"
                : "border-gray-300 bg-white text-gray-900 focus:ring-blue-500"
            }`}
            value={text}
            onChange={changes}
          ></textarea>
          <div className="flex mt-4 gap-4 flex-wrap">
            <button
              onClick={convertToUpperCase}
              className={`px-4 py-2 font-semibold rounded-md focus:outline-none ${
                isDarkMode
                  ? "bg-indigo-700 hover:bg-indigo-800 text-white"
                  : "bg-indigo-500 hover:bg-indigo-600 text-white"
              }`}
            >
              To Uppercase
            </button>
            <button
              onClick={convertToLowerCase}
              className={`px-4 py-2 font-semibold rounded-md focus:outline-none ${
                isDarkMode
                  ? "bg-indigo-700 hover:bg-indigo-800 text-white"
                  : "bg-indigo-500 hover:bg-indigo-600 text-white"
              }`}
            >
              To Lowercase
            </button>
            <button
              onClick={saveB}
              className={`px-4 py-2 font-semibold rounded-md focus:outline-none ${
                isDarkMode
                  ? "bg-indigo-700 hover:bg-indigo-800 text-white"
                  : "bg-indigo-500 hover:bg-indigo-600 text-white"
              }`}
            >
              Save
            </button>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold mt-6 mb-2">
            History
          </h2>
          <ul className="list-disc pl-5">
            {history.map((item, index) => (
              <li key={index} className="mb-1">
                {item}
              </li>
            ))}
          </ul>
          <button
            onClick={clearHistory}
            className={`mt-4 px-4 py-2 font-semibold rounded-md focus:outline-none ${
              isDarkMode
                ? "bg-indigo-700 hover:bg-indigo-800 text-white"
                : "bg-indigo-500 hover:bg-indigo-600 text-white"
            }`}
          >
            Clear
          </button>
        </div>
      </section>
    </>
  );
}
