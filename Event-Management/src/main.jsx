import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Services from './Pages/Services.jsx';
import Registration from './Pages/Registration.jsx';
import Login from './Pages/Login.jsx';
import AboutUs from './Pages/AboutUs.jsx';
import Layout from './Pages/layout.jsx';
import AuthProvider from './componets/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path: "/",
        element:<Home></Home>
    },
      {
          path: "/Services",
          element:<Services></Services>
      },

      {
        path: "/AboutUs",
        element:<AboutUs></AboutUs>
    },
    {
      path: "/Registration",
      element:<Registration></Registration>
  },
  {
    path: "/Login",
    element:<Login></Login>
},
   ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  
  </React.StrictMode>,
)
