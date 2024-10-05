import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^.{8,}$/;
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [confirmPasswordIsValid, setConfirmPasswordIsValid] = useState(true);
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailIsValid(emailRegex.test(e.target.value));
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordIsValid(passwordRegex.test(e.target.value));
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordIsValid(password === e.target.value);
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(emailIsValid&&passwordIsValid&&confirmPasswordIsValid){
      alert('Form submitted successfully');
    }
    else{
      alert("Can't submit the form");
    }

  }
  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <div className="formFields">
          <label htmlFor="email" className="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={emailIsValid ? "valid" : "invalid"}
            value={email}
            onChange={handleEmail}
            required
          />
          {!emailIsValid && <p className="error">Invalid email format</p>}
        </div>
        <div className="formFields">
          <label htmlFor="password" className="password">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className={passwordIsValid ? "valid" : "invalid"}
            value={password}
            onChange={handlePassword}
            required
          />
          {!passwordIsValid && (
            <p className="error">Password must be at least 8 charcters</p>
          )}
        </div>
        <div className="formFields">
          <label htmlFor="confirmPassword" className="confirmPassword">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            id="confirmPassword"
            className={confirmPasswordIsValid ? "valid" : "invalid"}
            value={confirmPassword}
            onChange={handleConfirmPassword}
            required
          />
          {!confirmPasswordIsValid && (
            <p className="error">Password do not match</p>
          )}
        </div>
        <div className="formFields">
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default App;
