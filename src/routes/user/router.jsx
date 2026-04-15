import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Registration from "../../pages/Registration";
import UserProfile from "../../pages/UserProfile";
import PrivateRout from "../privateRout/PrivateRout";
import Admin_dashboard from "../../pages/Admin_dasboard";
import AdminPrivateRout from "../privateRout/AdminPrivateRout";
import AdminLayout from "../../layout/AdminLayout";
import Admin_All_User from "../../pages/Admin_All_User";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/userprofile",
        element: (
          <PrivateRout>
            <UserProfile />
          </PrivateRout>
        ),
      },
    ],
  },

  {
    path: "/admin",
    element: (
      <AdminPrivateRout>
        <AdminLayout />
      </AdminPrivateRout>
    ),
    children: [
      {
        path: "/admin",
        element: <Admin_dashboard />,
      },
      {
        path: "admin/allusers",
        element: <Admin_All_User />,
      },
    ],
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);
export default router;
