import "./Contact.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import { useState,useEffect } from "react";
function Contact() {
//   let [users,setUser]=useState([])
//   useEffect(()=>{
//     let response=axios.get(
      
//     )
//   }, []);
  
//   return null;
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-card">
          <h1>Contact Us</h1>
          <p>If There Is Any Query, Please Contact Us</p>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
