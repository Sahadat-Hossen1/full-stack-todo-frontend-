import React, { useState } from "react";
import useTodo from "../../../context/todo/useTodo";
// import apiEndPoint from "../../../apiEndPoint";

export default function Edit({ editingID, setEditingID, item }) {
  const [updatedTitle, setUpdatedTitle] = useState("");
  const { todos, setTodos } = useTodo();
  const handleEdit = (item) => {
    setEditingID(item._id);
    setUpdatedTitle(item.title);
  };
  const handleUpdate = (_id) => {
    if (!updatedTitle.trim()) return;

    const updatedTodo = todos.map((item) =>
      item._id === _id ? { ...item, title: updatedTitle } : item,
    );
    fetch(`http://localhost:3000/api/todos/${editingID}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: updatedTitle }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log("error from edit todo ", err.message));
    setTodos(updatedTodo);
    setEditingID(null);
  };
  return (
    <>
      {editingID === item._id ? (
        <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg shadow-sm">
          <input
            type="text"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            placeholder="Edit todo..."
            className="px-3 py-1 border rounded-md outline-none focus:ring-2 focus:ring-blue-400 text-sm"
          />

          <button
            onClick={() => handleUpdate(item._id)}
            className="px-3 py-1 text-sm rounded-md bg-green-500 text-white hover:bg-green-600 transition"
          >
            Save
          </button>

          <button
            onClick={() => setEditingID(null)}
            className="px-3 py-1 text-sm rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
          >
            Cancel
          </button>
        </div>
      ) : (
        <button
          onClick={() => handleEdit(item)}
          className="px-3 py-1 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600 transition shadow-sm"
        >
          Edit
        </button>
      )}
    </>
  );
}
