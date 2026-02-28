import "./Navbar.css";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <>
            <nav className="nav-container">
                <h2>HealthCare</h2>
                <ul className="nav-links">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/doctors">Doctors</Link></li>
                    <li><Link to="/appointment">Appointment</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default Navbar;