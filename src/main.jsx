import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layout/RootLayout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,

    children:[
      {
        index: true,
        element: <h2>Home Page</h2>
      },
      {
        path : "/apps",
        element: <h1>All Apps</h1>
      }
    ],
    errorElement: <h2>This page is not available. </h2>
  },

  


]);

createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router}></RouterProvider>
)
