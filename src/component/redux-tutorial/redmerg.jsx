import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import UserForm from "./components/UserForm";
import UserDataDisplay from "./components/UserTable";

export default function redmerg() {
  return (
    <Provider store={store}>
      <div>
        <UserForm />
        <UserDataDisplay />
      </div>
    </Provider>
  );
}
