
import './Navbar.css';
import StayHealthyLogo from '../../Images/StayHealthyLogo.png';
import { Link } from 'react-router-dom';
import Sign_Up from '../Sign_Up/SignUp';
import Login from '../Login/Login'

function Navbar() {
  return (
    <div >
      <header>
        <nav>
            <a href="../Landing_Page/LandingPage.html" className="nav__logo">
                <img src={StayHealthyLogo} alt="Stay Healthy Logo, a stethoscope in heart shape with the words Stay Healthy"/>
            </a>
            <div className="nav__icon" >
                <i className="fa fa-times fa fa-bars"></i>
            </div>

            <div className="nav__links active">
                <a href="#" className="link">Home</a>
                <a href="#" className="link">Appointments</a>
                <a href="#" className="link">Health Blog</a>
                <a href="#" className="link">Reviews</a>
                <Link to="/Sign_Up"><button className="btn1">SignUp</button></Link>
                <Link to="/Login"><button className="btn1">Login</button></Link>
            </div>
        </nav>
    </header>
    </div>
  );
}

export default Navbar;
