import React, { useEffect, useState } from 'react'
import AdminContext from './AdminContext'

export default function AdminProvider({children}) {
      const [UsersData, setUsersData] = useState([]);
  const [TodosData, setTodosData] = useState([]);
  const [loading, setLoading] = useState(false);
  const GetAllUsers = async () => {
    const res = await fetch("http://localhost:3000/users");
    const data = await res.json();
    // console.log(data);

    return data;
  };
  const GetAllTodos = async () => {
    const res = await fetch("http://localhost:3000/todos");
    const data = await res.json();
    // console.log(data);

    return data;
  };
  useEffect(() => {
    try {
      const GetAllData = async () => {
        setLoading(true);
        const users = await GetAllUsers();
        const todos = await GetAllTodos();
        setUsersData(users);
        setTodosData(todos);
        setLoading(false);
      };
      GetAllData();
    } catch (error) {
      console.log(error);
    }
  }, []);

  

  console.log(UsersData);
  console.log(TodosData);
    const AdminInfo={
        UsersData,
        TodosData,
        loading,
    }
  return (
    <AdminContext.Provider value={AdminInfo}>{children} </AdminContext.Provider>
  )
}
