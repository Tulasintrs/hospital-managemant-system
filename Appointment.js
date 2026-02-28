import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Appointment.css";

function Appointment() {
  return (
    <>  
      <Navbar /> 
      <div className="appointment">
        <div className="appointment-card">
          <h2>Book Appointment</h2>
          <p>Book Appointments for easy approach</p>
          <form className="appointment-form">
            <input type="text" placeholder="Patient Name" />
            <input type="number" placeholder="Age" />
            <input type="text" placeholder="Doctor Name" />
            <input type="date" />
            <button>Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Appointment;