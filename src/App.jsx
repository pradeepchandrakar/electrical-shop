

import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer'
import Header from './components/Header'
 

import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {


  return (
    <>
    <Header/>
    <Outlet/>
   <Footer/>
      
    </>
  )
}

export default App
