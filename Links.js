import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../Landing/Landing";
import Login from "../Login/Login";
import Home from "../Home/Home";
import Signup from "../Signup/Signup";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Doctors from "../Doctors/Doctors";
import Appointment from "../Appointment/Appointment";

function AppRouters() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="home" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/doctors" element={<Doctors />} />
                <Route path="/appointment" element={<Appointment />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouters;
