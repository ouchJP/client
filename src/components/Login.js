import React, { useState } from 'react';
import "../App.css";
import { auth } from "../firebase";
import axios from 'axios';
import { BrowserRouter as HashRouter, Router, Switch, Route, Link } from 'react-router-dom';

function Login() {
    {/**const [Username, setLoginUsername] = useState("");**/ }
    const [Password, setLoginPassword] = useState("");
    const [Email, setLoginEmail] = useState("");
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);


    const signInWithEmailAndPasswordHandler = (event, Email, Password) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(Email, Password).catch(error => {
            setError("Incorrect login details. Check email or password.");
            alert(error);
            console.error("Error signing in with password and email", error);
        });
    };


    return (
        <>
            <div id="main">
                <header>
                    <h1>Login</h1>
                    <p>Welcome back!</p>
                </header>
                <form onSubmit={(event) => { signInWithEmailAndPasswordHandler(event, Email, Password) }} className="form">
                    {/**<input placeholder='Username' type='text' required onChange={e => setLoginUsername(e.target.value)}/>**/}
                    <input placeholder='Email' type='email' required onChange={e => setLoginEmail(e.target.value)} />
                    <input placeholder='Password' type='password' required onChange={e => setLoginPassword(e.target.value)} />
                    <button type="submit" className="frontpagebuttons" id="signup">Login</button><br />
                    <Link to="/Reset" style={{ textDecoration: 'none' }}>Forgot your password?</Link>
                </form>
            </div>
        </>
    )
}



export default Login;
