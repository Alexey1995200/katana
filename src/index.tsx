import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './clean_style.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/layout";
import {ErrorPage} from "./components/err";
import Main from "./pages/Main";
import BlogPage from "./pages/Blog";
import DeliveryPage from "./pages/Delivery";


const router = createBrowserRouter([
  {
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {path: "/", element: <Main/>},
      // { path: "about", element: <AboutUs /> },
      {path: "blog", element: <BlogPage/>},
      {path: "delivery", element: <DeliveryPage/>},
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
]);

export const App = () => {
  return <RouterProvider router={router}/>;
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
