import React, { useEffect, useState } from 'react'
import AdminContext from './AdminContext'
// import apiEndPoint from '../../apiEndPoint';

export default function AdminProvider({children}) {
      const [AllUsersData, setAllUsersData] = useState([]);
  const [AllTodosData, setAllTodosData] = useState([]);
  const [loading, setLoading] = useState(false);
  const GetAllUsers = async () => {
    const res = await fetch(`http://localhost:3000/api/users`);
    const data = await res.json();
    // console.log(data);

    return data;
  };
  const GetAllTodos = async () => {
    const res = await fetch(`http://localhost:3000/api/todos`);
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
        setAllUsersData(users);
        setAllTodosData(todos);
        setLoading(false);
      };
      GetAllData();
    } catch (error) {
      console.log("error from get all users & todos data", error.message );
    }
  }, []);

  

  // console.log(AllUsersData);
  // console.log(AllTodosData);
    const AdminInfo={
        AllUsersData,
        AllTodosData,
        loading,
    }
  return (
    <AdminContext.Provider value={AdminInfo}>{children} </AdminContext.Provider>
  )
}
