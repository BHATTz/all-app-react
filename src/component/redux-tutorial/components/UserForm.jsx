import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  addUserData,
  updateUserData,
  setEditingIndex,
} from "../redux/userSlice";

export default function UserForm() {
  const { register, handleSubmit, reset, setValue } = useForm();
  const dispatch = useDispatch();
  const { userData, editingIndex } = useSelector((state) => state.user);

  useEffect(() => {
    if (editingIndex !== null) {
      const user = userData[editingIndex];
      setValue("name", user.name);
      setValue("email", user.email);
      setValue("password", user.password);
      setValue("summary", user.summary);
    } else {
      reset();
    }
  }, [editingIndex, userData, setValue, reset]);

  const onSubmit = (data) => {
    if (editingIndex !== null) {
      dispatch(updateUserData({ index: editingIndex, newData: data }));
    } else {
      dispatch(addUserData(data));
    }
    reset();
    dispatch(setEditingIndex(null));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          {editingIndex !== null ? "Edit User" : "Create User"}
        </h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="summary"
            className="block text-sm font-medium text-gray-700"
          >
            Summary:
          </label>
          <textarea
            id="summary"
            {...register("summary")}
            rows="4"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
          />
        </div>
        <div className="text-center">
          <input
            type="submit"
            value={editingIndex !== null ? "Update" : "Submit"}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}
