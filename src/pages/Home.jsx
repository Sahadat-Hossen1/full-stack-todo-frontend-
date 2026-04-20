import React from "react";
import useAuth from "../context/auth/useAuth";
import AllTodo from "../components/todo/AllTodo";
import AddTodo from "../components/todo/AddTodo";

export default function Home() {
  const { user } = useAuth();
  // console.log(todos);

  return (
    <div>
      {
        user?.uid ?
        <h1 className="text-3xl text-center font-bold py-4">Hello, {user?.displayName}</h1>:<h1 className="text-3xl font-bold mb-4">Before Add todo please Login</h1>
      }
      <AddTodo/>
      <h2 className="text-3xl text-center font-semibold mb-2">Todos List</h2>
      <AllTodo/>
     
    </div>
  );
}
