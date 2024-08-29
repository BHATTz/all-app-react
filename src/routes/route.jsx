// src/routes/route.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WeatherComponent from "../component/api-learn/WeatherComponent";
import ComplexForm from "../component/complex-form/ComplexForm";
import TaskListManagement from "../component/task-manager/TaskListManagement";
import Learnlogic from "../component/home-learning/learnlogic";
import Main from "../pages/Main";

const route = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/WeatherComponent" element={<WeatherComponent />} />
        <Route path="/ComplexForm" element={<ComplexForm />} />
        <Route path="/TaskListManagement" element={<TaskListManagement />} />
        <Route path="/Learnlogic" element={<Learnlogic />} />
      </Routes>
    </Router>
  );
};

export default route;
