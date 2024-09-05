import React from 'react'
import { createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Login from './Login'
import Browse from './Browse'
import { useDispatch } from 'react-redux'



//  Body has two chances. It can be Login/Signup or The browse section where movies are shown.
//  Since both have different links or path, routes should be created first for both of them
//  and both should come under body section.

   const Body = () => {
 const dispatch = useDispatch();
  
  const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Login/>,
    },
    {
        path: "/browse",
        element: <Browse/>,
    },
  ]);
  

    

  return (
    <div>
    <RouterProvider router={appRouter}/>
    </div>
  );
};

export default Body;