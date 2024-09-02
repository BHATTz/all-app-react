import React, { useState } from "react";
import useUserStore from "../form-user/useUserStore"; // Adjust the import path as needed

export default function UserDataDisplay() {
  const { userData, updateUserData, deleteUserData } = useUserStore(
    (state) => ({
      userData: state.userData,
      updateUserData: state.updateUserData,
      deleteUserData: state.deleteUserData,
    })
  );

  const [editingIndex, setEditingIndex] = useState(null);
  const [editingData, setEditingData] = useState({
    name: "",
    email: "",
    password: "",
    summary: "",
  });

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setEditingData(userData[index]);
  };

  const handleDeleteClick = (index) => {
    deleteUserData(index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingData({ ...editingData, [name]: value });
  };

  const handleSaveClick = () => {
    updateUserData(editingIndex, editingData);
    setEditingIndex(null);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">User Data Table</h2>

        {userData.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Password
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Summary
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {userData.map((user, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingIndex === index ? (
                      <input
                        type="text"
                        name="name"
                        value={editingData.name}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    ) : (
                      user.name
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingIndex === index ? (
                      <input
                        type="email"
                        name="email"
                        value={editingData.email}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    ) : (
                      user.email
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingIndex === index ? (
                      <input
                        type="password"
                        name="password"
                        value={editingData.password}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    ) : (
                      user.password
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {editingIndex === index ? (
                      <textarea
                        name="summary"
                        value={editingData.summary}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    ) : (
                      user.summary
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    {editingIndex === index ? (
                      <button
                        onClick={handleSaveClick}
                        className="text-indigo-600 hover:text-indigo-900 mr-4"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEditClick(index)}
                        className="text-yellow-600 hover:text-yellow-900 mr-4"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => handleDeleteClick(index)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-center text-gray-500">No user data available.</p>
        )}
      </div>
    </div>
  );
}
