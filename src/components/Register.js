import React, { useContext, useState } from 'react';
import "../App.css";
import { BrowserRouter as HashRouter, Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

import { auth, signInWithGoogle, generateUserDocument } from "../firebase";

function Register() {
  const [Username, setRegisterUsername] = useState("");
  const [Password, setRegisterPassword] = useState("");
  const [Email, setRegisterEmail] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async (event, email, password) => {
    event.preventDefault();
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      generateUserDocument(user, { Username });
    }
    catch (error) {
      setError('Error Signing up with email and password');
    }



    setRegisterEmail("");
    setRegisterPassword("");
    setRegisterUsername("");
  };

  return (
    <>
      <div id="main">
        <header>
          <h1>Register</h1>
          <p>Take the first step.</p>
        </header>
        <form className="form" onSubmit={(event) => { createUserWithEmailAndPasswordHandler(event, Email, Password) }}>
          <input placeholder='Username' onChange={e => setRegisterUsername(e.target.value)} type='text' required />
          <input placeholder='Email' onChange={e => setRegisterEmail(e.target.value)} type='email' required />
          <input placeholder='Password' onChange={e => setRegisterPassword(e.target.value)} type='password' required />
          <button className="frontpagebuttons" id="signup">Register</button><br />
          <Link to="/Login" style={{ textDecoration: 'none' }}>Already a member?</Link>
        </form>
      </div>
    </>
  )
}



export default Register;
