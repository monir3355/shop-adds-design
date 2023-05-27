import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main.jsx";
import VideoDetail from "./pages/VideoDetail.jsx";
import HomeLayout from "./layout/HomeLayout.jsx";
import Home from "./pages/home/Home.jsx";
import Category from "./pages/Category.jsx";
import Tags from "./pages/Tags.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <HomeLayout />,
        children: [
          { path: "/", element: <Home></Home> },
          { path: "category", element: <Category /> },
          { path: "tags", element: <Tags /> },
        ],
      },
      {
        path: "/videoDetail/:id",
        element: <VideoDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <div className="bg-blue-950 text-white min-w-[1920px] mx-auto"></div> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
