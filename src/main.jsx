import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layouts/Root/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Auth/Login/Login';
import Register from './Auth/Register/Register';
import AuthProvider from './Provides/AuthProvider/AuthProvider';
import NewsDetails from './Pages/NewsDetails/NewsDetails';
import PrivetRout from './Routes/PrivetRout/PrivetRout';
import Profile from './Routes/Profile/Profile';
import AboutPage from './Pages/AboutPage/AboutPage';
import Career from './Pages/Career/Career';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/news.json').then(res => res.json()),
      },
      {
        path: '/news/:id',
        element: <PrivetRout><NewsDetails></NewsDetails></PrivetRout>,
        loader: () => fetch('/news.json').then(res => res.json()),
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/profile',
        element: <PrivetRout><Profile></Profile></PrivetRout>,
      },
      {
        path: "/about",
        element: <AboutPage></AboutPage>,
      },
      {
        path: '/career',
        element: <Career></Career>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
