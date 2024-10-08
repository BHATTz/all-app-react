import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";

export default function LearnLogic() {
  const [counter, setCounter] = useState(0);

  // Memoized increment function
  const increment = useCallback(() => {
    setCounter((prevCounter) => prevCounter + 1);
  }, []);

  // Memoized display message
  const display = useMemo(() => {
    if (counter > 0) {
      return "Counter is Increased successfully";
    } else {
      return "";
    }
  }, [counter]);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-200 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Learning</h1>

      <button
        onClick={increment}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
      >
        UseState-Counter
      </button>
      <h4 className="text-1xl font-bold mb-6">
        {display} : {counter}
      </h4>
      <div className="flex justify-center items-center">
        <Link to="/">
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}
