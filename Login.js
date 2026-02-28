import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Login.css";

function Login() {
  return (
    <>
    <Navbar />
    <div className="login-container">
      <div className="login-card">
        <h1>Login</h1>
        <p>Please Login to explore more</p>
        <form className="login-form">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Login;
