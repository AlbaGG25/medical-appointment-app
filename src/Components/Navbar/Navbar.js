
import './Navbar.css';

function Navbar() {
  return (
    <div >
      <header>
        <nav>
            <a href="../Landing_Page/LandingPage.html" className="nav__logo">
                <img src="../Images/StayHealthyLogo.png" alt="Stay Healthy Logo, a stethoscope in heart shape with the words Stay Healthy"/>
            </a>
            <div className="nav__icon" >
                <i className="fa fa-times fa fa-bars"></i>
            </div>

            <div className="nav__links active">
                <a href="#" className="link">Home</a>
                <a href="#" className="link">Appointments</a>
                <a href="#" className="link">Health Blog</a>
                <a href="#" className="link">Reviews</a>
            </div>
             <div>
                <a href="../Sign_Up/Sign_Up.html" >
                  <button className="btn1">SignUp</button>
                </a>
                <a href="../Login/Login.html">
                  <button className="btn1">Login</button>
                </a>
            </div>
        </nav>
    </header>
    </div>
  );
}

export default Navbar;
