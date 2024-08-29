import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContentComponent from "./ContentComponent";
import SignupComponent from "../components/SignupComponent";
import SigninComponent from "../components/SigninComponent";

const connectc = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContentComponent />} />
        <Route path="signin" element={<SigninComponent />} />
        <Route path="signup" element={<SignupComponent />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<connectc />); // Added render call to render the component

export default connectc;
