import React, { useState } from "react";
import useTodo from "../../context/todo/useTodo";
import TodoContext from "./../../context/todo/TodoContext";
import TogoleIsComplete from "./todoButton/TogoleIsComplete";
import Delete from "./todoButton/Delete";
import Edit from "./todoButton/Edit";
export default function AllTodo() {
  // const {todo,isLoading}=useTodo()
  const [editingID, setEditingID] = useState(null);
  const { todos } = useTodo();

  
  //handle edit title
  // const handleEdit = (item) => {
  //   setEditingID(item.id);
  //   setUpdatedTitle(item.title);
  // };
  // handle update title
  // const handleUpdate = (id) => {
  //   if (!updatedTitle.trim()) return;

  //   const updatedTodo = todos.map((item) =>
  //     item.id === id ? { ...item, title: updatedTitle } : item,
  //   );
  //   // console.log(updatedTodo)
  //   setTodos(updatedTodo);
  //   setEditingID(null);
  // };

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
                  {/* <input
                    type="checkbox"
                    checked={item.isCompleted}
                    onChange={() =>
                      handleIsCompleted(item.id, item.isCompleted)
                    }
                    className="w-5 h-5 accent-blue-500 cursor-pointer"
                  /> */}
                  <TogoleIsComplete item={item}/>
                  {editingID === item.id ? null : (
                    <h3 className="text-gray-800 text-base font-medium">
                      {item.title}
                    </h3>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {/* {editingID === item.id ? (
                    <div className="flex items-center gap-2 bg-gray-50 p-2 rounded-lg shadow-sm">
                      <input
                        type="text"
                        value={updatedTitle}
                        onChange={(e) => setUpdatedTitle(e.target.value)}
                        placeholder="Edit todo..."
                        className="px-3 py-1 border rounded-md outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                      />

                      <button
                        onClick={() => handleUpdate(item.id)}
                        
                        className="px-3 py-1 text-sm rounded-md bg-green-500 text-white hover:bg-green-600 transition"
                      >
                        Save
                      </button>

                      <button
                        onClick={() => setEditingID(null)}
                        className="px-3 py-1 text-sm rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleEdit(item)}
                      className="px-3 py-1 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600 transition shadow-sm"
                    >
                      Edit
                    </button>
                  )} */}
                  {/* edit button */}
                  <Edit item={item} setEditingID={setEditingID} editingID={editingID}/>

              {/* delete button */}
              <Delete item={item}/>
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
