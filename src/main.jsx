import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layout/RootLayout.jsx';
import AllApps from './Pages/Apps/AllApps.jsx';
import Homepage from './Pages/Homepage/Homepage.jsx';
import InstallApps from './Pages/Install/InstallApps.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,

    children:[
      {
        index: true,
        element: <Homepage></Homepage>
      },
      {
        path : "/apps",
        element: <AllApps></AllApps>
      }
      ,
      {
        path: "/installed",
        element: <InstallApps></InstallApps>
      }


    ],
    errorElement: <h2>This page is not available. </h2>
  },

  


]);

createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router}></RouterProvider>
)
