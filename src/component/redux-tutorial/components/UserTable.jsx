import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../redux/userSlice";

const UserTable = () => {
  const [editingUserId, setEditingUserId] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  const handleEdit = (user) => {
    setEditingUserId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  const handleUpdate = () => {
    if (editingUserId) {
      dispatch(updateUser({ id: editingUserId, name, email }));
      setEditingUserId(null);
      setName("");
      setEmail("");
    }
  };

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead className="bg-gray-100 border-b border-gray-300">
          <tr>
            <th className="py-3 px-4 text-left text-gray-600 font-semibold">
              Name
            </th>
            <th className="py-3 px-4 text-left text-gray-600 font-semibold">
              Email
            </th>
            <th className="py-3 px-4 text-left text-gray-600 font-semibold">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="3" className="py-4 px-4 text-center text-gray-500">
                No users found
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id} className="border-b border-gray-200">
                <td className="py-3 px-4 text-gray-700">{user.name}</td>
                <td className="py-3 px-4 text-gray-700">{user.email}</td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => handleEdit(user)}
                    className="bg-yellow-500 text-white py-1 px-3 rounded-lg mr-2 hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {editingUserId && (
        <div className="mt-6 p-4 bg-white border border-gray-200 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Edit User</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Name:
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <button
            onClick={handleUpdate}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
};

export default UserTable;
