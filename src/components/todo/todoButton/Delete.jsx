import React from "react";
import useTodo from "../../../context/todo/useTodo";

export default function Delete({ item}) {
  const { todos, setTodos } = useTodo();
  const handleDelete = (id) => {
    const DeletedTodo = todos.filter((item) => item.id !== id);
    setTodos(DeletedTodo);
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log("error from delete todo", err.message));
  };
  return (
    <>
      <button
        onClick={() => handleDelete(item.id)}
        className="px-3 py-1 text-sm rounded-md bg-red-500 text-white hover:bg-red-600 transition shadow-sm"
      >
        Delete
      </button>
    </>
  );
}
