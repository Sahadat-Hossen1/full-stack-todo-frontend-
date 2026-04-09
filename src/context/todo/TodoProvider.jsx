import React from 'react'
import TodoContext from './TodoContext'

export default function TodoProvider({children}) {
    const todoInfo={
        todos:[
            {id:1,title:"Learn React Context API",completed:false},
            {id:2,title:"Build a Todo App",completed:false},
            {id:3,title:"Master React Hooks",completed:false},
        ]
    }
  return (
    <TodoContext.Provider value={todoInfo}>{children}</TodoContext.Provider>
  )
}
