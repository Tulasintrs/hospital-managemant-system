// import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
// import About from "../About/About";
// import Doctors from "../Doctors/Doctors";
// import Appointment from "../Appointment/Appointment";   
// import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import "./Landing.css";

function Landing() {
    return (
        <>
            <Navbar />
            <div className="landing-container">
                <h2>Welcome To Our Clinic</h2>
                <p>
                  A hospital provides care, treatment, and support to keep people healthy and safe.
                </p>
            </div>
            {/* <Home /> */}
            {/* <About /> */}
            {/* <Doctors /> */}
            {/* <Appointment /> */}
            {/* <Contact /> */}
            <Footer />
        </>
    );
}

export default Landing;
