import React from "react";
import useAuth from "../../context/auth/useAuth";
import useTodo from "../../context/todo/useTodo";

export default function AddTodo() {
  const {user}=useAuth();
  const{todos,setTodos}=useTodo()
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    if(!user?.uid){
      alert("Please login to add todo")
      return
    }
    const newTodo={
      title,
      id:Date.now(),
      completed:false,
      userUID:user?.uid

    }
    // console.log(newTodo);
    fetch("http://localhost:3000/todos",{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(newTodo)
    }).then(res=>res.json())
    .then((data)=>{
      console.log("success from add todo", data);
      setTodos([...todos,data])
      form.reset()
    }).catch(error=>{
      console.log("error from add todo", error.message);
    })
  };
  return (
    <div>
      <h2 className="text-2xl text-center font-bold mb-4">Add New Todo</h2>
      <form
        className="max-w-xl mx-auto flex justify-between items-center bg-orange-100  rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter a new todo"
          name="title"
          required
          className="w-3/4 pl-2 bg-transparent border-none focus:outline-none"
        />
        <button
          type="submit"
          className="w-1/4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}
