import { useState } from 'react';
import useOnlineStatus from '../utils/useOnlineStatus';

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
        <h1>Logo</h1>
      </div>
      <button className="navbar-toggle" onClick={toggleNavbar}>
        <span className="navbar-toggle-icon"></span>
      </button>
      <div className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <ul>
        <li>
          {onlineStatus? "🛜" :"🚫" }
         </li>
         
        <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>

    </>
  )
}
export default Header;