import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import Register from "./Register";

function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Login submitted:", email, password);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const [currentPage, setCurrentPage] = useState(0);
  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
    };
    if (currentPage === 0) {

  return (
    <div className="container">
      <div className="login-box">
        <h1>Login to your account.</h1>
        <p>Please sign in to your account</p>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            <button type="button" className="visibility-button">
              👁
            </button>
          </div>
          <div className="forgot-password">
          <Link to="/forgot-password">Forgot password?</Link>
            {/* <button type="button" className="link-button">Forgot password?</button> */}
          </div>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
          <div className="divider">
            <span>Or sign in with</span>
          </div>
          <button type="button" className="google-button">
          <img src="https://www.google.com/favicon.ico" alt="Google logo" />
          </button>
          <div className="register" >
            Don't have an account? 
            <Link to="/register" onClick={handleNextClick}>Register</Link>
            {/* <button type="button" className="link-button" onClick={handleNextClick}>Register</button> */}
          </div>
        </form>
      </div>
    </div>
  );

} else if (currentPage === 1) {
  return <Register />;
}
}

export default Login;
