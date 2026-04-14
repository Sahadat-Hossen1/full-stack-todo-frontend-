import React from "react";
import useAuth from "../context/auth/useAuth";
import useTodo from "../context/todo/useTodo";
import PrivateRout from "../routes/privateRout/PrivateRout";

export default function Home() {
  const { userName } = useAuth();
  const { todos } = useTodo();
  // console.log(todos);

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome, {userName}!</p>
      <PrivateRout />
    </div>
  );
}
