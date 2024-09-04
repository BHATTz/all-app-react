import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";

function redmerg() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-8">User Management</h1>
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <UserForm />
          <UserTable />
        </div>
      </div>
    </Provider>
  );
}

export default redmerg;
