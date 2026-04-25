import React, { useEffect, useState } from "react";
import TodoContext from "./TodoContext";
import useAuth from "./../auth/useAuth";
// import apiEndPoint from "../../apiEndPoint";

export default function TodoProvider({ children }) {
  //
  const { user } = useAuth();
  const userUID = user?.uid;
  //
  const [todos, setTodos] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTodo = async () => {
      if (!user) {
        setTodos([]);
        setIsLoading(false);
        return;
      }
      let api = `http://localhost:3000/api/todos?userUID=${userUID}`;
      if (currentFilter === "completed") {
        api += `&isCompleted=true`;
      } else if (currentFilter === "pendding") {
        api += `&isCompleted=false`;
      } else {
        api += `&`;
      }
      if (userUID) {
        try {
          setIsLoading(true);
          const res = await fetch(api);
          const response = await res.json();
          // Backend returns { success: true, data: [...] }
          const todoData = response.data || response;
          
          if (Array.isArray(todoData)) {
            setTodos(todoData.reverse());
          } else {
            setTodos([]);
          }
        } catch (error) {
          // setIsLoading(false)
          console.log("error from get todo", error.message);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchTodo();
  }, [userUID,currentFilter]);
  //
  // useEffect(() => {
  //   // console.log(todos);
  //   // console.log(userUID)
  //   // console.log(currentFilter);
  // }, [todos, userUID, currentFilter]);
  //
  const todoInfo = {
    todos,
    setTodos,
    isLoading,
    currentFilter,
    setCurrentFilter,
  };
  return (
    <TodoContext.Provider value={todoInfo}>{children}</TodoContext.Provider>
  );
}
