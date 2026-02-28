import "./Home.css";
import Footer from "../Footer/Footer";
import bannerImg from "../Assets/banner.jpg";
import Navbar from "../Navbar/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="home">
            <h1>Welcome to Our Clinic</h1>
            <img src={bannerImg} alt="banner-image" className="home-image"></img>
            <p className="home-text">
              We care about your health and provide quality medical services.
            </p>
          <div className="features">
          <div className="feature-box">
            <span>🧪🔬</span>
            <h3>Laboratory</h3>
            <p>Advanced diagnostic and testing services</p>
          </div>

          <div className="feature-box">
            <span>🩻📸</span>
            <h3>Radiology</h3>
            <p>X-Ray, MRI, CT scan facilities</p>
          </div>

          <div className="feature-box">
            <span>🚑</span>
            <h3>Emergency Care</h3>
            <p>24/7 emergency and trauma services</p>
          </div>

          <div className="feature-box">
            <span>🛏️</span>
            <h3>In-Patient Care</h3>
            <p>Comfortable rooms with continuous monitoring</p>
          </div>

          <div className="feature-box">
            <span>🧑‍⚕️📞</span>
            <h3>Telemedicine</h3>
            <p>Online doctor consultations from home</p>
          </div>

          <div className="feature-box">
            <span>🧼✨</span>
            <h3>Hygiene & Safety</h3>
            <p>Strict sanitation and safety standards</p>
          </div>
          <div className="feature-box"> 
            <span>👨‍⚕️👩‍⚕️</span> 
            <h3>Doctors</h3> 
            <p>Experienced and friendly doctors</p> 
          </div> 
          <div className="feature-box"> 
            <span>💊🩺</span> 
            <h3>Treatment</h3> 
            <p>Modern treatment facilities available</p> 
          </div> 
          <div className="feature-box"> 
            <span>📅⏰</span> 
            <h3>Appointments</h3> 
            <p>Easy online booking for treatments</p> 
          </div> <div className="feature-box"> 
            <span>🏥💉</span> 
            <h3>Pharmacy</h3> 
            <p>Quality medicines are available</p> 
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
