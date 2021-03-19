import React, { useState, useEffect } from 'react';
import axios from 'axios';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { BrowserRouter as HashRouter, Router, Switch, Route, Link } from 'react-router-dom';


function Nav(props) {


    return (
        <nav>
            <a href="#" className="toggle-button">
            </a>
            <div className="logo">
                <ul>
                    <li><a>transl8 {props.isLoggedIn ? "Hello, " + props.currentUser : <p></p>}</a></li>
                </ul>
            </div>
            <div className="navbar-links">
                <ul>
                    <span id="userNav"></span>
                    <Link to="/" style={{ textDecoration: 'none' }}><li>Home</li></Link>
                    <Link to="/Requests" style={{ textDecoration: 'none' }}><li>Requests</li></Link>
                    <Link to="/Translators" style={{ textDecoration: 'none' }}><li>Translators</li></Link>
                    {props.isLoggedIn ? <>
                        <Link to="/New" style={{ textDecoration: 'none' }}><li>New</li></Link>  
                        <button onClick={() => firebase.auth().signOut()} style={{ textDecoration: 'none' }}><li>Logout</li></button>
                    </> : <><Link to="/Register" style={{ textDecoration: 'none' }}><li>Register</li></Link>
                            <Link to="/Login" style={{ textDecoration: 'none' }}><li>Login</li></Link></>}
                </ul>
            </div>
        </nav>
    )
}


export default Nav;