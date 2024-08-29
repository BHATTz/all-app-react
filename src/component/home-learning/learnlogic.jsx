import React from "react";
import { Link } from "react-router-dom";

export default function learnlogic() {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-200 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Learning</h1>

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
