import React from "react";
import { useSelector } from "react-redux";

const UserTable = () => {
  const users = useSelector((state) => state.users.users);

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
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="2" className="py-4 px-4 text-center text-gray-500">
                No users found
              </td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-3 px-4 text-gray-700">{user.name}</td>
                <td className="py-3 px-4 text-gray-700">{user.email}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
