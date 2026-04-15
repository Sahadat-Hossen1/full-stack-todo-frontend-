import React, { useEffect } from 'react'
import TodoContext from './TodoContext'

export default function TodoProvider({children}) {
useEffect(()=>{},[])
const todoInfo={
todo:[]
}
  return (
    <TodoContext.Provider value={todoInfo}>{children}</TodoContext.Provider>
  )
}
