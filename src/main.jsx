import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./context/auth/AuthProvider.jsx";
import TodoProvider from "./context/todo/TodoProvider.jsx";
import AdminProvider from './context/Admin/AdminProvider';

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <AdminProvider>
    <AuthProvider>
     <TodoProvider>
      <App />
     </TodoProvider>
    </AuthProvider>
   </AdminProvider>
  </StrictMode>,
);
