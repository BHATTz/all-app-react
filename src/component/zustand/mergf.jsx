import React from "react";
import UserForm from "./form-user/userform";
import UserDataDisplay from "./user-zustand/UserDataDisplay";

export default function mergf() {
  return (
    <div>
      <UserForm />
      <UserDataDisplay />
    </div>
  );
}
