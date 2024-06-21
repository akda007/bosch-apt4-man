import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Products from './Products.jsx'
import Navigation from './Navigation.jsx'
import Root from './Root.jsx'
import Api from './Api.jsx'
import MapPage from './MapPage.jsx'
import Graphs from './Graphs.jsx'

const router = createBrowserRouter([{
  path: "/",
  element: <Root/>
},
{
  path: "/products",
  element: <Products/>
},
{
  path: "/api",
  element: <Api/>
},
{
  path: "/map",
  element: <MapPage/>
},
{
  path: "/graphs",
  element: <Graphs/>
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
