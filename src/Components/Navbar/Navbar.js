import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import StayHealthyLogo from '../../Images/StayHealthyLogo.png';
import Sign_Up from '../Sign_Up/SignUp';
import Login from '../Login/Login'


const Navbar = () => {
    const [click, setClick] = useState(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const[email,setEmail]=useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const handleClick = () => setClick(!click);
    const emailPrefix = sessionStorage.getItem('emailPrefix');
    
    const handleLogout = () => {
        sessionStorage.removeItem("auth-token");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("phone");
        sessionStorage.removeItem('emailPrefix');
        localStorage.removeItem("doctorData");
        setIsLoggedIn(false);
        setUsername("");
   
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key.startsWith("reviewFormData_")) {
            localStorage.removeItem(key);
          }
        }
        setEmail('');
        window.location.reload();
    }
    const handleDropdown = () => {
      setShowDropdown(!showDropdown);
    }
    useEffect(() => { 
      const storedemail = sessionStorage.getItem("email");

      if (storedemail) {
            setIsLoggedIn(true);
            setUsername(storedemail);
          }
        }, []);
  return (
    <nav>
      <div className="nav__logo">
        <Link to="/">
          <img src={StayHealthyLogo} alt="Stay Healthy Logo, a stethoscope in heart shape with the words Stay Healthy"/>
        </Link>
      </div>
      <div className="nav__icon" onClick={handleClick}>
        <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
      <ul className={click ? 'nav__links active' : 'nav__links'}>
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/search/doctors">Appointments</Link>
        </li>
        <li className="link">
          <Link to="/healthblog">Health Blog</Link>
        </li>
        <li className="link">
         <Link to="/reviews">Reviews</Link>
        </li>
        {isLoggedIn?(
          <>
            <li className="link" onClick={handleDropdown}>
                Welcome, {emailPrefix}!
            </li>
            <li className="link">
              <button className="btn2" onClick={handleLogout}>
                Logout
              </button>
            </li>
            
          </>
        ) : (
          <>
            <Link to="/Sign_Up"><button className="btn1">SignUp</button></Link>
            <Link to="/Login"><button className="btn1">Login</button></Link>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

