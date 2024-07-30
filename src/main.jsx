import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PatientDetails from "./PatientDetails.jsx"
import Nav from "./Nav.jsx"
import { createBrowserRouter,RouterProvider} from 'react-router-dom'

let router=createBrowserRouter([
  {
    path:'/',
    element:<Nav />,
    errorElement:<div>Error 404</div>,
  },
  {
    path:'/post',
    element:<App />
  },
  {
    path:'/get',
    element:<PatientDetails />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
