import { useState } from 'react';
import useOnlineStatus from '../utils/useOnlineStatus';
import HomePage from './HomePage';

function Header(){

  const onlineStatus = useOnlineStatus()

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  

  return(
    <>
     <nav className="navbar">
      <div className="navbar-brand">
        <h1 className='log'><span className='logo1'>Chandrakar </span><span>Electrical</span> </h1>
      </div>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        <span className="navbar-toggle-icon"></span>
      </button>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <ul>
        <li>
          {onlineStatus? "🛜" :"🚫" }
         </li>
         
        <li><a href="/">Home</a></li>
       <li><a href="service">Services </a></li>       
          <li><a href="/about">About Us </a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li><a href="#">Reviews</a></li>
        </ul>
      </div>
    </nav>
   

    </>
  )
}
export default Header;