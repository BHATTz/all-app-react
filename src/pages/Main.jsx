import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router

export default function Main() {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 h-screen">
      <h1 className="text-2xl font-bold mb-4">Project Dashboard</h1>

      <Link to="/WeatherComponent">
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Weather Using API
        </button>
      </Link>

      <Link to="/ComplexForm">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Complex Form with useForm
        </button>
      </Link>

      <Link to="/TaskListManagement">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Task Manager Using React Hooks
        </button>
      </Link>

      <Link to="/Ui">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Ui
        </button>
      </Link>

      <Link to="/learnlogic">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Learning Logics
        </button>
      </Link>
    </div>
  );
}
