import React from "react";
import useAuth from "../context/auth/useAuth";
import useTodo from "../context/todo/useTodo";
import PrivateRout from "../routes/privateRout/PrivateRout";

export default function Home() {
  const { user } = useAuth();
  const { todos } = useTodo();
  // console.log(todos);

  return (
    <div>
      {
        user?.uid ?
        <h1 className="text-3xl font-bold mb-4">Hello, {user?.displayName}</h1>:<h1 className="text-3xl font-bold mb-4">Before Add todo please Login</h1>
      }
      <h2 className="text-2xl font-semibold mb-2">Todo List</h2>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id} className="mb-2">
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
