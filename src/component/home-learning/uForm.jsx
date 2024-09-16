import React from "react";
import { useForm } from "react-hook-form";

function UForm() {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    setValue,
    getValues,
    reset,
    resetField,
    formState: { errors }, // Add formState to access errors
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const handleSetError = () => {
    setError("name", {
      type: "manual",
      message: "Name field is required",
    });
  };

  const handleClearErrors = () => {
    clearErrors("name");
  };

  const handleSetValue = () => {
    setValue("name", "John Doe");
  };

  const handleGetValues = () => {
    console.log("Current Values:", getValues());
  };

  const handleReset = () => {
    reset({
      name: "",
      email: "",
    });
  };

  const handleResetField = () => {
    resetField("name");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h1 className="text-xl font-semibold mb-4">Form</h1>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            id="name"
            {...register("name")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div className="flex space-x-4 mb-4">
          <button
            type="button"
            onClick={handleSetError}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Set Error
          </button>
          <button
            type="button"
            onClick={handleClearErrors}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Clear Errors
          </button>
          <button
            type="button"
            onClick={handleSetValue}
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
          >
            Set Value
          </button>
        </div>
        <div className="flex space-x-4 mb-4">
          <button
            type="button"
            onClick={handleGetValues}
            className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600"
          >
            Get Values
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
          >
            Reset Form
          </button>
          <button
            type="button"
            onClick={handleResetField}
            className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
          >
            Reset Name Field
          </button>
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UForm;
