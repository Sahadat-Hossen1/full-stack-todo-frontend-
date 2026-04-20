import React from 'react'
import useTodo from '../../context/todo/useTodo'

export default function AllTodo() {
// const {todo,isLoading}=useTodo()
const{todos}=useTodo();

  return (
    <div>
      
     
    <div className="min-h-screen bg-gray-100 p-6">
  {todos?.length > 0 ? (
    <section className="max-w-2xl mx-auto space-y-4">
      {todos.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between bg-white rounded-xl shadow-sm hover:shadow-md transition duration-200 p-4"
        >
          {/* Left side */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              className="w-5 h-5 accent-blue-500 cursor-pointer"
            />
            <h3 className="text-gray-800 text-base font-medium">
              {item.title}
            </h3>
          </div>

          {/* Right side */}
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm rounded-md bg-blue-100 text-blue-600 hover:bg-blue-200 transition">
              Edit
            </button>
            <button className="px-3 py-1 text-sm rounded-md bg-red-100 text-red-600 hover:bg-red-200 transition">
              Delete
            </button>
          </div>
        </div>
      ))}
    </section>
  ) : (
    <div className="flex items-center justify-center h-[60vh]">
      <p className="text-gray-500 text-lg">No todo found</p>
    </div>
  )}
</div>
    </div>
  )
}
