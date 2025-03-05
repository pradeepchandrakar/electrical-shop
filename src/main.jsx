import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Services from "./components/Services"
import AboutUs from"./components/About.jsx"
import Contact from "./components/Contact.jsx"
import Reviews from "./components/Reviews.jsx"
import ProductDetail from './components/ProductDetail.jsx';
import HomePage from './components/HomePage.jsx';
import Error from './components/Error.jsx';

const appRouter = createBrowserRouter([
  {
    path :"/",
    element : <App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<HomePage/>,
       
      },
      {
        path :"service",
        element:<Services/>,
        
      },
      {
        path:"about",
        element:<AboutUs/>
      },
      {
      path :"contact",
      element : <Contact/>,
    },
    {
    path:"reviews",
    element:<Reviews/>
    },
    {
      path:"/:id",
      element:<ProductDetail/>
    
    }
    ]
  },
 
  ])
  
  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <RouterProvider router={ appRouter} />
    </StrictMode>,
  )
  
