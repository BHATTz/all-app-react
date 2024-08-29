import React from "react";
import { Link } from "react-router-dom";

export default function learnlogic() {
  return (
    <div>
      <h1>learning</h1>
      <div className="flex justify-center items-center mt-2">
        <Link to="/">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
}
