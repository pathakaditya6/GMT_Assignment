import React, { useState } from 'react';
import './Login.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase';
import {setDoc, doc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';


function Register() {
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAgreeChange = (event) => {
    setIsAgreed(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if(user){
        await setDoc(doc(db, 'users', user.uid),{
          userName: userName,
          email: email,

        });
        }
      console.log("User Register Successfuly!!");
      toast.success("User Register Successfully!!",{
      
       
 
      });

    } catch (error) {
      console.log(error.message);
      toast.error(error.message,{
        
 
        
        });
    }


    console.log('Form submitted with data:', { email, userName, password });
  };

  return (

    <div className="container">
        <div className="login-box">
      <h1>Create your new account</h1>
      <p>Create an account to start looking for the food you like</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="input-group">
          <label>User Name</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={handleUserNameChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="input-group">
          <input
            type="checkbox"
            id="agree"
            checked={isAgreed}
            onChange={handleAgreeChange}
          />
          <label>
            I Agree with Terms of Service and Privacy Policy
          </label>
        </div>
         <button type="submit" disabled={!isAgreed}>
          Register
        </button>
      </form>
      <p>Or sign in with</p>
      <button type="button">
        <img src="https://www.google.com/favicon.ico" alt="Google logo" />
      </button>
      <p>Have an account? <a href="/">Sign In</a></p>
    </div>
    <ToastContainer />
    </div>
  
  );
}

export default Register;
