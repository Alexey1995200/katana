import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './clean_style.css'
import {createBrowserRouter, createHashRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/layout";
import {ErrorPage} from "./components/err";
import Main from "./pages/Main";
import BlogPage from "./pages/Blog";
import DeliveryPage from "./pages/Delivery";
import Contacts from "./pages/Contacts";

const isGitHubPages = window.location.hostname.includes("github.io");
const routes = [
  {
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {path: "/", element: <Main/>},
      // { path: "about", element: <AboutUs /> },
      {path: "blog", element: <BlogPage/>},
      {path: "delivery", element: <DeliveryPage/>},
      {path: "contacts", element:<Contacts/>}
      // {
      //   path: "menu",
      //   element: <MenuLayout />, // Новий Layout для меню
      //   children: [
      //     { path: "pizza", element: <Pizza /> },
      //     { path: "soup", element: <Soup /> },
      //   ],
      // }
    ],
  },
]

const router = isGitHubPages
  ? createHashRouter(routes)
  : createBrowserRouter(routes);

export const App = () => {
  return <RouterProvider router={router}/>;
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
