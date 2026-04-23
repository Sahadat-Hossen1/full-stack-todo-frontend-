import React, { useState } from "react";
import useTodo from "../../context/todo/useTodo";
import TodoContext from "./../../context/todo/TodoContext";
import TogoleIsComplete from "./todoButton/TogoleIsComplete";
import Delete from "./todoButton/Delete";
import Edit from "./todoButton/Edit";
export default function AllTodo() {
  // const {todo,isLoading}=useTodo()
  const [editingID, setEditingID] = useState(null);
  //
  const { todos, currentFilter, setCurrentFilter } = useTodo();

  return (
    <div>
      {/* sorting todos by boolean */}
      {/* <select value={currentFilter} onChange={(e)=>setCurrentFilter(e.target.value)}
        
        >
        
        <option value="all">All</option>
        <option value="completed"> Completed</option>
        <option value="pendding">Pendding</option>
      </select> */}
      <div className="flex justify-center my-6">
        <div className="flex gap-2">
        {["all", "completed", "pendding"].map((filter) => (
          <button
            key={filter}
            onClick={() => setCurrentFilter(filter)}
            className={`px-4 py-1.5 rounded-full text-sm capitalize transition 
        ${
          currentFilter === filter
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        }`}
          >
            {filter}
          </button>
        ))}
      </div>
      </div>
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
                  {/* <input
                    type="checkbox"
                    checked={item.isCompleted}
                    onChange={() =>
                      handleIsCompleted(item.id, item.isCompleted)
                    }
                    className="w-5 h-5 accent-blue-500 cursor-pointer"
                  /> */}
                  <TogoleIsComplete item={item} />
                  {editingID === item.id ? null : (
                    <h3 className="text-gray-800 text-base font-medium">
                      {item.title}
                    </h3>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {/* edit button */}
                  <Edit
                    item={item}
                    setEditingID={setEditingID}
                    editingID={editingID}
                  />

                  {/* delete button */}
                  <Delete item={item} />
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
  );
}
