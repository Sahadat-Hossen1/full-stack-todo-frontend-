import React from "react";
import useTodo from "../../../context/todo/useTodo";

export default function TogoleIsComplete({ item }) {
    const {todos,setTodos}=useTodo()
    const handleIsCompleted = (id, curentStatus) => {
        // console.log(item);
        
        // alert(id)
    const updatedStatus = !curentStatus;
    const updatedTodos = todos.map((item) => {
        console.log(id);
        
      return item.id === id ? { ...item, isCompleted: updatedStatus } : item;
    });
    setTodos(updatedTodos);

    // console.log(updatedTodo);
    fetch(`http://localhost:3000/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isCompleted: updatedStatus }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log("error from patch isCompleted", err.message));
  };
  return (
    <>
      <input
        type="checkbox"
        checked={item.isCompleted}
        onChange={() => handleIsCompleted(item.id, item.isCompleted)}
        className="w-5 h-5 accent-blue-500 cursor-pointer"
      />
    </>
  );
}
