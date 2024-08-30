import React from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../DarkModeContext";

export default function Header() {
  const { isDarkMode, toggleTheme } = useDarkMode();

  return (
    <header
      className={`body-font ${
        isDarkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 p-2 rounded-full"
            viewBox="0 0 24 24"
            style={{
              color: isDarkMode ? "white" : "black",
              backgroundColor: isDarkMode ? "gray-800" : "gray-100",
            }}
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Title</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center"></nav>
        <Link to="/">
          <button
            className={`mr-2 px-4 py-1 rounded ${
              isDarkMode
                ? "bg-blue-700 hover:bg-blue-800 text-white"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            Go Home
          </button>
        </Link>
        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark/Light Mode"
          className={`inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 ${
            isDarkMode
              ? "bg-gray-800 hover:bg-gray-700 text-gray-100"
              : "bg-gray-100 hover:bg-gray-200 text-gray-900"
          }`}
        >
          Toggle Mode
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
            style={{ color: isDarkMode ? "white" : "black" }}
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
