import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useAdmin from "./../../context/Admin/useAdmin";

const formatDateTime = (value) => {
  if (!value) return "Never";

  const parsed =
    typeof value === "number" || /^\d+$/.test(String(value))
      ? new Date(Number(value))
      : new Date(value);

  if (Number.isNaN(parsed.getTime())) {
    return "Never";
  }

  return parsed.toLocaleString();
};

export default function SingleUser() {
  const { _id } = useParams();
  const navigate = useNavigate();
  const [singleUser, setSingleUser] = useState([]);
  const { AllTodosData } = useAdmin();

  const todoByUID =
    singleUser.length > 0
      ? AllTodosData.filter((todo) => todo?.userUID === singleUser[0]?.uid)
      : [];

  useEffect(() => {
    const getSingleUser = async () => {
      const response = await fetch(`https://full-stack-todo-backend-8yku.onrender.com/api/users/${_id}`);
      const data = await response.json();
      console.log(data);

      setSingleUser(data?.data ? [data.data] : []);
    };
    getSingleUser();
  }, [_id]);

  if (!singleUser) {
    return <p className="text-center mt-10">User Not Found</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          User Details
        </h2>

        {singleUser.map((user) => (
          <div className="space-y-3 text-gray-700" key={user._id}>
            <p>
              <span className="font-medium">Name:</span> {user.displayName}
            </p>

            <p>
              <span className="font-medium">Email:</span> {user.email}
            </p>

            <p>
              <span className="font-medium">
                Account Created:{formatDateTime(user?.metadata?.createdAt)}
              </span>{" "}
            </p>

            <p>
              <span className="font-medium">
                Last Sign In:{formatDateTime(user?.metadata?.lastLogin)}
              </span>{" "}
            </p>
          </div>
        ))}

        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-4">User Todos</h3>
          {todoByUID.length > 0 ? (
            <ul className="space-y-2">
              {todoByUID.map((todo) => (
                <li
                  key={todo.id}
                  className="flex items-center justify-between bg-gray-50 p-3 rounded-lg"
                >
                  <span
                    className={todo.completed ? "line-through text-gray-500" : ""}
                  >
                    {todo.title}
                  </span>
                  <span
                    className={`px-2 py-1 rounded text-sm ${todo.completed ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}
                  >
                    {todo.completed ? "Completed" : "Pending"}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No todos found for this user.</p>
          )}
        </div>

        <button
          onClick={() => navigate("/admin/allusers")}
          className="mt-6 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900"
        >
          Back
        </button>
      </div>
    </div>
  );
}
