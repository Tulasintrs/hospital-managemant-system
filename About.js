import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./About.css";

import aboutImg from "../Assets/about.jpg"

function About() {
  return (
    <>
      <Navbar />
      <div className="about-container">
        <h2 className="about-head">About Our Clinic</h2>
        <img src={aboutImg} alt="about-image" className="about-img" />
        <div className="about">
          <p>
            Our clinic provides quality healthcare with experienced doctors
            and modern facilities. We focus on patient care, safety,
            and comfort. <br /><br />
          </p>
          <h3>Discription</h3>
          <p>At HealthCare Clinic, we are dedicated to providing high-quality healthcare with a patient-centered approach. Our team of experienced doctors, nurses, and medical staff work together to ensure that every patient receives personalized care in a safe and comfortable environment.</p>
          <h3>Mission</h3>
          <p>At HealthCare Clinic, our mission is to provide compassionate, high-quality healthcare that prioritizes patient safety, comfort, and well-being. We strive to deliver personalized medical care using modern technology and experienced professionals, ensuring every patient feels valued, informed, and supported throughout their health journey.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}


export default About;
