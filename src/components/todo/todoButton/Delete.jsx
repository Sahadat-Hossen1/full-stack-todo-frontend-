import React from "react";
import useTodo from "../../../context/todo/useTodo";
// import apiEndPoint from "../../../apiEndPoint";

export default function Delete({ item}) {
  const { todos, setTodos } = useTodo();
  const handleDelete = (_id) => {
    const DeletedTodo = todos.filter((item) => item._id !== _id);
    setTodos(DeletedTodo);
    fetch(`https://full-stack-todo-backend-8yku.onrender.com/api/todos/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log("error from delete todo", err.message));
  };
  return (
    <>
      <button
        onClick={() => handleDelete(item._id)}
        className="px-3 py-1 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 transition shadow-sm"
      >
        Delete
      </button>
    </>
  );
}
