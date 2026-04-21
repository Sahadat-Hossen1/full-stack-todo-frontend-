import React from "react";
import useAuth from "../../context/auth/useAuth";
import useTodo from "../../context/todo/useTodo";

export default function AddTodo() {
  const {user}=useAuth();
  const{todos,setTodos}=useTodo()
 console.log(todos);
 
  const handleSubmit =async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
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
      // console.log("success from add todo", data);
      setTodos([...todos,data])
      // form.reset()
    }).catch(error=>{
      console.log("error from add todo", error.message);
    })
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = e.target;
  //   const title = formData.title.value;
  //   // const password = formData.password.value;
  //   // console.log({ title, password })
  //   const newUser = { title, id: Date.now() ,userUID:user?.uid};
  //   // console.log(title);
  //      debugger
  //   if (title) {
  //     fetch("http://localhost:3000/todos", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newUser),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log("User added:", data);
  //         setTodos(prev=> [...prev, data]); // Update the users state with the new user
  //       })
  //       .catch((error) => {
  //         console.error("Error adding user:", error);
  //       });

  //     formData.reset(); // Reset the form after submission
  //   }

  //   //sending user data to server
  // };
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
