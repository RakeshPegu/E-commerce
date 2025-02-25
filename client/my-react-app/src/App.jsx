import React from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './routes/Home/Home';
import Register from './routes/Register/Register';
import Login from './routes/Login/Login';
import {Layout, RequiredAuthentication } from './components/Layout/Layout';

import Error from './components/ErrorPage/Error';
import MangageAddress from './routes/MangageAddress/MangageAddress';
import ProfilePage from './routes/ProfilePage/ProfilePage';
import Profile from './routes/ProfileLayout/ProfileLayout';
import EditPage from './routes/EditPage/EditPage';
const route = createBrowserRouter([
  {
    path: "/",
    element:<Layout/>,
    errorElement:<Error/>,
    children :[
      {
        path:"/",
        element: <Home/>
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: '/login',
        element :<Login/>
      }
    ]
  
  },
  {
    path :"/",
    element: <RequiredAuthentication/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/profile/:userId",
        element: <Profile/>,
        children :[
          {
            path:"/profile/:userId",
            element: <ProfilePage/>
          },
          {
            path:"/profile/:userId/manage_address",
            element: <MangageAddress/>
          },
          {
            path:"/profile/:userId/edit",
            element: <EditPage/>
          }
        ] 
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={route}/>
  );
};

export default App;