import React, { useEffect, useState } from 'react'
import TodoContext from './TodoContext'
import useAuth from './../auth/useAuth';

export default function TodoProvider({children}) {
  // 
  const{user}=useAuth()
  const userUID=user?.uid;
  // 
 const[todo,setTodo]=useState([])
 const[isLoading,setIsLoading]=useState(false)

useEffect(()=>{
 const fetchTodo=async()=>{
   if(!user) {
  setTodo([])
  setIsLoading(false)
  return
 }
 if(userUID){
  try {
    setIsLoading(true)
    const res=await fetch(`http://localhost:3000/todos?userUID=${userUID}`)
    const data=await res.json()
    setTodo(data)
  } catch (error) {
    // setIsLoading(false)
    console.log("error from get todo", error.message);
    
  }finally {
    setIsLoading(false)
  }
 }
}
fetchTodo()
},[userUID])
// 
useEffect(()=>{
  // console.log(todo);
  
})
// 
const todoInfo={
todo,isLoading
}
  return (
    <TodoContext.Provider value={todoInfo}>{children}</TodoContext.Provider>
  )
}
