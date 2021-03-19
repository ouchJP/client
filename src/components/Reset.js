import React, { useState, useEffect } from 'react';
import "../App.css";
import firebase from "firebase/app";
import "firebase/database";

import { BrowserRouter as HashRouter, Router, Switch, Route, Link } from 'react-router-dom';


function Reset() {

    const [Email, setResetEmail] = useState("");

    const submitResetRequest = (event, Email) => {
        event.preventDefault();
        var auth = firebase.auth();

        auth.sendPasswordResetEmail(Email).then(function () {
            alert("Password reset request successful.")
        }).catch(function (error) {
            alert("An error occured. Please contact support.")
        });
    }


    return (
        <>
            <div id="main">
                <header>
                    <h1>Reset your password</h1>
                    <p>Please enter your email below and follow the instructions on the email you receive. <br /></p>
                </header>
                <form onSubmit={(event) => submitResetRequest(event, Email)} className="form">
                    <input placeholder='Contact Email' type='email' required onChange={e => setResetEmail(e.target.value)} />
                    <button type="submit" className="frontpagebuttons" id="signup">Submit</button>
                </form>
            </div>
        </>
    )
}


export default Reset;