import React, { useState, useEffect } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import { Link } from "react-router-dom";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters long"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords don't match")
    .required("Password confirmation is required"),
  phones: yup.array().of(
    yup.object().shape({
      number: yup
        .string()
        .required("Phone number is required")
        .matches(/^\d{10}$/, "Phone number must be 10 digits"),
    })
  ),
  address: yup.object().shape({
    street: yup.string().required("Street is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    zip: yup
      .string()
      .required("ZIP code is required")
      .matches(/^\d{6}$/, "ZIP code must be 6 digits"),
  }),
  dateOfBirth: yup.date().required("Date of Birth is required").nullable(),
  agreeToTerms: yup
    .boolean()
    .oneOf([true], "You must agree to the terms and conditions")
    .required("You must agree to the terms and conditions"),
});

function ComplexForm() {
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [formData, setFormData] = useState({});
  const [watchedData, setWatchedData] = useState({});

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phones: [{ number: "" }],
      address: {
        street: "",
        city: "",
        state: "",
        zip: "",
      },
      dateOfBirth: "",
      agreeToTerms: false,
    },
    mode: "onSubmit",
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "phones",
  });

  const onSubmit = (data) => {
    localStorage.setItem("formData", JSON.stringify(data));
    setFormData(data);
    setSubmissionMessage("Form submitted successfully!");
    setWatchedData(data);
    alert("Form submitted successfully!");
  };

  useEffect(() => {
    const storedData = localStorage.getItem("formData");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      reset(parsedData);
    }
  }, [reset]);

  const onReset = () => {
    localStorage.removeItem("formData");
    reset();
  };

  // Watch all fields
  const watchedFields = watch();

  return (
    <div className="w-full max-w-4xl mx-auto my-8 p-6 bg-gray-100 rounded-lg shadow-lg border border-gray-300">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Registration Form
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        {/* Password */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              {...register("confirmPassword")}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        {/* Address */}
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              id="street"
              placeholder="Street"
              {...register("address.street")}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <input
              id="city"
              placeholder="City"
              {...register("address.city")}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <input
              id="state"
              placeholder="State"
              {...register("address.state")}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            <input
              id="zip"
              placeholder="ZIP Code"
              {...register("address.zip")}
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
            {errors.address && (
              <p className="text-red-500 text-xs mt-1">
                {errors.address.message}
              </p>
            )}
          </div>
        </div>

        {/* Date of Birth */}
        <div>
          <label
            htmlFor="dateOfBirth"
            className="block text-sm font-medium text-gray-700"
          >
            Date of Birth
          </label>
          <Controller
            name="dateOfBirth"
            control={control}
            render={({ field }) => (
              <input
                type="date"
                {...field}
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            )}
          />
          {errors.dateOfBirth && (
            <p className="text-red-500 text-xs mt-1">
              {errors.dateOfBirth.message}
            </p>
          )}
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start space-x-2">
          <div className="flex items-center h-5">
            <input
              id="agreeToTerms"
              type="checkbox"
              {...register("agreeToTerms")}
              className="focus:ring-blue-500 h-5 w-5 text-blue-600 border-gray-300 rounded"
            />
          </div>
          <div className="text-sm">
            <label htmlFor="agreeToTerms" className="font-medium text-gray-700">
              I agree to the terms and conditions
            </label>
          </div>
        </div>
        {errors.agreeToTerms && (
          <p className="text-red-500 text-xs mt-1">
            {errors.agreeToTerms.message}
          </p>
        )}

        {/* Phone Numbers */}
        <div>
          <label
            htmlFor="phones"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Numbers
          </label>
          {fields.map((field, index) => (
            <div key={field.id} className="flex items-center space-x-3 mt-2">
              <input
                type="text"
                {...register(`phones.${index}.number`)}
                className="block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <button
                type="button"
                onClick={() => remove(index)}
                className="text-red-600 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => append({ number: "" })}
            className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Add Phone Number
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-6 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </form>

      {/* Reset Button */}
      <button
        onClick={onReset}
        className="w-full mt-4 py-3 px-6 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        Reset Form
      </button>

      {/* Submission Message */}
      {submissionMessage && (
        <p className="text-green-500 text-lg mt-4">{submissionMessage}</p>
      )}

      {/* Display Watched Fields Data as JSON */}
      {Object.keys(watchedFields).length > 0 && (
        <pre className="text-white mt-4 p-4 bg-gray-800  rounded-lg border border-gray-300">
          {JSON.stringify(watchedFields, null, 2)}
        </pre>
      )}

      <DevTool control={control} />
      <Link to="/">
        <button className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Go Home
        </button>
      </Link>
    </div>
  );
}

export default ComplexForm;
