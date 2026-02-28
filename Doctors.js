import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Doctors.css";

import doctor1Img from "../Assets/doctor1.png";
import doctor2Img from "../Assets/doctor2.png";
import doctor3Img from "../Assets/doctor3.png";
import doctor4Img from "../Assets/doctor4.png";
function Doctors() {
  return (
    <>
    <Navbar />
    <h2>Our Doctors</h2><br/>
    <div className="doctors">
      <div className="doctor-card">
        <img src={doctor1Img} alt="doctor1-img"></img>
        <h4>Dr. Ramesh Kumar</h4>
        <p>MBBS, MD (General Medicine)</p>
        <p>Experience: 12 years</p>
        <p><strong>Status:</strong>Available</p>
      </div>

      <div className="doctor-card">
        <img src={doctor2Img} alt="doctor2-img"></img>
        <h4>Dr. Anjali Sharma</h4>
        <p>MBBS, MS (Gynecology)</p>
        <p>Experience: 10 years</p>
        <p><strong>Status:</strong>Available</p>
      </div>

      <div className="doctor-card">
        <img src={doctor3Img} alt="doctor3-img"></img>
        <h4>Dr. Suresh Patel</h4>
        <p>MBBS, MS (Orthopedics)</p>
        <p>Experience: 15 years</p>
        <p><strong>Status:</strong>Not Available</p>
      </div>

      <div className="doctor-card">
        <img src={doctor4Img} alt="doctor4-img"></img>
        <h4>Dr. Priya Nair</h4>
        <p>MBBS, MD (Pediatrics)</p>
        <p>Experience: 8 years</p>
        <p><strong>Status:</strong>Available</p>
      </div>
    </div>
    <h3>About Our Doctors</h3>
    <p>Each doctor at HealthCare Clinic is dedicated to patient-centered care, combining modern medical technology with a personal touch. Our team collaborates across specialties to ensure every patient receives the best treatment plan possible.</p>
    <Footer />
    </>
  );
}

export default Doctors;
