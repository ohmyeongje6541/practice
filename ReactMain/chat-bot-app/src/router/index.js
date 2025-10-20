import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/Home";
import CreateContent from "../pages/CreateContent"
import Chat from "../pages/Chat";
import StreamChat from "../pages/StreamChat"
import AuthLayout from "../layout/AuthLayout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/create-content",
        Component: CreateContent,
      },
      {
        path: "/chat",
        Component: Chat,
      },
      {
        path: "/stream-chat",
        Component: StreamChat,
      },
      {
        Component: AuthLayout,
         children: [
          {
            path: "/login",
            Component: Login,
          },
          {
            path: "/signup",
            Component: Signup,
          },
        ],
      }
    ],
    
  },
]);

export default router;
